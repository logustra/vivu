<template>
  <div class="v-example">
    <slot /> 
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
  onMounted
} from 'vue'

export default defineComponent({
  name: 'VExample',

  props: {
    example: {
      type: String,
      required: true,
      default: ''
    }
  },

  setup (props) {
    onMounted (() => {
      console.log(props.example)
    })
  }
})
</script>

<style lang="scss">
.v-example {
  // your style
}
</style>
