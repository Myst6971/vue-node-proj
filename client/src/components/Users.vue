<template>
  <div class="users">
    <h1>Users</h1>
    This file will list all users.
    <!-- <div v-for="user in users">  -->
    <div v-for="(user, index) in users" :key="index">
      <p>
        <span><b>{{ user.name }}</b></span><br />
        <span>{{ user.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    console.log('mounting')
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await UsersService.fetchUsers()
      this.users = response.data
    }
  }
}
</script>