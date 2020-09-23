<template>
  <div id="app">
    <Navbar />
    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>