<template>
  <div class="d-none d-sm-none d-md-none d-lg-block" v-if="user">
      <b-card>
            <div class="d-flex justify-content-start align-items-center">
                <b-card-img
                    src="https://picsum.photos/50/50"
                    width="100"
                    left
                    class="rounded-circle"
                ></b-card-img>
                <div class="ml-2">
                    <div class="h5 m-0"><a :href="'/user/'+user.username">@{{user.username}}</a></div>
                    <div class="h7 text-muted">{{user.fullname}}</div>
                    <div class="h7">{{user.description}}</div>                   
                </div>
                <div class="col p-0 text-right" v-if="isOwn">
                    <a href="/edit" class="btn btn-primary btn-sm"> Edit </a>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="h6 text-muted"><a href="/followers">Followers </a></div>
                    <div class="h5">{{user.followers}}</div>
                </li>
                <li class="list-group-item">
                    <div class="h6 text-muted"><a href="/followings">Following </a></div>
                    <div class="h5">{{user.followings}}</div>
                </li>
            </ul>
      </b-card>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserInfo',
    data(){
        return{
            user: null,
            isOwn: true
        }
    },
    mounted(){
        const params = this.$route.params;
        let url = 'http://localhost:3000/user';
        if(Object.keys(params).length !== 0 && params.constructor === Object){
            url += `/${params.username}`;
            this.isOwn = false;
        }
        axios.get(url, {withCredentials: true})
        .then(response => {
            this.user = response.data.user;
        }).catch(error => {
            console.log(error);
        })
    }
}
</script>
