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

function createRecordChunk(operation, chunksTargetPath) {

    // Start dumping the section
    var markdownOutput = `## ${operation.name}\n`

    // The summary does not provide nothing at the moment
    // markdownOutput += `### ${operation.summary}\n`

    // CleanUp the description and inject it
    markdownOutput += cleanUpOperationDescription(operation.description) + `\n\n`

    // Properties section
    markdownOutput += `| Property | Type | Length | Req | Info |\n`
    markdownOutput += `|----------|------|--------|----------|------|\n`

    for (let propertyName in operation.schema.properties) {

        let attributes = []

        const property = operation.schema.properties[propertyName];
        const isRequired = (operation.schema.required && operation.schema.required.includes(propertyName)) ? '✅' : '❌';
        const Length = (!property.minLength && !property.maxLength) ? 'Max' : (property.minLength + '-' + property.maxLength)

        // ${prop.description || ""} | ${prop.type || ""} | ${prop.format || ""} | ${prop.example || ""} | ${prop.minLength || ""} | ${prop.maxLength || ""} | ${isRequired ? 'Yes' : 'No'} |\n`;
        // Add the info section
        attributes.push(propertyName)
        attributes.push(property.type || "string")
        attributes.push(Length)
        attributes.push(isRequired)
        attributes.push(`[INFO](a# "Format: ${property.format} Example: ${property.example}")`)

        line = '| ' + attributes.join(' | ') + ' |\n';
        markdownOutput += line;
        // Add the description line
        // markdownOutput += `| ${cleanUpPropertyDescription(property.description)} |||||\n`;
    }

    console.log(`${chunksTargetPath}/${operation.name}.md`)

    writeFile(`${chunksTargetPath}/${operation.name}.md`, markdownOutput);

}

function createRecordChunks() {

    let nomenclatorOpenApiSpec = 'http://localhost:5173/dataIntegration.json';
    let chunksTargetPath = 'content/etl/sipIn/_dynamicRecordDefinitions'

    let openApiJson = fetchJsonFromUrl(nomenclatorOpenApiSpec)

    // Flatten all operations and merge data from properties
    let operations = Object
        .values(openApiJson.paths)
        .flatMap(path => Object.values(path))
        .map(operation => ({
            name: operation.operationId,
            description: operation.description,
            summary: operation.summary,
            schema: openApiJson.components.schemas[operation.operationId]
        }))

    // Create and write the operation chunk
    operations.forEach(operation => createRecordChunk(operation, chunksTargetPath))

    // Write chunk wrapper
    writeFile(`${chunksTargetPath}/all.md`, operations.map(operation => `<!--@include: ./${operation.name}.md-->`).join("\n"));
}


function writeFile(targetFile, content) {
    fs.writeFile(targetFile, content, (err) => {
        if (err) {
            console.error('Error writing to file:', err)
            return
        }
    })
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

function cleanUpPropertyDescription(html) {
    console.log(html)
    return html
        .replace("This field has no Aliases<br />", "")
        .replace("<b>Description</b><br />", "")
        .replace("<br />", "")
}

createRecordChunks(fetchJsonFromUrl('http://localhost:5173/dataIntegration.json'));