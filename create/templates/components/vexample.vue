<template>
  <div class="v-example">
    <slot /> 
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'

const Props = Vue.extend({
  props: {
    example: {
      type: String,
      required: true,
      default: ''
    }
  }
})

@Component
export default class VExample extends Props {}
</script>

<style lang="scss">
.v-example {
  // your style
}
</style>
