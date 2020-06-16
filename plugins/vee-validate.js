import { extend } from 'vee-validate'
import { required, length, email, integer, regex } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('length', {
  ...length,
  message: 'This field must have 2 options'
})

extend('integer', {
  ...integer,
  message: 'This field must be a Number'
})

extend('regex', {
  ...regex,
  message: 'Number should be a valid Phone number'
})
