<script setup>
import { defineProps, useCssModule } from 'vue'

const props = defineProps({
  styles: String
})
const $classes = useCssModule(props.styles)
</script>

<template>
  <button :class="$classes.gButton">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style src="@/assets/css/general/button/gButtonStyle_0.css" scoped module="$styles_0"></style>
<style src="@/assets/css/general/button/gButtonStyle_1.css" scoped module="$styles_1"></style>
<style src="@/assets/css/general/button/gButtonStyle_2.css" scoped module="$styles_2"></style>

<style scoped>
button {
  position: relative;
  width: 100%;
  outline: none;
  overflow: hidden;
  cursor: pointer;
}

span {
  position: relative;
  z-index: var(--jiumu-z-index-top);
}
</style>
