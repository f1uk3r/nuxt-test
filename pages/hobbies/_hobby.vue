<template>
  <query-hobbies-form />
</template>

<script>
import QueryHobbiesForm from '../../components/QueryHobbiesForm.vue'

export default {
  components: {
    QueryHobbiesForm
  },
  validate ({ params }) {
    return /^art-craft$|^classical-dance$|^cooking$|^western-dance$|^guitar$|^indian-instrument$|^vocal$|^western-instrument$/.test(params.hobby)
  }
}
</script>
