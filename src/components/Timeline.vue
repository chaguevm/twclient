<template>
<div>
    <b-card
        no-body
        v-for="tweet in tweets" :key="tweet.id"
        class="mt-3"
    >
        <b-card-header>
            <div class="d-flex justify-content-between align-items-center" >
                <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                    </div>
                    <div class="ml-2">
                        <div class="h5 m-0"><a :href="`/profile/${tweet.username}`">@{{tweet.username}}</a></div>
                        <div class="h7 text-muted">{{tweet.fullname}} </div>
                    </div>
                </div>
                <div>
                    <b-dropdown id="dropdown" variant="link" class="m-md-2">
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                        <b-dropdown-item>Report</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </b-card-header>
        <b-card-body>
            <div class="text-muted h7 mb-2"><b-icon icon="clock"></b-icon> Hace unos segundos</div>
            <b-card-text v-html="format(tweet.tweet)"></b-card-text>
        </b-card-body>
        <b-card-footer>
            <b-link href="/like" class="card-link"><b-icon icon="hand-thumbs-up"></b-icon> Like</b-link>
            <b-link href="/like" class="card-link"><b-icon icon="chat-left-text"></b-icon> Comment</b-link>
            <b-link href="/like" class="card-link"><b-icon icon="share"></b-icon> Share</b-link>
        </b-card-footer>
    </b-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Timeline',
    props: {
        msg: String
    },
    data(){
        return {
            tweets: null
        }
    },
    created(){
        console.log('created');
        axios.post('http://localhost:3000/login', {
            username: 'chague',
            password: '123456'
        }, { withCredentials: true })
        .then(function (response) {
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    mounted(){
        console.log('mounted');
        axios
          .get('http://localhost:3000/tweets', { withCredentials: true })
          .then(res => {
              console.log(res.data.tweets);
              this.tweets = res.data.tweets;
              //this.$router.push('/Profile')
          })
          .catch(e =>{
              console.log(e);
          })
    },
    methods: {
        format(v) {
            const regex = /[#]+([A-Za-z0-9-_]+)/gi;
            const match = v.match(regex);
            if(match){
                match.forEach(ht => {
                    const nht = `<a href='/hashtags/${ht.replace('#','')}'>${ht}</a>`;
                    v = v.replace(ht, nht);
                });
            }
            return v;
        }
    }
}
</script>