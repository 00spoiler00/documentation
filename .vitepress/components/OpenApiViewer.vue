<template>
  <div>
    <h5>
      Alternatively, the spec can be 
      <b>
        <a :href="src">downloaded</a>
      </b> or read in the <b>
        <a :href="fullscreenUrl" target="_blank">full screen viewer</a>
      </b>.
    </h5>
    <br>
    <iframe :src="url" :style="`width: 100%; height:${height}px; border:0px; margin:0px; padding:0px; overflow-x:hidden`" />
  </div>
</template>
  
<script>

import { useData } from 'vitepress'
import { ref } from 'vue'

export default {

  setup() {
    const { isDark } = useData()
    let localIsDark = ref(isDark.value)
    return {
      localIsDark
    }
  },

  name: 'OpenApiViewer',

  props: {
    src: {
      required: true,
      type: String,
    },
    height: {
      default: 900,
      type: Number,
    },
  },

  computed: {

    url() {
      return `/swaggerui/index.html?url=${encodeURIComponent(this.src)}&theme=${(this.localIsDark ? 'dark' : 'light')}`
    },

    fullscreenUrl() {
      return `${this.url}&fullscreen=true`
    }

  },

}
</script>