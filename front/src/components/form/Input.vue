<template>
  <label
    :for="id"
    :class="[
      'form-input',
      `form-input_type_${type}`,
    ]"
  >
    <div
      v-if="label"
      :style="{
        color: labelColor,
      }"
      :class="[
        'form-input__label',
        required && 'form-input__label_required'
      ]"
    >
      {{ label }}
    </div>
    <input
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      :name="name"
      :value="value"
      :class="[
        'form-input__value',
        error && 'form-input__value_error',
        disabled && 'form-input__value_disabled',
        loading && 'form-input__value_loading',
      ]"
      autocomplete="off"
      @input="$emit('input', $event.target.value)"
    />
    <transition name="fade">
      <div
        v-if="error"
        class="form-input__error"
      >
        <slot name="error" />
      </div>
    </transition>
  </label>
</template>

<script>
  export default {
    name: 'FormInput',
    components: {},

    model: {
      prop: 'value',
      event: 'input',
    },

    props: {
      value: {
        type: String,
        default: '',
      },

      label: {
        type: [String, Boolean],
        default: false,
      },

      placeholder: {
        type: [String],
        default: '',
      },

      type: {
        type: String,
        default: 'text',
      },

      id: {
        type: String,
      },

      name: {
        type: String,
        default: '',
      },

      error: {
        type: Boolean,
        default: false,
      },

      loading: {
        type: Boolean,
        default: false,
      },

      labelColor: {
        type: String,
        default: '#1F2937',
      },

      required: {
        type: Boolean,
        default: false,
      },

      disabled: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({}),

    computed: {},

    watch: {},

    created() {},

    methods: {},
  }
</script>

<style lang="scss">
  .form-input {
    position: relative;
    display: block;
    &__label {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 14px;
      line-height: 157%;
      color: #1F2937;
    }
    &__value {
      width: 100%;
      padding: 9px 12px;
      border: 1px solid #D1D5DB;
      border-radius: 4px;
      font-size: 14px;
      color: #1F2937;
      font-weight: 400;
      line-height: 157%;
      background: transparent;
      &:focus,
      &:active {
        outline: none;
        border: 1px solid #D1D5DB;
      }
      &:-webkit-autofill {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 157%;
        color: #1F2937;
        -webkit-text-fill-color: #1F2937 !important;
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }
      &-webkit-autofill {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 157%;
        color: #1F2937;
        -webkit-text-fill-color: #1F2937 !important;
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }
      &_error {
        border: 1px solid #DC2626;
        background-color: #FDF2F2;
        &:focus,
        &:active {
          border-color: #DC2626;
        }
      }
      &_loading {
        background: #e9e9e9;
        border: 1px solid #e9e9e9;
      }
      &_disabled {
        border-color: #e9e9e9;
        cursor: not-allowed;
        background: #fafafa;
      }
      &::placeholder {
        color: #9ca3af;
        opacity: 1;
      }
      &:-ms-input-placeholder {
        color: #9ca3af;
      }
      &::-ms-input-placeholder {
        color: #9ca3af;
      }
    }
    &__error {
      margin-top: 2.5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 157%;
      color: #DC2626;
    }
  }
</style>
