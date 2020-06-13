<template>
  <div class="academic-form">
    <div class="relative-container">
      <div class="whole-form">
        <b-progress type="is-info" :value="progressValue" format="percent"/>
        <form action="post">
          <div v-if="step === 1" class="form-field">
            <div class="field">
              <p class="has-text-left is-size-4">
                Which of the subject(s) does the student need help with?
              </p>
              <form-checkbox rules="required" name="subjects">
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
              <!--<div class="field">
                <template v-for="(item,i) in subjectListFinal">
                  <b-checkbox
                    :key="`${i}-${item}`"
                    v-model="form.subjects"
                    :native-value="item"
                    size="is-medium"
                  >
                    {{  item  }}
                  </b-checkbox>
                  <br :key="`${i}-${item.id}`" />
                </template>
              </div>
              <p v-show="error" class="help has-text-left is-danger">
                Select atleast one option.
              </p>-->
            </div>
          </div>

          <div v-if="step === 2" class="form-field">
            <FormDropdown
              v-if="form.standard!=='pre-primary'"
              ref="board"
              v-model="form.board"
              label-text="Which board is the student's school affiliated to?"
              :options="boardArray"
              :instance="form.board"
            />

            <FormDropdown
              ref="genderPreference"
              v-model="form.gender_preference"
              label-text="Do student have a gender preference for the tutor?"
              :options="genderPreferenceArray"
              :instance="form.gender_preference"
            />

            <FormRadio
              v-model="daysRaw"
              v-validate="'required'"
              label-text="Which of the days would you prefer to take the classes?"
              :instance="daysRaw"
              field-id="daysRaw"
              name="daysRaw"
              :error="errors.first('daysRaw')"
              :option-list="daysArray"
              @add-to-instance="addToDaysInstance"
            />

            <FormCheckbox
              v-if="daysRaw==='custom'"
              v-model="form.days"
              v-validate="'required'"
              :instance="form.days"
              name="days"
              :error="errors.first('days')"
              :option-list="customDaysArray"
              @add-to-instance="addToCustomDaysInstance"
            />
          </div>
          <div v-if="step === 3" class="form-field">
            <p class="has-text-left">
              Your Contact Information
            </p>

            <FormInput
              key="name"
              v-model="form.name"
              v-validate="'required'"
              type="text"
              label-text="Name"
              :instance="form.name"
              field-id="name"
              name="name"
              :error="errors.first('name')"
              placeholder="Name"
            />

            <FormInput
              key="contact"
              v-model="form.contact"
              v-validate="{required: true, regex: /^[5-9]\d{9}$/}"
              type="tel"
              label-text="Contact(Mobile) Number"
              :instance="form.contact"
              field-id="parent-contact"
              name="contact"
              :error="errors.first('contact')"
              placeholder="Please enter 10 digit mobile number"
            />

            <FormInput
              key="email"
              v-model="form.email"
              v-validate="'required|email'"
              type="email"
              label-text="E-mail"
              :instance="form.email"
              field-id="email"
              name="email"
              :error="errors.first('email')"
              placeholder="E-mail"
            />
          </div>
          <div v-if="step === 4" class="form-field">
            <p>Your Location</p>

            <div class="field">
              <label class="label has-text-left" for="location">Your locality</label>
              <div class="control">
                <input
                  id="location"
                  ref="location"
                  key="location"
                  v-model="form.location"
                  v-validate="'required'"
                  type="text"
                  name="location"
                  placeholder="eg. Heerapura"
                  class="input"
                  :class="{'is-danger': errors.first('location'), 'is-success': !errors.first('location') && form.location && form.location!==''}"
                >
              </div>
              <p
                v-show="errors.first('location')"
                class="help has-text-left danger"
              >
                {{ errors.first('location') }}
              </p>
            </div>

            <FormInput
              key="address"
              v-model="form.address"
              v-validate="'required|min:10'"
              type="textarea"
              label-text="Your full address"
              :instance="form.address"
              field-id="address"
              name="address"
              :error="errors.first('address')"
              placeholder="Enter your postal address"
            />

            <FormInput
              key="landmark"
              v-model="form.landmark"
              v-validate="'required'"
              type="text"
              label-text="Landmark"
              :instance="form.landmark"
              field-id="landmark"
              name="landmark"
              :error="errors.first('landmark')"
              placeholder="Enter your Landmark"
            />
          </div>

          <div v-if="step === 5" class="modal-form">
            <h1>That's all, thank you!</h1>
            <span style="font-size: 60px; color: #3273dc;"><i class="fas fa-check-circle" /></span>
            <p>Our team will try to contact you as soon as possible!</p>
            <p>Got a minute? Show us some love!</p>
            <p>Follow us on <a href="https://twitter.com/edhusk_com">Twitter</a> and like us on <a href="https://www.facebook.com/edhuskindia/">Facebook</a>.</p>
          </div>
        </form>

        <div class="field is-grouped">
          <button
            v-show="step===2 || step===3 || step===4"
            class="button is-link"
            @click.prevent="prev()"
          >
            Previous
          </button>
          <button
            v-show="step===1 || step===2 || step===3"
            class="button is-link"
            @click.prevent="next()"
          >
            Next
          </button>
          <button
            v-show="step===4"
            class="button is-link"
            @click.prevent="validateBeforeSubmit()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormDropdown from './FormDropdown.vue'
import FormInput from './FormInput.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'

export default {
  name: 'QueryAcademicForm',
  components: {
    FormDropdown,
    FormInput,
    FormCheckbox,
    FormRadio
  },
  props: {},
  data () {
    return {
      step: 1,
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
  /* mounted () {
    let autocomplete = new google.maps.places.Autocomplete(
      this.$refs.location,
      { types: ['geocode'] }
    )
  }, */
  methods: {
    /* addToInstance method is corrosponding to checkbox component */
    addToDaysInstance (e) {
      this.daysRaw = e
      if (this.daysRaw === 'custom') {
        this.form.days = []
      }
    },
    addToCustomDaysInstance (e) {
      if (this.form.days.includes(e)) {
        this.form.days.push(e)
      } else {
        this.form.days.splice(this.form.days.indexOf(e), 1)
      }
    },
    prev () {
      this.progressValue -= 25
      this.step--
    },
    next () {
      if (this.step === 1) {
        this.$validator.validate('subjects', this.form.subjects)
        if (this.form.subjects.length !== 0) {
          this.step++
          this.progressValue += 25
        }
      } else if (this.step === 2 && this.form.standard !== 'pre-primary') {
        this.$refs.board.dropdownToggle()
        this.$refs.genderPreference.dropdownToggle()
        this.$validator.validate('daysRaw', this.daysRaw)
        if (this.daysRaw === 'custom') {
          this.$validator.validate('days', this.form.days)
        }
        if (
          this.form.board !== '' &&
          this.form.gender_preference !== '' &&
          this.daysRaw !== '' &&
          this.form.days !== []
        ) {
          this.step++
          this.progressValue += 25
        }
      } else if (this.step === 1 && this.form.standard === 'pre-primary') {
        this.$refs.genderPreference.dropdownToggle()
        this.$validator.validate('daysRaw', this.daysRaw)
        if (this.daysRaw === 'custom') {
          this.$validator.validate('days', this.form.days)
        }
        if (
          this.form.gender_preference !== '' &&
          this.daysRaw !== '' &&
          this.form.days !== []
        ) {
          this.step++
          this.progressValue += 25
        }
      } else if (this.step === 3) {
        this.$validator.validate('name', this.form.name)
        this.$validator.validate('contact', this.form.contact)
        this.$validator.validate('email', this.form.email).then(() => {
          if (this.errors.items.length === 0) {
            this.step++
            this.progressValue += 25
          }
        })
      }
    },
    validateBeforeSubmit () {
      this.$validator.validate('location', this.form.location)
      this.$validator.validate('address', this.form.address).then(() => {
        if (this.errors.items.length === 0) {
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
      /* this.form.standard = '',
      this.form.subjects = [],
      this.form.board = '',
      this.form.days = [],
      this.form.gender_preference = '',
      this.form.location = '',
      this.form.address = '',
      this.form.landmark = '',
      this.form.name = '',
      this.form.contact = '',
      this.form.email = '', */
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
