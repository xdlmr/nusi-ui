<template>
    <i :class="'nu_icon-' + name"
       :style="{fontSize: size+'px', color: color}"
    ></i>
</template>

<script>

export default {
  name: 'nu-icon',
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default:''
    },
    color: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">

</style>
