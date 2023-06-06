<template>
  <div id="app">
    <mavon-editor v-model="value"/>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import marked from 'marked' // 或者 var marked = require('marked')

export default {
  components: {
    mavonEditor
  },
  setup() {
    const value = ref('') // Markdown input
    const compiledMarkdown = computed(() => marked(value.value)) // Compiled HTML

    return {
      value,
      compiledMarkdown
    }
  }
}
</script>
