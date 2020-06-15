<template>
  <div class="academic-form">
    <div class="relative-container">
      <div class="whole-form">
        <form action="post">
          <div class="field">
            <p class="has-text-left is-size-4">
              Which of the subject(s) does the student need help with?
            </p>
            <!--<form-checkbox rules="required" name="subjects" label="Subject">
              <template v-for="(item,i) in subjectListFinal">
                <b-checkbox
                  :key="`${i}-${item}`"
                  v-model="form.subjects"
                  :native-value="item"
                  size="is-medium"
                >
                  {{ item }}
                </b-checkbox>
                <br :key="`${i}-${item.id}`">
              </template>
            </form-checkbox>-->
            <ValidationProvider v-slot="{ errors }" name="Subject" rules="required">
              <div class="block">
                <template v-for="(item, i) in subjectListFinal">
                  <b-checkbox
                    :key="`${i}-${item}`"
                    v-model="subjects"
                    :native-value="item"
                    size="is-medium"
                  >
                    {{ item }}
                  </b-checkbox>
                  <br :key="`${i}-${item.id}`">
                </template>
                <p class="has-text-danger">
                  {{ errors[0] }}
                </p>
              </div>
            </ValidationProvider>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'HomePage',
  layout: 'landing',
  components: {
    ValidationProvider
  },
  data () {
    return {
      subjectListFinal: [
        'All Subjects',
        'Vedic Maths',
        'Mathematics',
        'Science',
        'English',
        'Hindi',
        'Environmental Studies',
        'Mathematics-Science (Combo)',
        'Handwriting (English/Hindi)'
      ],
      subjects: []
    }
  }
}
</script>

<style scope>
  div.relative-container {
    background-image: url("../assets/form-academics.jpg");
    position: absolute;
    background-size: 100% 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    margin: 0 10px;
  }
  div.whole-form {
    position: absolute;
    top: 15%;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 5px;
  }
  form {
    padding: 10px;
    overflow-y: scroll;
    height: 80%;
  }
  div.progress-wrapper {
    padding: 10px 10px 0 10px;
  }
  form>div.form-field>div.field>p {
    padding-bottom: 15px;
  }
  div.whole-form > div.field.is-grouped {
    position: absolute;
    bottom: 10px;
    padding: 10px;
  }
  div.whole-form > div.field.is-grouped > button.button {
    margin: 5px;
  }
</style>
