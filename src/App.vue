<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">TwNode Client</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/Profile">Profile</b-nav-item>
          <b-nav-item href="/Search">Search</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    logout(evt) {
      if (confirm("Are you sure you want to log out?")) {
        axios
          .get("http://localhost:3000/logout", { withCredentials: true })
          .then((response) => {
            //Si el logout es correcto, retorna la vista del login
            this.$router.push("/login");
          })
          .catch((error) => {
            //En caso de error igual se direcciona al login
            this.$router.push("/login");
          });
      }
    },
  }
};
</script>