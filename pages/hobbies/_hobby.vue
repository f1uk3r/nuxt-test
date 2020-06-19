<template>
  <query-hobbies-skills-form />
</template>

<script>
import QueryHobbiesSkillsForm from '../../components/QueryHobbiesSkillsForm.vue'

export default {
  components: {
    QueryHobbiesSkillsForm
  },
  validate ({ params }) {
    return /^art-craft$|^classical-dance$|^cooking$|^western-dance$|^guitar$|^indian-instrument$|^vocal$|^western-instrument$/.test(params.hobby)
  }
}
</script>
