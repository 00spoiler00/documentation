#!/usr/bin/env node

const request = require('sync-request');
const fs = require('fs');

createRecordChunks();

/** Main Method */
function createRecordChunks() {

    let inlineNomenclatorStructurePath = 'https://cloud.uvesolutions.com/api/v1/integration/structure';
    let localNomenclatorStructurePath = '.vitepress/customizations/fallback_nomenclators_structure.json';
    let chunksTargetPath = 'content/api/connecta/_dynamicStructuresDefinition'

    if (!fs.existsSync(chunksTargetPath)) {
        fs.mkdirSync(chunksTargetPath);
        console.log('Folder created successfully.');
    } else {
        console.log('Folder already exists.');
    }
    // Make sure it is not tracked
    writeFile(`${chunksTargetPath}/.gitignore`, "*");

    let operations
    try {
        operations = fetchJsonFromUrl(inlineNomenclatorStructurePath)
    } catch {
        console.log("Working on local definition as real one is not available")
        operations = JSON.parse(fs.readFileSync(localNomenclatorStructurePath))
    }

    // Create and write the operation chunk
    operations.forEach(operation => createRecordChunk(operation, chunksTargetPath))

    // Write chunk wrapper
    writeFile(`${chunksTargetPath}/all.md`, operations.map(operation => `<!--@include: ./${operation.name}.md-->`).join("\n"));

    console.log('%cContent updated properly. Dynamic chunks created', 'color: red; font-weight: bold;');
}


function createRecordChunk(operation, chunksTargetPath) {

    var markdownOutput = `## ${operation.name}\n`

    if (operation.aliases) {
        markdownOutput += "### Aliases\n"
        markdownOutput += operation.aliases.map(alias => '- ' + alias).join("\n") + "\n"
    }

    if (operation.description) {
        markdownOutput += "### Description\n"
        markdownOutput += operation.description + "\n"
    }

    markdownOutput += "<table style='width:100%'><tr><td width='1px'>Pos</td><td>Property</td><td>Type</td><td>Length</td><td width='1px'>Req</td></tr>"
    markdownOutput += operation.fields.map((field, position) => convertFieldToHtml(field, position)).join('')
    markdownOutput += " </table>\n"

    writeFile(`${chunksTargetPath}/${operation.name}.md`, markdownOutput);
}

/** Helpers */

function convertFieldToHtml(field, position) {
    return '<tr>'
        + `<td>${position + 1}</td>`
        + `<td><b>${field.name}</b></td>`
        + `<td><i>${field.type ?? 'string'}</i></td>`
        + `<td>${makeUpFieldLength(field.min, field.man)}</td>`
        + `<td>${field.required ? '✔️' : '❌'}</td>`
        + '</tr>'
        + '<tr>'
        + '<td colspan="100">'
        + field.description.replace("\n", "").replace(/<\/?[^>]+(>|$)/g, "")
        + (field.aliases.length > 0 ? ('<br><b>Field aliases</b>: ' + field.aliases.join(',')) : '')
        + (field.format ? '<br><b>Format:</b> ' + field.format + "" : '')
        + (field.example ? '<br><b>Example:</b> ' + field.example + "" : '')
        + '</td></tr>'
}

function makeUpFieldLength(min, max) {
    if (!min && !max)
        return 'Max'

    if (min == max)
        return min

    return min + '-' + max
}

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
        throw error;  // Re-throwing the error to be handled by the caller
    }
}

function writeFile(targetFile, content) {
    fs.writeFile(targetFile, content, (err) => {
        if (err) {
            console.error('Error writing to file:', err)
            return
        }
    })
}


