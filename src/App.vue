<template>
  <div id="app">
    <Navbar />
      <b-row class="mt-4 mx-auto">
        <b-col md="3">
          <router-view name="left"></router-view>
        </b-col>
        <b-col :class="[isActive ? 'col-md-12' : 'col-md-6']">
          <router-view :key="$route.fullPath"></router-view>
        </b-col>
        <b-col md="3">
          <router-view name="right"></router-view>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(['isActive'])
  }
};
</script>