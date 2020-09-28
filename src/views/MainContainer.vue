<template>
  <div class="main">
    <router-view name="center" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {

  }
}
</script>
