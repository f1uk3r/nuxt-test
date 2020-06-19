<template>
  <query-skills-form />
</template>

<script>
import QuerySkillsForm from '../../components/QuerySkillsForm.vue'

export default {
  components: {
    QuerySkillsForm
  },
  validate ({ params }) {
    return /^computer-basics$|^learn-language$|^speaking-english$/.test(params.skill)
  }
}
</script>
