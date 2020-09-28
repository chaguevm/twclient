<template>
  <div class="RightSidebar">
    <SearchForm />
    <RecommendedUsers />
    <Hashtags class="mt-2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from '@/components/SearchForm.vue'
import RecommendedUsers from '@/components/RecommendedUsers.vue'
import Hashtags from '@/components/Hashtags.vue'

export default {
  name: 'RightSidebar',
  components: {
    SearchForm,
    RecommendedUsers,
    Hashtags
  }
}
</script>
