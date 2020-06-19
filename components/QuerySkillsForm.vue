<template>
  <div class="hobbies-form">
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
                      {{ subjectQuestionFinal }}
                    </p>
                    <div v-if="form.subjects.length===0" class="field">
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
                    v-model="form.level"
                    label="Your current Knowledge/Skill level."
                    rules="required"
                  >
                    <option value>Select a level</option>
                    <option
                      v-for="(item, i) in levelArray"
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
                label="Coaching Location"
              >
                <ValidationObserver ref="typeSection">
                  <form-dropdown
                    v-if="form.standard === 'guitar' || form.standard === 'vocal' || form.standard === 'indian-instrument' || form.standard === 'western-instrument' || form.standard === 'learn-language'"
                    v-model="form.type_coaching"
                    label=""
                    rules="required"
                  >
                    <option value>Select a type</option>
                    <option
                      v-for="(item, i) in typeCoachingArray"
                      :key="`${item.value}-${i}`"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </form-dropdown>

                  <form-dropdown
                    v-if="form.type_coaching !== 'batch'"
                    v-model="form.coaching_location"
                    label="Where would you prefer taking the classes?"
                    rules="required"
                  >
                    <option value>Select a location</option>
                    <option
                      v-for="(item, i) in coachingLocationArray"
                      :key="`${item.value}-${i}`"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </form-dropdown>

                  <form-dropdown
                    v-if="form.coaching_location !== 'at home'"
                    v-model="form.travel"
                    label="How far is it comfortable for you to travel?"
                    rules="required"
                  >
                    <option value>Select a distance range</option>
                    <option
                      v-for="(item, i) in travelArray"
                      :key="`${item.value}-${i}`"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </form-dropdown>
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="4"
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

                  <form-input
                    key="age"
                    v-model="form.age"
                    vid="contact"
                    type="tel"
                    label="Age of the student"
                    rules="required|integer"
                    placeholder="Age of student"
                  />
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="5"
                label="Location"
              >
                <ValidationObserver ref="locationSection">
                  <b-field
                    key="location"
                    :type="{ 'is-danger': form.location==='', 'is-success': form.location!=='' }"
                    :message="locationMessage"
                  >
                    <input
                      ref="searchTextField"
                      v-model="form.location"
                      :class="{ 'is-danger': form.location==='', 'is-success': form.location!=='' }"
                      class="input"
                      type="text"
                      placeholder="eg Heerapura"
                    >
                  </b-field>
                  <form-input
                    key="address"
                    v-model="form.address"
                    vid="address"
                    type="textarea"
                    label="Address"
                    rules="required"
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

                  <form-input
                    key="comment"
                    v-model="form.comment"
                    vid="comment"
                    type="textarea"
                    label="Anything else you would like to share with us?"
                    rules="required"
                    placeholder="Comment here"
                  />
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                step="6"
                label="Thank You"
              >
                <h1>That's all, thank you!</h1>
                <span style="font-size: 60px; color: #3273dc;"><i class="fas fa-check-circle" /></span>
                <p>Our team will try to contact you as soon as possible!</p>
                <p>Got a minute? Show us some love!</p>
                <p>Follow us on <a href="https://twitter.com/edhusk_com">Twitter</a> and like us on <a href="https://www.facebook.com/edhuskindia/">Facebook</a>.</p>
              </b-step-item>
              <template slot="navigation" slot-scope="{previous, next}">
                <div class="field is-grouped">
                  <b-button
                    v-if="step!==5"
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
                    v-if="step<4"
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
                    v-if="step===4"
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
  name: 'QuerySkillsForm',
  components: {
    ValidationObserver,
    FormDropdown,
    FormInput,
    FormCheckbox
  },
  data () {
    return {
      step: 0,
      form: {
        fees: 1000,
        category: 'Hobbies and Life Skills',
        standard: this.$route.params.skill,
        subjects: [],
        level: '',
        type_coaching: '',
        travel: '',
        coaching_location: '',
        days: [],
        gender_preference: '',
        location: '',
        address: '',
        landmark: '',
        name: '',
        age: null,
        contact: '',
        email: '',
        comment: ''
      },
      daysRaw: '',
      typeCoachingArray: [
        { value: 'batch', text: 'In a Batch' },
        { value: '1-on-1', text: '1-on-1 Sessions' },
        { value: 'flexible', text: 'Flexible to get best tutor' }
      ],
      travelArray: [
        { value: '0-1', text: '0-1 Km' },
        { value: '0-3', text: '0-3 Km' },
        { value: '0-5', text: '0-5 Km' },
        { value: 'more than 5', text: 'More than 5 Km' }
      ],
      coachingLocationArray: [
        { value: 'at home', text: 'At Home' },
        { value: 'at tutor', text: 'At Tutor\'s Location' },
        { value: 'flexible', text: 'Flexible to get best tutor' }
      ],
      genderPreferenceArray: [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'none', text: 'No preference' }
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
      levelArray: [
        { value: 'beginner', text: 'Beginner' },
        { value: 'intermediate', text: 'Intermediate' },
        { value: 'advanced', text: 'Advanced' }
      ],
      computerBasicsSubjects: [
        'Basic Computer Skill',
        'Basic Web Designing',
        'Learn Tally',
        'Microsoft Office',
        'Essential Computer Skills'
      ],
      languageSubjects: [
        'English',
        'French',
        'Italian',
        'Spanish',
        'German',
        'Bengali',
        'Gujarati'
      ],
      speakEnglishSubjects: [
        'Improve Public Speaking',
        'Spoken English',
        'English for Everyone'
      ]
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
      if (this.form.standard === 'computer-basics') {
        return this.computerBasicsSubjects
      } else if (this.form.standard === 'learn-language') {
        return this.languageSubjects
      } else if (this.form.standard === 'speaking-english') {
        return this.speakEnglishSubjects
      }
      return null
    },
    subjectQuestionFinal () {
      if (this.form.standard === 'computer-basics') {
        return 'Which of the following Computer Skill(s) do you need help with?'
      } else if (this.form.standard === 'learn-language') {
        return 'Which of the following language(s) do you need help with?'
      } else if (this.form.standard === 'speaking-english') {
        return 'Which of the following do you need help with?'
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
        this.$refs.typeSection.validate().then((success) => {
          if (success) {
            this.step++
          }
        })
      } else if (this.step === 3) {
        this.$refs.informationSection.validate().then((success) => {
          if (success) {
            this.step++
          }
        })
      }
    },
    onSubmit () {
      this.$refs.form.validate().then((success) => {
        if (success && this.form.location !== '') {
          this.addQuery()
        }
      })
    },
    emptyCoachingLocation () {
      this.form.coaching_location = ''
    },
    emptyTravel () {
      this.form.travel = ''
    },
    addQuery () {
      /* this.$axios.post('/student-query/', {
        data: {
          fees: this.form.fees,
          category: this.form.category,
          standard: this.form.standard,
          subjects: this.form.subjects,
          level: this.form.level,
          type_coaching: this.form.type_coaching,
          travel: this.form.travel,
          coaching_location: this.form.coaching_location,
          days: this.form.days,
          gender_preference: this.form.gender_preference,
          location: this.form.location,
          address: this.form.address,
          landmark: this.form.landmark,
          name: this.form.name,
          age: parseInt(this.form.age),
          contact: this.form.contact,
          email: this.form.email,
          comment: this.form.comment
        }
        .then(this.resetData())
        .catch((error) => {
          console.log(error)
        }) */
      this.resetData()
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
