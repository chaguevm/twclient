<template>
  <div class="LeftSidebar">
    <UserInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from '@/components/UserInfo.vue'

export default {
  name: 'LeftSidebar',
  components: {
    UserInfo
  }
}
</script>
