import { extend } from 'vee-validate'
import { required, length, email } from 'vee-validate/dist/rules'

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
