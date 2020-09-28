<template>
    <b-container class="p-4">
        <b-row>
            <b-col md="4" class="mx-auto">
                <b-card no-body class="text-center">
                    <b-card-header header-tag="h3">Login</b-card-header>
                    <b-card-body>
                        <b-form @submit="onSubmit">
                            <b-form-group
                                id="username-group"
                                >
                                <b-form-input
                                    id="username"
                                    v-model="login.username"
                                    required
                                    placeholder="Username"
                                    value="login.username"
                                    :state="usererror"
                                    aria-describedby="areaerror"

                                >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="password-group"
                                >
                                <b-form-input
                                    id="password"
                                    v-model="login.password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    :state="passerror"
                                    aria-describedby="areaerror"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback id="areaerror">
                                    {{message}}
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group>
                                <b-button type="submit" variant="primary">Login</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form-group>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

    export default{
        name: 'LoginForm',
        data(){
            return {
                login: {
                    username: '',
                    password: ''
                },
                message: '',
                usererror: null,
                passerror: null
            }
        },
        methods: {
            onSubmit(evnt){
                evnt.preventDefault();
                axios.post('http://localhost:3000/login', this.login, { withCredentials: true })
                .then( response => {
                    if(response.data.code === 401){
                        if(response.data.message == "Invalid Password"){
                            this.passerror = false;
                            this.usererror = true;
                        }
                        if(response.data.message == "Username does not exist"){
                            this.usererror = false;
                            this.passerror = false;
                        }
                        this.message = response.data.message;
                    }else if(response.data.code === 200){
                        if (localStorage.getItem("user") === null) {
                            localStorage.setItem('user', JSON.stringify({status: true, username: this.login.username }));
                        }
                        this.check();
                        this.$router.push('/');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            ...mapMutations({ check: 'checkLogin'})
        },
        computed: {
            ...mapState(['user'])
        }
    }
</script>
