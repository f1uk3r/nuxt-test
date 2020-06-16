<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="$attrs.label"
    :rules="rules"
    :vid="vid"
  >
    <div class="block">
      <slot />
      <p class="has-text-danger">
        {{ errors[0] }}
      </p>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'FormCheckbox',
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>
