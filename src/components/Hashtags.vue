<template>
  <b-card header="Hashtags" header-class="h5 text-center">
    <b-card-text v-for="hashtag in hashtags" :key="hashtag.id">
      <a href="/hashtags/">{{hashtag.hashtag}}</a>
    </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Hashtags",
  data() {
    return {
      hashtags: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    let url = this.$hostname;
    axios
      .get(url + "hashtags", { withCredentials: true })
      .then((response) => {
        this.hashtags = response.data.hashtags;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
