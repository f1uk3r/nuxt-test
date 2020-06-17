<template>
  <query-academic-form />
</template>

<script>
import QueryAcademicForm from '../../components/QueryAcademicForm.vue'

export default {
  components: {
    QueryAcademicForm
  },
  validate ({ params }) {
    return /^[1-9]$|^10$|^1[1-2]-sci$|^1[1-2]-com$|^1[1-2]-art$|^pre-primary$/.test(params.standard)
  }
}
</script>
