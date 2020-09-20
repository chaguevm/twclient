<template>
  <div class="home">
    <b-row>
      <UserInfo />
      <b-col md="6">
        <FormPost />
        <Timeline />
      </b-col>
      <b-col md="3">
        <RecommendedUsers />
        <Hashtags class="mt-2"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from '@/components/UserInfo.vue'
import FormPost from '@/components/FormPost.vue'
import RecommendedUsers from '@/components/RecommendedUsers.vue'
import Hashtags from '@/components/Hashtags.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Home',
  components: {
    UserInfo,
    FormPost,
    RecommendedUsers,
    Hashtags,
    Timeline
  }
}
</script>
