import { extend } from 'vee-validate'
import { required, length, email, integer, digits } from 'vee-validate/dist/rules'

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

extend('digits', {
  ...digits,
  message: 'Number should be a valid Phone number'
})
