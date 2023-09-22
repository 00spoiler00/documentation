#!/usr/bin/env node

const request = require('sync-request');
const fs = require('fs');

function fetchJsonFromUrl(url) {
    try {
        const response = request('GET', url);

        // Check if the response status is OK (status code 200)
        if (response.statusCode !== 200) {
            throw new Error('Network response was not ok');
        }

        const data = JSON.parse(response.getBody('utf8'));
        return data;
    } catch (error) {
        console.error('There was a problem fetching the JSON:', error);
        throw error;  // Re-throwing the error to be handled by the caller
    }
}

function createRecordChunks() {

    let nomenclatorOpenApiSpec = 'http://localhost:5173/dataIntegration.json';
    let chunksTargetPath = '../content/etl/sipIn/_dynamicRecordDefinitions'

    openApiJson = fetchJsonFromUrl(nomenclatorOpenApiSpec)

    if (!openApiJson.paths)
        return ""

    var headers = ''
    headers += `| Property | Type | Length | Required | Info |\n`
    headers += `|----------|------|--------|----------|------|\n`

    let chunks = []

    for (let path in openApiJson.paths) {

        for (let method in openApiJson.paths[path]) {

            // Resolve operation
            const operation = openApiJson.paths[path][method]

            // Resolve schema
            const schema = openApiJson.components.schemas[operation.operationId]

            // Store it to build the wrapper
            chunks.push(operation.operationId)

            // Start dumping the section
            var markdownOutput = `## ${operation.operationId}\n`

            // The summary does not provide nothing at the moment
            // markdownOutput += `### ${operation.summary}\n`

            markdownOutput += cleanUpOperationDescription(operation.description) + `\n\n`

            // Add the info section
            //[Display text](a "Hover text")

            // Properties section

            markdownOutput += headers

            for (let propName in schema.properties) {

                const prop = schema.properties[propName];
                const isRequired = schema.required && schema.required.includes(propName);

                // ${prop.description || ""} | ${prop.type || ""} | ${prop.format || ""} | ${prop.example || ""} | ${prop.minLength || ""} | ${prop.maxLength || ""} | ${isRequired ? 'Yes' : 'No'} |\n`;

                markdownOutput += `| ${propName} `
                markdownOutput += `| ${prop.type || ""} `
                markdownOutput += `| ${prop.minLength || ""} ${prop.maxLength || ""} `
                markdownOutput += `| ${isRequired ? 'Yes' : 'No'} `;
                markdownOutput += `| \n`;
            }
            markdownOutput += '\n';

            // Write chunk
            writeFile(`${chunksTargetPath}/${operation.operationId}.md`, markdownOutput);
        }
    }

    // Write chunk wrapper
    writeFile(`${chunksTargetPath}/all.md`, chunks.map(chunk => `<!--@include: ./${chunk}.md-->`).join("\n"));
}

function writeFile(targetFile, content) {
    fs.writeFile(targetFile, content, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`Content successfully written to ${targetFile}`);
    });
}

function cleanUpOperationDescription(html) {
    // Extract 'Aliases' value
    const aliasesMatch = html.match(/<b>Aliases<\/b><br \/><i>([^<]+)<\/i>/);

    if (!aliasesMatch) {
        return "**This record has no Aliases**\n"
    }

    const aliases = aliasesMatch[1].trim().split(',').map(alias => `- ${alias.trim()}`).join('\n');

    // Construct markdown string
    return '**Aliases**\n' + aliases;
}

createRecordChunks(fetchJsonFromUrl('http://localhost:5173/dataIntegration.json'));