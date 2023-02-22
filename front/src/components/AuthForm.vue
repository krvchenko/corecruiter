<template>
  <validation-observer ref="form">
    <form class="form-authorization" @submit.prevent="login">
      <!-- Error box -->
      <transition name="fade">
        <form-errors v-if="error" :error="error" />
      </transition>
      <!-- Email -->
      <validation-provider
        tag="div"
        class="form-authorization__group"
        name="email"
        rules="required|email"
        v-slot="{ errors, failed }"
      >
        <form-input
          v-model="form.email"
          id="authorization-email"
          type="email"
          name="email"
          label="Email"
          placeholder="name@company.com"
          :error="failed"
        >
          <template #error>
            {{ errors[0] }}
          </template>
        </form-input>
      </validation-provider>

      <!-- Password -->
      <validation-provider
        tag="div"
        class="form-authorization__group"
        name="password"
        rules="required|min:8"
        v-slot="{ errors, failed }"
      >
        <form-input
          v-model="form.password"
          id="authorization-password"
          type="password"
          name="password"
          label="Password"
          placeholder="Input your password"
          :error="failed"
        >
          <template #error>
            {{ errors[0] }}
          </template>
        </form-input>
      </validation-provider>

      <a href="/forgot.html" class="form-authorization__link">Forgot password?</a>

      <form-button
        class="form-authorization__form-button"
      >
        Sign in
      </form-button>
    </form>
  </validation-observer>
</template>

<script>
import FormInput from '~/components/form/Input'
import FormButton from '~/components/form/Button'
import FormErrors from '~/components/form/Errors'
import AuthService from '~/services/AuthService'
import { getError } from '~/utils/helpers'

import axios from 'axios'

export default {
  name: 'AuthForm',

  components: {
    FormInput,
    FormButton,
    FormErrors,
  },

  props: {},

  computed: {},

  data: () => ({
    form: {
      email: null,
      password: null
    },
    error: null,
    isValid: false,
  }),

  methods: {
    login () {
      this.$refs.form.validate().then(async success => {
        if (!success) {
          this.isValid = false
          return false
        }

        this.error = null
        this.isValid = true
        try {
          const { data } = await AuthService.login(this.form)
        } catch(error) {
          this.error = getError(error)
        }
      })
    },
  }
}
</script>

<style lang="scss">
  .form-authorization {
    min-width: 384px;
    position: relative;
    z-index: 5;
    &__group {
      margin-bottom: 22px;
    }
    &__link {
      margin-bottom: 22px;
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 157%;
      color: #2A86FF;
      transition: opacity 0.3s ease 0s;
      &:hover {
        opacity: 0.8;
      }
    }
    &__form-button {
      margin-bottom: 22px;
    }
  }
</style>
