<template>
  <div class="authorization authorization-main">
    <div class="authorization-main__container">
      <div class="authorization-main__wrapper">
        <div class="authorization-main__body">
          <div class="authorization__title">Welcome back!</div>
          <div class="authorization__subtitle">Enter your credentials to access your account</div>
          <auth-form class="authorization__form" />
        </div>
        <div class="authorization__image">
          <img decoding="async" loading="lazy" src="@/assets/img/main-image.svg" alt="men">
        </div>
        <div class="authorization__dots authorization__dots_1">
          <img decoding="async" loading="lazy" src="@/assets/img/dots.svg" alt="dots">
        </div>
        <div class="authorization__dots authorization__dots_2">
          <img decoding="async" loading="lazy" src="@/assets/img/dots.svg" alt="dots">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from '~/components/AuthForm'

export default {
  components: {
    AuthForm,
  },

  middleware: 'guest',

  metaInfo () {
    return { title: 'Login' }
  },

  data: () => ({

  }),

  methods: {
    redirect () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
  .authorization {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    @include mq('mobile', max) {
      min-height: 80vh;
    }
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      width: 50.8%;
      height: 100%;
      display: block;
      background-color: #EDF2FB;
      @include mq('620px', min) {
        content: '';
      }
      @include mq('tablet', max) {
        width: 45%;
      }
    }
    &__title {
      text-align: center;
      font-size: 24px;
      color: #1F2937;
      font-weight: 700;
      line-height: 133%;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
    &__subtitle {
      text-align: center;
      font-size: 14px;
      color: #4B5563;
      line-height: 157%;
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
    &-main {
      &__container {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        max-width: 1175px;
        min-height: 100vh;
        @include mq('tablet', max) {
          min-height: 80vh;
        }
      }
      &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        @include mq('620px', max) {
          display: block;
        }
      }
      &__body {
        max-width: unset;
      }
    }
    &__dots {
      position: absolute;
      z-index: 1;
      animation: dots 2s ease-in-out infinite alternate-reverse;
      @include mq('620px', max) {
        display: none;
      }
      @keyframes dots {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(20%);
        }
      }
      &_1 {
        top: 4%;
        left: 46.4%;
      }
      &_2 {
        right: -13%;
        bottom: 4%;
        @include mq('1250px', max) {
          right: -5%;
        }
      }
      img {
        @include mq('laptop', max) {
          width: 100px;
          height: 110px;
        } 
      }
    }
    &__image {
      position: relative;
      z-index: 2;
      padding-bottom: 42.533%;
      flex: 0 0 40.874%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @include mq('620px', max) {
        display: none;
      }
    }
    &__form {
      @include mq('laptop', max) {
        min-width: 320px;
      }
    }
  }
</style>
