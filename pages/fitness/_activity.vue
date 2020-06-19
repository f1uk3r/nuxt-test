<template>
  <query-fitness-form />
</template>

<script>
import QueryFitnessForm from '../../components/QueryFitnessForm.vue'

export default {
  components: {
    QueryFitnessForm
  },
  validate ({ params }) {
    return /^dietician$|^fitness-trainer$|^yoga$|^zumba$/.test(params.activity)
  }
}
</script>
