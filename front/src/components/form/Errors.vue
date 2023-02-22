<template>
  <div class="form-errors">
    <div class="form-errors__wrapper">
      <p 
        v-if="message"
        class="form-errors__message"
      >
        {{ message }}
      </p>
      <p
        v-if="error && getType(error) === 'string'"
        key="error"
        class="form-errors__message"
      >
        {{ error }}
      </p>
      <ul
        v-if="getType(error) === 'object'"
        class="form-errors__list"
      >
        <li v-for="key in errorKeys" :key="key">
          <b class="font-bold capitalize">{{ key | titleCase }}</b>
          <ul class="ml-2">
            <li v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
      <ul
        v-if="getType(error) === 'array'"
        class="form-errors__list"
      >
        <li
          v-for="(item, index) in error" :key="`${index}-error`"
          class="form-errors__message"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormErrors',
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, Array, String],
      default: null,
    },
  },
  computed: {
    errorKeys() {
      if (!this.error || this.getType(this.error) === 'string') {
        return null
      }
      return Object.keys(this.error)
    },
  },
  methods: {
    getErrors(key) {
      return this.error[key]
    },
    getType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
    },
  },
  filters: {
    titleCase(value) {
      return value.replace('_', ' ')
    },
  },
};
</script>

<style lang="scss">
  .form-errors {
    margin-bottom: 22px;
    background-color: #374151;
    border-radius: 6px;
    &__wrapper {
      padding: 16px;
    }
    &__list {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &__message {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 157%;
      color: #F87171;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
