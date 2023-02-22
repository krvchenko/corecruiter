<template>
  <div class="main-layout">
    <div class="wrapper">
      <div class="wrapper__inner">
        <div class="wrapper__inner-content">
          <header-logo />
          <main class="page">
            <child />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'

export default {
  name: 'MainLayout',

  components: {
    HeaderLogo,
  }
}
</script>
