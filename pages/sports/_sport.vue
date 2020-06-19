<template>
  <query-sports-form />
</template>

<script>
import QuerySportsForm from '../../components/QuerySportsForm.vue'

export default {
  components: {
    QuerySportsForm
  },
  validate ({ params }) {
    return /^badminton$|^basketball$|^chess$|^cricket$|^football$|^martial-arts$|^running$|^skating$|swimming$|^vollyball$/.test(params.sport)
  }
}
</script>
