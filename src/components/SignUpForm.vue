<template>
    <b-container class="p-4">
        <b-row>
            <b-col md="4" class="mx-auto">
                <b-card no-body class="text-center">
                    <b-card-header header-tag="h3">Sign Up</b-card-header>
                    <b-card-body>
                        <b-form @submit="onSubmit">
                            <b-form-group
                                id="username-group"
                                >
                                <b-form-input
                                    id="username"
                                    v-model="singup.username"
                                    required
                                    placeholder="Username"
                                    value="singup.username"
                                    :state="usernamevalidation"
                                    aria-describedby="messageuser"
                                    autocomplete="off"
                                    @keydown.space.prevent
                                >
                                </b-form-input>
                                <b-form-invalid-feedback id="messageuser">
                                    {{message !== '' ? '' : 'Your username must be 5-12 characters long.' }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                id="fullname-group"
                                >
                                <b-form-input
                                    id="fullname"
                                    v-model="singup.fullname"
                                    required
                                    placeholder="Fullname"
                                    value="singup.fullname"
                                    :state="fullamevalidation"
                                    aria-describedby="fullnamemessage"
                                    autocomplete="off"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback id="fullnamemessage">
                                    Your Fullname must be 5 or more characters long.
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                id="password-group"
                                >
                                <b-form-input
                                    id="password"
                                    v-model="singup.password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    :state="passerror"
                                    aria-describedby="areaerror"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback :state="usererror" id="areaerror">
                                    <b-alert show variant="danger">{{message}}</b-alert>
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group>
                                <b-button type="submit" variant="primary">Register</b-button>
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

    export default{
        name: 'SignUpForm',
        data(){
            return {
                singup: {
                    username: '',
                    fullname: '',
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
                axios.post('http://localhost:3000/signup', this.singup, { withCredentials: true })
                .then( response => {
                    console.log(response.data);
                    if(response.data.code === 401){
                        this.usererror = false;
                        this.message = response.data.message;
                    }else if(response.data.code === 200){
                        this.$router.push('/')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        computed: {
            usernamevalidation(){
                if(this.usererror !== false){
                    if(this.singup.username.length === 0)
                        return null;
                    if (this.singup.username.length > 4 && this.singup.username.length < 13)
                        return true;            
                    else
                        return false;
                }else{
                    return false;
                }
            },
            fullamevalidation(){
                if(this.singup.fullname.length === 0)
                    return null;
                if (this.singup.fullname.length > 4)
                    return true;            
                else
                    return false;
            }
        }
    }
</script>
