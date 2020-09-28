<template>
  <div class="Login">
    <LoginForm />
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue';
  import { mapState, mapMutations } from 'vuex';
  
  export default{
    name: 'Login',
    components: {
      LoginForm
    },
    created(){
      this.turnOn()
    },
    methods: {
      ...mapMutations({ turnOn: 'turnOn', turnOff: 'turnOff'})
    },
    computed: {
      ...mapState(['isActive'])
    },
    beforeDestroy(){
      console.log('Antes de destruir');
      this.turnOff()
    }
  }
</script>