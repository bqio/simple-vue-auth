<template>
  <nav>
    <h2>Simpe Vue Auth</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="!user"><router-link to="/login">Login</router-link></li>
      <li v-if="!user"><router-link to="/registration">Registration</router-link></li>
      <li><router-link to="/protected">Protected</router-link></li>
      <li v-if="user"><router-link to="/logout">Logout</router-link></li>
      <li v-if="user && !user.role"><router-link to="/admin">Admin</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>