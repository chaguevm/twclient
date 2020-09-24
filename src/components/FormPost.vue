<template>
  <b-card no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Post</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <b-form @submit="post">
        <b-form-textarea
          id="tweet"
          v-model="tweet"
          placeholder="What are you thinking?"
          rows="3"
        ></b-form-textarea>
        <b-button type="submit" variant="primary" class="mt-2">Post</b-button>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import axios from 'axios';

export default {
  name: "FormPost",
  data(){
    return {
      tweet: ''
    }
  },
  props: {
    msg: String,
  },
  methods: {
    post(e){
      let url = this.$hostname;
      e.preventDefault();
      axios.post(`${url}tweet`,  { tweet: this.tweet } , { withCredentials: true })
      .then(response => {
        this.$router.go();
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
};
</script>