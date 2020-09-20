<template>
  <div class="home">
    <b-row>
      <UserInfo />
      <b-col md="6">
        <UserFound />
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
import RecommendedUsers from '@/components/RecommendedUsers.vue'
import Hashtags from '@/components/Hashtags.vue'
import UserFound from '@/components/UserFound.vue'

export default {
  name: 'Home',
  components: {
    UserInfo,
    RecommendedUsers,
    Hashtags,
    UserFound
  }
}
</script>
