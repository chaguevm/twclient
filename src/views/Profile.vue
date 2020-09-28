<template>
  <div class="home">
    <FormPost />
    <Timeline :origen="$route.params.username"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormPost from '@/components/FormPost.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Home',
  components: {
    FormPost,
    Timeline
  }
}
</script>
