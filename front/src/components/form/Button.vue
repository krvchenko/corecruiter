<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'form-button',
      loading && 'form-button_loading',
      disabled && 'form-button_disabled',
    ]"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'FormButtom',

    components: {},

    props: {
      type: {
        type: String,
        default: 'submit',
      },

      loading: {
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
  .form-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 9px 0;
    background-color: #2A86FF;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    font-weight: 500;
    font-size: 14px;
    line-height: 157%;
    color: #ffffff;
    transition: opacity 0.3s ease 0s;
    &:hover {
      opacity: 0.8;
    }
  }
</style>
