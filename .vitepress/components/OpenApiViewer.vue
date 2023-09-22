<template>
  <iframe :src="url" style="width: 100%; height:900px; border:0px; margin:0px; padding:0px; overflow-x:hidden" />
</template>
  
<script>

export default {

  name: 'OpenApiViewer',

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