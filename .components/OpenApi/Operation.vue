<template>
  <div>

    <h2 v-html="operation.id" />
    <p v-html="cleanDescription" />

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
</template>
  
<script>

export default {
  name: 'Operation',

  props: {
    operation: {
      type: Object,
      required: true
    }
  },

  computed: {
    cleanDescription() {
      return this.operation.description.substring(0, this.operation.description.indexOf("<br/><br/><b>Description</b>"));
    }
  }

}
</script>
  