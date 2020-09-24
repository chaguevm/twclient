<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">TwNode Client</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown right v-if="user.logged">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>{{username}}</em>
            </template>
            <b-dropdown-item :href="'/'+username">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios'

    export default{
        name: 'Navbar',
        data(){
          return {
            username: ''
          }
        },
        created() {
            this.check();
            const user = JSON.parse(localStorage.getItem('user'));
            this.username = user.username;
        },
        methods: {
            logout(evt) {
            if (confirm("Are you sure you want to log out?")) {
                axios
                .get("http://localhost:3000/logout", { withCredentials: true })
                .then((response) => {
                    //Si el logout es correcto, retorna la vista del login
                    localStorage.removeItem('user');
                    this.uncheck();
                    this.$router.push("/login");
                })
                .catch((error) => {
                    //En caso de error igual se direcciona al login
                    localStorage.removeItem('user');
                    this.uncheck();
                    this.$router.push("/login");
                });
            }
            },
            ...mapMutations({ check: 'checkLogin', uncheck: 'unCheckLogin'})
        },
        computed: {
            ...mapState(['user'])
        }
    }
</script>