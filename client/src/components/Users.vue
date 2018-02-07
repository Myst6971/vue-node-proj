<template>
  <div class="users">
    <h1>Users</h1>
    This file will list all users.
     
    <div v-for="user in users">
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