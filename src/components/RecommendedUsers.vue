<template>
<div>
    <b-card
        no-body
        header="Recommended Users"
        header-class="h5 text-center"
    >        
    </b-card>
    <b-card        
        v-for="u in usernotfolloweds" :key="u.id"
    >
    <div class="d-flex justify-content-start align-items-center"
    >
        <b-card-img
            src="https://picsum.photos/50/50"
            width="70"
            left
            class="rounded-circle"
        ></b-card-img>
        <div class="ml-2">
            <div class="h5 m-0"><a :href="'/user/'+u.username">@{{u.username}}</a></div>
            <div class="h7 text-muted">{{u.fullname}}</div>
            <div class="h7">{{u.description}}</div>
        </div>
    </div>
    </b-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RecommendedUsers',
  props: {
    msg: String
  },
  data(){
      return {
          usernotfolloweds: null
      }
  },
  mounted(){
      let url = this.$hostname;
      axios.get(url+'recomendedusers', {withCredentials: true})
      .then(response => {
          this.usernotfolloweds = response.data.usernotfolloweds;
      }).catch(err => {
          console.log(err);
      })
  }
}
</script>
