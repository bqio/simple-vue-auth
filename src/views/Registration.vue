<template>
  <div>
    <h2>Registraion</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.email" type="email" placeholder="Email" required>
      <input v-model="form.password" type="password" placeholder="Password" required>
      <button>Submit</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    handleSubmit() {
      this.register(this.form).then(() => {
        this.$router.push('/login')
      }).catch((message) => {
        this.error = message
      })
    }
  }
}
</script>

<style scoped>

</style>