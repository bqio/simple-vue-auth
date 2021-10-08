<template>
  <div>
    <h2>User List</h2>
    <table>
      <thead>
        <th>Id</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td><button @click="handleClick(user.id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Admin",
  computed: {
    ...mapState(['users'])
  },
  methods: {
    async handleClick(id) {
      await this.$store.dispatch('removeUser', id)
    }
  },
  async mounted() {
    await this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>