<template>
  <h1>You are logged in!</h1>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: 'Home' }
  }
}
</script>
