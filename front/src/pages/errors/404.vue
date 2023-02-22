<template>
  <div class="not-found">
    <div class="not-found__container">
      <h1>Page not found</h1>
      <div class="not-found__links">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
  .not-found {
    margin-top: 56px;
    &__container {
      max-width: 1440px;
    }
  }
</style>
