<template>
  <div>Hello, {{ user.email }}</div>
</template>

<script>
export default {
  name: "Protected",
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>