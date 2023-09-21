<template>
  <div>
    <operation v-for="operation in operations" :key="operation.id" :operation="operation" />
  </div>
</template>
  
<script>

import Operation from './OpenApi/Operation.vue'

export default {

  name: 'OpenApiParser',

  props: {
    url: {
      required: true,
      type: String,
    },
  },

  components: {
    Operation
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

      console.log(openApiJson)

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