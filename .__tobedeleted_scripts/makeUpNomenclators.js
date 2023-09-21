// This is just a PoC on how to adapt the Integration API to a readable format for humans and not just the spec
// Probably this will be performed on the sourece (UveAPI) for simplicity, as many of the transforms are gonna be done there
// Also readapting the output would be inefficient and generate unneeded dependencies

async function fetchJsonFromUrl(url) {
    try {
        const response = await fetch(url);

        // Check if the response status is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('There was a problem fetching the JSON:', error);
        throw error;  // Re-throwing the error to be handled by the caller
    }
}

function parseOpenApiToMarkdown(openApiJson) {
    let markdownOutput = "";

    if (!openApiJson.paths)
        return markdownOutput

    for (let path in openApiJson.paths) {
        for (let method in openApiJson.paths[path]) {
            const operation = openApiJson.paths[path][method];

            if (operation.operationId && operation.summary && operation.description) {
                markdownOutput += `## ${operation.operationId}\n`;
                markdownOutput += `### ${operation.summary}\n`;
                markdownOutput += `${operation.description}\n\n`;

                if (openApiJson.components && openApiJson.components.schemas && operation.operationId in openApiJson.components.schemas) {
                    const schema = openApiJson.components.schemas[operation.operationId];

                    markdownOutput += `| Property | Description | Type | Format | Example | minLength | maxLength | Required |\n`;
                    markdownOutput += `|----------|-------------|------|--------|---------|-----------|-----------|----------|\n`;

                    for (let propName in schema.properties) {
                        const prop = schema.properties[propName];
                        const isRequired = schema.required && schema.required.includes(propName);

                        markdownOutput += `| ${propName} | ${prop.description || ""} | ${prop.type || ""} | ${prop.format || ""} | ${prop.example || ""} | ${prop.minLength || ""} | ${prop.maxLength || ""} | ${isRequired ? 'Yes' : 'No'} |\n`;
                    }
                    markdownOutput += '\n';
                }
            }
        }
    }

    return markdownOutput;
}