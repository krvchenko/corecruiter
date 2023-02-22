<template>
  <div class="header-logo">
    <div class="header-logo__container">
      <div class="header-logo__logo ibg">
        <img decoding="async" loading="lazy" src="@/assets/img/logo.svg" alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderLogo',

  components: {},

  data: () => ({}),

  computed: mapGetters({}),

  methods: {

  }
}
</script>

<style lang="scss">
  .header-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 18px 0;
    background-color: #FFFFFF;
    &__container {
      max-width: 1385px!important;
    }
    &__logo {
      width: 144px;
      height: 20px;
    }
  }
</style>
