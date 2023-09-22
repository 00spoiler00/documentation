<template>
  <div>
    <div v-for="operation in operations" :key="operation.id">

      <h2 v-html="operation.id" />

      <p v-html="operation.description.substring(0, operation.description.indexOf('<br/><br/><b>Description</b>'))" />

      <table style="width: 500px">

        <tbody>
          <template v-for="field in operation.fields">

            <tr>
              <td colspan="5" v-html="'<b>Field:</b> ' + field.name" />
            </tr>

            <tr>
              <th>Type</th>
              <th>Format</th>
              <th>Required</th>
              <th>MinLength</th>
              <th>MaxLength</th>
            </tr>

            <tr>
              <td v-html="field.type" />
              <td v-html="field.format" />
              <td v-html="field.required ? 'Yes' : 'No'" />
              <td v-html="field.minLength" />
              <td v-html="field.maxLength" />
            </tr>

            <tr>
              <td colspan="5" v-html="field.description.replace('<br /><b>Description</b><br />', '')" />
            </tr>

          </template>
        </tbody>

      </table>
    </div>
  </div>
</template>
  
<script>

export default {

  name: 'OpenApiParserToHtml',

  props: {
    url: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      operations: []
    }
  },

  mounted() {
    this.parseApiContent()
  },

  methods: {

    async parseApiContent() {

      const response = await fetch(this.url)
      const openApiJson = await response.json()

      if (!openApiJson.paths) {
        this.operations = []
        return
      }

      const operationsList = []

      for (let path in openApiJson.paths) {
        for (let method in openApiJson.paths[path]) {
          const operationData = openApiJson.paths[path][method]
          const operationObj = {
            id: operationData.operationId,
            summary: operationData.summary,
            description: operationData.description,
            fields: []
          }

          if (openApiJson.components && openApiJson.components.schemas && operationData.operationId in openApiJson.components.schemas) {

            const schema = openApiJson.components.schemas[operationData.operationId]

            for (let propName in schema.properties) {
              const prop = schema.properties[propName]
              const isRequired = schema.required && schema.required.includes(propName)

              operationObj.fields.push({
                name: propName,
                description: prop.description || "",
                type: prop.type || "",
                format: prop.format || "",
                example: prop.example || "",
                minLength: prop.minLength || "",
                maxLength: prop.maxLength || "",
                required: isRequired
              })
            }
          }

          operationsList.push(operationObj)
        }
      }
      this.operations = operationsList
    }

  },

}
</script>