<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right" v-if="!isAuthenticated">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ name: 'login' }"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ name: 'register' }"
          >
            Register
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav pull-xs-right" v-else>
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a href="#"
            class="nav-link"
            active-class="active"
            @click = "logout()"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { LOGOUT } from '../store/actions.type';
export default {
  name: "Header",
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.auth.isAuthenticated,
    }),
  },
  methods: {
    async logout() {
      console.log("logout")
      const isSuccess = await this.$store.dispatch(LOGOUT)
      if(isSuccess) {
        this.$router.push({ name: "home" })
      }
    }
  }
};
</script>
