<template>
  <div class="SignUp">
    <SignUpForm />
  </div>
</template>

<script>
  import SignUpForm from '@/components/SignUpForm.vue';

  export default{
    name: 'SignUp',
    components: {
      SignUpForm
    }
  }
</script>