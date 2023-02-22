import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules';

// Add rules.
extend('email', {
  ...email,
  message: 'Invalid {_field_} format'
})

extend('required', {
  ...required,
  message: '{_field_} is required'
})

extend('min', {
  ...min,
  params: ['length'],
  message: '{_field_} must have at least {length} characters'
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
