<template>
  <div>

    <h2 v-html="operation.id" />
    <h3 v-html="operation.summary" />
    <p v-html="operation.description" />

    <table style="width: 100%;">
      <thead>
        <tr>
          <th>Type</th>
          <th>Format</th>
          <th>Required</th>
          <th>MinLength</th>
          <th>MaxLength</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="field in operation.fields">
          <tr>
            <td v-html="field.type" />
            <td v-html="field.format" />
            <td v-html="field.required ? 'Yes' : 'No'" />
            <td v-html="field.minLength" />
            <td v-html="field.maxLength" />
          </tr>
          <tr>
            <td colspan="5" v-html="field.name" />
          </tr>
          <tr>
            <td colspan="5" v-html="field.description" />
          </tr>
        </template>
      </tbody>

    </table>
  </div>
</template>
  
<script>

export default {
  name: 'Operation',

  props: {
    operation: {
      type: Object,
      required: true
    }
  }

}
</script>
  