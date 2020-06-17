/* eslint-disable no-console */
<template>
  <div class="academic-form">
    <div class="relative-container">
      <div class="whole-form">
        <ValidationObserver ref="form">
          <form action="post">
            <b-steps v-model="step">
              <b-step-item
                step="1"
                label="Subject"
              >
                <ValidationObserver ref="subjectSection">
                  <div class="field">
                    <p class="has-text-left is-size-4">
                      Which of the subject(s) does the student need help with?
                    </p>
                    <div class="field" v-if="form.subjects.length===0">
                      <b-tag
                        type="is-danger"
                      >
                        <b-icon icon-pack="fas" icon="times-circle" />
                        Choose atleast one subject
                      </b-tag>
                    </div>
                    <form-checkbox
                      rules="required"
                      label="Subject"
                    >
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
                    </form-checkbox>
                  </div>
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="2"
                label="Preference"
              >
                <ValidationObserver ref="preferenceSection">
                  <form-dropdown
                    v-if="form.standard!=='pre-primary'"
                    ref="board"
                    v-model="form.board"
                    label="Which board is the student's school affiliated to?"
                    rules="required"
                  >
                    <option value>Select a Board</option>
                    <option
                      v-for="(item, i) in boardArray"
                      :key="`${item.value}-${i}`"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </form-dropdown>

                  <form-dropdown
                    ref="genderPreference"
                    v-model="form.gender_preference"
                    label="Do student have a gender preference for the tutor?"
                    rules="required"
                  >
                    <option value>Select an option</option>
                    <option
                      v-for="(item, i) in genderPreferenceArray"
                      :key="`${item.value}-${i}`"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </form-dropdown>

                  <div class="field">
                    <p class="has-text-left is-size-4">
                      Which of the days would you prefer to take the classes?
                    </p>
                    <div class="field" v-if="form.days.length===0">
                      <b-tag
                        type="is-danger"
                      >
                        <b-icon icon-pack="fas" icon="times-circle" />
                        Choose one of the options
                      </b-tag>
                    </div>
                    <form-checkbox
                      rules="required"
                      label="daysRaw"
                    >
                      <template v-for="(item,i) in daysArray">
                        <b-radio
                          :key="`${i}-${item.value}`"
                          v-model="daysRaw"
                          :native-value="item.value"
                          size="is-medium"
                        >
                          {{ item.text }}
                        </b-radio>
                        <br :key="`${i}-${item.id}`">
                      </template>
                    </form-checkbox>
                  </div>

                  <div v-if="daysRaw==='custom'" class="field">
                    <form-checkbox
                      rules="required"
                      label="Days"
                    >
                      <template v-for="(item,i) in customDaysArray">
                        <b-checkbox
                          :key="`${i}-${item}`"
                          v-model="form.days"
                          :native-value="item"
                          size="is-medium"
                        >
                          {{ item }}
                        </b-checkbox>
                        <br :key="`${i}-${item.id}`">
                      </template>
                    </form-checkbox>
                  </div>
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="3"
                label="Personal Information"
              >
                <ValidationObserver ref="informationSection">
                  <form-input
                    key="name"
                    v-model="form.name"
                    vid="name"
                    type="text"
                    label="Name"
                    rules="required"
                    placeholder="Enter your name"
                  />

                  <form-input
                    key="contact"
                    v-model="form.contact"
                    vid="contact"
                    type="tel"
                    label="Contact(Mobile) Number"
                    rules="required|digits:10"
                    placeholder="Please enter 10 digit mobile number"
                  />

                  <form-input
                    key="email"
                    v-model="form.email"
                    vid="email"
                    type="email"
                    label="E-mail"
                    rules="required|email"
                    placeholder="E-mail"
                  />
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="4"
                label="Location"
              >
                <ValidationObserver ref="locationSection">
                  <b-field
                    key="location"
                    :type="{ 'is-danger': form.location==='', 'is-success': form.location!=='' }"
                    :message="locationMessage"
                  >
                    <input ref="searchTextField" v-model="form.location" class="input" type="text" placeholder="eg Heerapura">
                  </b-field>
                  <form-input
                    key="address"
                    v-model="form.address"
                    vid="address"
                    type="textarea"
                    label="Address"
                    rules="required|min:10"
                    placeholder="Enter your postal address"
                  />

                  <form-input
                    key="landmark"
                    v-model="form.landmark"
                    vid="landmark"
                    type="text"
                    label="Landmark"
                    rules="required"
                    placeholder="Enter your Landmark"
                  />
                </ValidationObserver>
              </b-step-item>
              <template slot="navigation" slot-scope="{previous, next}">
                <div class="field is-grouped">
                  <b-button
                    outlined
                    type="is-info"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action"
                  >
                    Previous
                  </b-button>
                  <b-button
                    v-if="step!==3"
                    outlined
                    type="is-info"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="onNext"
                  >
                    Next
                  </b-button>
                  <b-button
                    v-if="step===3"
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="check-circle"
                    @click.prevent="onSubmit"
                  >
                    Submit
                  </b-button>
                </div>
              </template>
            </b-steps>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import FormDropdown from './FormDropdown.vue'
import FormInput from './FormInput.vue'
import FormCheckbox from './FormCheckbox.vue'

export default {
  name: 'QueryAcademicForm',
  components: {
    ValidationObserver,
    FormDropdown,
    FormInput,
    FormCheckbox
  },
  props: {},
  data () {
    return {
      step: 0,
      progressValue: 0,
      boardArray: [
        { value: 'cbse', text: 'CBSE' },
        { value: 'icse', text: 'ICSE' },
        { value: 'state', text: 'State Board' },
        { value: 'international', text: 'International Board' }
      ],
      genderPreferenceArray: [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'none', text: 'No preference' }
      ],
      prePrimarySubjects: [
        'Abacus',
        'Handwriting Basics',
        'English Phonetics',
        'English',
        'KG Academics'
      ],
      standard1To5Subjects: [
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
      standard6To10Subjects: [
        'Mathematics',
        'Science',
        'Computer Science',
        'English',
        'Hindi',
        'Social Science',
        'Sanskrit',
        'Environmental Studies',
        'French',
        'German',
        'Spanish',
        'Mathematics-Science (Combo)',
        'Olympiad Maths/Science'
      ],
      standard11To12ArtsSubjects: [
        'Geography',
        'History',
        'Political Science',
        'Humanities',
        'English',
        'Psychology',
        'Computer Science/Information Practices'
      ],
      standard11To12CommerceSubjects: [
        'Accounts',
        'Business Studies',
        'Economics',
        'Mathematics',
        'English',
        'Psychology',
        'Computer Science/Information Practices'
      ],
      standard11To12ScienceSubjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'PCB Combo',
        'PCM Combo',
        'Computer Science/Information Practices',
        'Competitive Exam Preparation'
      ],
      daysArray: [
        { value: '5', text: '5 days a week (Weekdays)' },
        { value: '6', text: '6 days a week (Weekdays + Saturday)' },
        { value: '7', text: '7 days a week (Everyday)' },
        { value: '3-1', text: '3 days a week I (Monday,Wednesday,Friday)' },
        { value: '3-2', text: '3 days a week II (Tuesday,Thursday,Saturday)' },
        { value: '2', text: 'Weekends (Sunday and Saturday)' },
        { value: 'custom', text: 'Custom' }
      ],
      customDaysArray: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      form: {
        fees: 1000,
        category: 'Academics',
        standard: this.$route.params.standard,
        subjects: [],
        board: '',
        days: [],
        gender_preference: '',
        location: '',
        address: '',
        landmark: '',
        name: '',
        contact: '',
        email: ''
      },
      daysRaw: ''
    }
  },
  computed: {
    locationMessage () {
      if (this.form.location === '') {
        return 'This field is required'
      }
      return null
    },
    subjectListFinal () {
      if (this.form.standard === 'pre-primary') {
        return this.prePrimarySubjects
      } else if (
        this.form.standard === '1' ||
        this.form.standard === '2' ||
        this.form.standard === '3' ||
        this.form.standard === '4' ||
        this.form.standard === '5'
      ) {
        return this.standard1To5Subjects
      } else if (
        this.form.standard === '6' ||
        this.form.standard === '7' ||
        this.form.standard === '8' ||
        this.form.standard === '9' ||
        this.form.standard === '10'
      ) {
        return this.standard6To10Subjects
      } else if (
        this.form.standard === '11-sci' ||
        this.form.standard === '12-sci'
      ) {
        return this.standard11To12ScienceSubjects
      } else if (
        this.form.standard === '11-com' ||
        this.form.standard === '12-com'
      ) {
        return this.standard11To12CommerceSubjects
      } else if (
        this.form.standard === '11-art' ||
        this.form.standard === '12-art'
      ) {
        return this.standard11To12ArtsSubjects
      }
      return null
    }
  },
  watch: {
    daysRaw (newValue) {
      if (newValue === '5') {
        this.form.days = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ]
      } else if (newValue === '6') {
        this.form.days = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ]
      } else if (newValue === '7') {
        this.form.days = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ]
      } else if (newValue === '3-1') {
        this.form.days = ['Monday', 'Wednesday', 'Friday']
      } else if (newValue === '3-2') {
        this.form.days = ['Tuesday', 'Thursday', 'Saturday']
      } else if (newValue === '2') {
        this.form.days = ['Saturday', 'Sunday']
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.searchTextField),
      { types: ['geocode'] }
    )
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace()
      // eslint-disable-next-line no-template-curly-in-string
      this.form.location = place.formatted_address
    })
  },
  methods: {
    onNext () {
      if (this.step === 0) {
        this.$refs.subjectSection.validate()
        if (this.form.subjects.length !== 0) {
          this.step++
        }
      } else if (this.step === 1) {
        this.$refs.preferenceSection.validate().then((success) => {
          if (success && this.form.days !== []) {
            this.step++
          }
        })
      } else if (this.step === 2) {
        this.$refs.informationSection.validate().then((success) => {
          if (success) {
            this.step++
          }
        })
      }
    },
    onSubmit () {
      this.$ref.formvalidate().then((success) => {
        if (success && this.form.location !== '') {
          this.addQuery()
        }
      })
    },
    addQuery () {
      this.$axios.post('/student-query/', {
        data: {
          fees: this.form.fees,
          category: this.form.category,
          standard: this.form.standard,
          subjects: this.form.subjects,
          board: this.form.board,
          days: this.form.days,
          gender_preference: this.form.gender_preference,
          location: this.form.location,
          address: this.form.address,
          landmark: this.form.landmark,
          name: this.form.name,
          contact: this.form.contact,
          email: this.form.email
        }
      })
        .then(this.resetData())
        .catch((error) => {
          console.log(error)
        })
    },
    resetData () {
      this.$refs.form.reset()
      this.step++
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
    height: 85%;
  }
  div.progress-wrapper {
    padding: 10px 10px 0 10px;
  }
  form>div.form-field>div.field>p {
    padding-bottom: 15px;
  }
/*  nav.steps {
    position: absolute;
  }*/
  div.field.is-grouped {
    position: absolute;
    bottom: 5px;
    padding: 10px 10px 0px 10px;
  }
  div.field.is-grouped > button.button {
    margin: 5px;
  }
</style>
