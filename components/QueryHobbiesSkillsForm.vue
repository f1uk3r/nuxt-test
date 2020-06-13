<template>
  <div class="hobbies-form">
    <div class="relative-container">
      <div class="whole-form">
        <b-progress type="is-info" :value="progressValue" format="percent" />
        <form action="post">
          <div v-if="step === 1" class="modal-form">
            <div class="field">
              <p class="has-text-left is-size-4">
                {{ subjectQuestionFinal }}
              </p>
              <div class="field">
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
              </div>
              <p v-show="error" class="help has-text-left is-danger">
                Select atleast one option.
              </p>
            </div>
          </div>

          <div v-if="step === 2" class="modal-form">
            <FormDropdown
              v-show="form.standard === 'guitar' || form.standard === 'vocal' || form.standard === 'indian-instrument' || form.standard === 'western-instrument' || form.standard === 'learn-language'"
              ref="level"
              v-model="form.level"
              labelText="Your current Knowledge/Skill level."
              :options="levelArray"
              :instance="form.level"
            />

            <FormDropdown
              ref="genderPreference"
              v-model="form.gender_preference"
              labelText="Do you have a gender preference of the tutor?"
              :options="genderPreferenceArray"
              :instance="form.gender_preference"
            />

            <div class="field">
              <p class="has-text-left">
                Which of the days would you prefer to take the classes?
              </p>
              <div class="field">
                <template v-for="(item,i) in daysArray">
                  <b-radio
                    :key="`${i}-${item.value}`"
                    v-model="daysRaw"
                    :native-value="item.value"
                    size="is-medium"
                    type="is-success"
                  >
                    {{ item.text }}
                  </b-radio>
                  <br :key="`${i}-${item.value}`">
                </template>
              </div>
              <p v-show="error" class="help has-text-left is-danger">
                Select atleast one option.
              </p>
            </div>
            <div v-if="daysRaw==='custom'" class="field">
              <p class="has-text-left is-size-4">
                How would you prefer to learn?
              </p>
              <div class="field">
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
              </div>
              <p v-show="error" class="help has-text-left is-danger">
                Select atleast one option.
              </p>
            </div>
          </div>

          <div v-if="step === 3" class="modal-form">
            <FormDropdown
              ref="typeCoaching"
              v-model="form.type_coaching"
              labelText=""
              :options="typeCoachingArray"
              :instance="form.type_coaching"
              @input="emptyCoachingLocation()"
            />

            <FormDropdown
              v-show="form.type_coaching !== 'batch'"
              ref="coachingLocation"
              v-model="form.coaching_location"
              labelText="Where would you prefer taking the classes?"
              :options="coachingLocationArray"
              :instance="form.coaching_location"
              @input="emptyTravel()"
            />

            <FormDropdown
              v-show="form.coaching_location !== 'at home'"
              ref="travel"
              v-model="form.travel"
              labelText="How far is it comfortable for you to travel?"
              :options="travelArray"
              :instance="form.travel"
            />
          </div>

          <div v-if="step === 4" class="modal-form">
            <p class="has-text-left">
              Your Contact Information
            </p>

            <FormInput
              key="name"
              v-model="form.name"
              v-validate="'required'"
              type="text"
              labelText="Name"
              :instance="form.name"
              fieldId="name"
              name="name"
              :error="errors.first('name')"
              placeholder="Name"
            />

            <FormInput
              key="contact"
              v-model="form.contact"
              v-validate="{required: true, regex: /^[5-9]\d{9}$/}"
              type="tel"
              labelText="Contact(Mobile) Number"
              :instance="form.contact"
              fieldId="contact"
              name="contact"
              :error="errors.first('contact')"
              placeholder="Please enter 10 digit mobile number"
            />

            <FormInput
              key="email"
              v-model="form.email"
              v-validate="'required|email'"
              type="email"
              labelText="E-mail"
              :instance="form.email"
              fieldId="email"
              name="email"
              :error="errors.first('email')"
              placeholder="E-mail"
            />

            <FormInput
              key="age"
              v-model="form.age"
              v-validate="'required|min_value:5'"
              type="number"
              labelText="Age of the student"
              :instance="form.age"
              fieldId="age"
              name="age"
              :error="errors.first('age')"
              placeholder="Age of student"
            />
          </div>

          <div v-if="step === 5" class="modal-form">
            <p>Your Location</p>
            <FormInput
              key="location"
              v-model="form.location"
              v-validate="'required'"
              type="text"
              labelText="Your locality"
              :instance="form.location"
              fieldId="location"
              name="location"
              :error="errors.first('location')"
              placeholder="eg.Heerapura"
            />

            <FormInput
              key="address"
              v-model="form.address"
              v-validate="'required|min:10'"
              type="textarea"
              labelText="Your full address"
              :instance="form.address"
              fieldId="address"
              name="address"
              :error="errors.first('address')"
              placeholder="Enter your postal address"
            />

            <FormInput
              key="landmark"
              v-model="form.landmark"
              v-validate="'required'"
              type="text"
              labelText="Landmark"
              :instance="form.landmark"
              fieldId="landmark"
              name="landmark"
              :error="errors.first('landmark')"
              placeholder="Enter your Landmark"
            />

            <FormInput
              key="comment"
              v-model="form.comment"
              type="textarea"
              labelText="Anything else you would like to share with us?"
              :instance="form.comment"
              fieldId="comment"
              name="comment"
              :error="errors.first('comment')"
              placeholder="Comment here"
            />
          </div>
          <div v-if="step === 6" class="modal-form">
            <h1>That's all, thank you!</h1>
            <span style="font-size: 60px; color: #3273dc;"><i class="fas fa-check-circle" /></span>
            <p>Our team will try to contact you as soon as possible!</p>
            <p>Got a minute? Show us some love!</p>
            <p>Follow us on <a href="https://twitter.com/edhusk_com">Twitter</a> and like us on <a href="https://www.facebook.com/edhuskindia/">Facebook</a>.</p>
          </div>
        </form>
        <div class="field is-grouped">
          <button
            v-show="step===2 || step===3 || step===4 || step===5"
            class="button is-link"
            @click="prev"
          >
            Previous
          </button>
          <button
            v-show="step===1 || step===2 || step===3 || step===4"
            class="button is-link"
            @click="next"
          >
            Next
          </button>
          <button
            v-show="step===5"
            class="button is-link"
            @click="validateBeforeSubmit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'

export default {
  name: 'QueryHobbiesSkillsForm',
  components: {
    FormDropdown,
    FormInput
  },
  props: {

  },
  data () {
    return {
      modalStatus: false,
      step: 1,
      progressValue: 0,
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
      artSubjects: [
        'Art for Kids',
        'Calligraphy',
        'Canvas Painting',
        'Charcoal Painting',
        'Basic Sketching',
        'Oil Painting',
        'Watercolor Painting',
        'Pencil Sketching',
        'Glass Painting',
        'Jewellery Design',
        'Knitting Classes',
        'Mehendi Designing'
      ],
      classicalDanceSubjects: [
        'Bhangra',
        'Kathak',
        'Bharatnatyam',
        'Ghoomer',
        'Kalbeliya',
        'Other Classical Dances'
      ],
      computerBasicsSubjects: [
        'Basic Computer Skill',
        'Basic Web Designing',
        'Learn Tally',
        'Microsoft Office',
        'Essential Computer Skills'
      ],
      cookingSubjects: [
        'Cooking',
        'Baking'
      ],
      westernDanceSubjects: [
        'Anybody Can Dance',
        'Bollywood Dance',
        'Jazz Dance',
        'Hip Hop',
        'Belly Dance',
        'B-Boying',
        'Contemporary Dance',
        'Wedding Choreography'
      ],
      guitarSubjects: [
        'Acoustic Guitar',
        'Bass Guitar',
        'Electric Guitar',
        'Not Sure Yet'
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
      indianInstrumentSubjects: [
        'Tabla',
        'Dholak',
        'Harmonium',
        'Veena',
        'Mradanga',
        'Sitar',
        'Bansuri'
      ],
      speakEnglishSubjects: [
        'Improve Public Speaking',
        'Spoken English',
        'English for Everyone'
      ],
      vocalSubjects: [
        'Bollywood Vocal',
        'Indian Classical Vocal',
        'Western Vocal'
      ],
      westerInstrumentSubjects: [
        'Violin',
        'Keyboard',
        'Mouth Organ',
        'Flute',
        'Drums'
      ]
    }
  },
  computed: {
    subjectListFinal () {
      if (this.form.standard === 'art-craft') {
        return this.artSubjects
      } else if (this.form.standard === 'classical-dance') {
        return this.classicalDanceSubjects
      } else if (this.form.standard === 'computer-basics') {
        return this.computerBasicsSubjects
      } else if (this.form.standard === 'cooking') {
        return this.cookingSubjects
      } else if (this.form.standard === 'western-dance') {
        return this.westernDanceSubjects
      } else if (this.form.standard === 'guitar') {
        return this.guitarSubjects
      } else if (this.form.standard === 'learn-language') {
        return this.languageSubjects
      } else if (this.form.standard === 'indian-instrument') {
        return this.indianInstrumentSubjects
      } else if (this.form.standard === 'speaking-english') {
        return this.speakEnglishSubjects
      } else if (this.form.standard === 'vocal') {
        return this.vocalSubjects
      } else if (this.form.standard === 'western-instrument') {
        return this.westerInstrumentSubjects
      }
      return null
    },
    subjectQuestionFinal () {
      if (this.form.standard === 'art-craft') {
        return 'Which of the following Artform(s) do you need help with?'
      } else if (this.form.standard === 'classical-dance') {
        return 'Which of the following Dance-form(s) do you need help with?'
      } else if (this.form.standard === 'computer-basics') {
        return 'Which of the following Computer Skill(s) do you need help with?'
      } else if (this.form.standard === 'cooking') {
        return 'Which of the following do you need help with?'
      } else if (this.form.standard === 'western-dance') {
        return 'Which of the following Dance-form(s) do you need help with?'
      } else if (this.form.standard === 'guitar') {
        return 'Which of the following Guitar skill(s) do you need help with?'
      } else if (this.form.standard === 'learn-language') {
        return 'Which of the following language(s) do you need help with?'
      } else if (this.form.standard === 'indian-instrument') {
        return 'Which of the following Instrument(s) do you need help with?'
      } else if (this.form.standard === 'speaking-english') {
        return 'Which of the following do you need help with?'
      } else if (this.form.standard === 'vocal') {
        return 'Which of the following Singing-form(s) do you need help with?'
      } else if (this.form.standard === 'western-instrument') {
        return 'Which of the following Instrument(s) do you need help with?'
      }
      return null
    }
  },
  watch: {
    daysRaw (newValue) {
      if (newValue === '5') {
        this.form.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      } else if (newValue === '6') {
        this.form.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      } else if (newValue === '7') {
        this.form.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      } else if (newValue === '3-1') {
        this.form.days = ['Monday', 'Wednesday', 'Friday']
      } else if (newValue === '3-2') {
        this.form.days = ['Tuesday', 'Thursday', 'Saturday']
      } else if (newValue === '2') {
        this.form.days = ['Saturday', 'Sunday']
      } else {
        this.form.days = []
      }
    }
  },
  methods: {
    prev () {
      this.progressValue -= 20
      this.step--
    },
    next () {
      if (this.step === 1) {
        this.$validator.validate('subjects', this.form.subjects)
        if (this.form.subjects.length !== 0) {
          this.step++
          this.progressValue += 20
        }
      } else if (this.step === 2) {
        this.$refs.level.dropdownToggle()
        this.$refs.genderPreference.dropdownToggle()
        this.$validator.validate('daysRaw', this.daysRaw)
        if (this.daysRaw === 'custom') {
          this.$validator.validate('days', this.form.days)
        }
        if (['guitar', 'vocal', 'indian-instrument', 'western-instrument'].includes(this.form.standard) === -1) {
          if (this.form.gender_preference !== '' && this.daysRaw !== '' && this.form.days !== []) {
            this.step++
            this.progressValue += 20
          }
        } else if (this.form.level !== '' && this.form.gender_preference !== '' && this.form.days.length !== 0) {
          this.step++
          this.progressValue += 20
        }
      } else if (this.step === 3) {
        this.$refs.typeCoaching.dropdownToggle()
        this.$refs.coachingLocation.dropdownToggle()
        this.$refs.travel.dropdownToggle()
        if (this.form.type_coaching !== '') {
          if (this.form.type_coaching !== 'batch' && this.form.coaching_location !== '') {
            if (this.form.coaching_location !== 'at home' && this.form.travel !== '') {
              this.step++
              this.progressValue += 20
            } else if (this.form.coaching_location === 'at home' && this.form.travel === '') {
              this.step++
              this.progressValue += 20
            }
          } else if (this.form.type_coaching === 'batch' && this.form.travel !== '') {
            this.step++
            this.progressValue += 20
          }
        }
      } else if (this.step === 4) {
        this.$validator.validate('name', this.form.name)
        this.$validator.validate('contact', this.form.contact)
        this.$validator.validate('email', this.form.email)
        this.$validator.validate('age', this.form.age).then(() => {
          if (this.errors.items.length === 0) {
            this.step++
            this.progressValue += 20
          }
        })
      }
    },
    validateBeforeSubmit () {
      this.$validator.validate('location', this.form.location)
      this.$validator.validate('address', this.form.address)
      this.$validator.validate('landmark', this.form.landmark)
      this.$validator.validate('comment', this.form.comment)
      if (this.errors.items.length === 0) {
        this.addQuery()
        this.modalToggle()
      }
    },
    emptyCoachingLocation () {
      this.form.coaching_location = ''
    },
    emptyTravel () {
      this.form.travel = ''
    },
    addQuery () {
      this.$axios.post('/student-query/', {
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
      }).then(() => {
        /* this.form.subjects = [],
        this.form.level = '',
        this.form.type_coaching = '',
        this.form.travel = '',
        this.form.coaching_location = '',
        this.form.days = '',
        this.form.gender_preference = '',
        this.form.location = '',
        this.form.address = '',
        this.form.landmark = '',
        this.form.name = '',
        this.form.age = '',
        this.form.contact = '',
        this.form.email = '',
        this.form.comment = '', */
        this.step++
      })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scope>
/* div.academic-form {
    position: absolute;
    border: 15px solid orange
  } */
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
  width: 500px;
  height: 400px;
  background-color: white;
  top: 100px;
  left: 350px;
  border-radius: 5px;
}
div.progress-header {
  padding: 10px;
  border: 2px;
}
form {
  padding: 20px 10px;
  overflow-y: scroll;
  height: 300px;
}
div.whole-form > div.field.is-grouped {
  position: absolute;
  bottom: 10px;
  padding: 10px;
}
div.whole-form > div.field.is-grouped > button.button {
  margin: 5px;
}
@media (max-width: 1440px) {
  div.whole-form {
    top: 12%;
    width: 60%;
    height: 75%;
    left: 20%;
    font-size: 26px;
  }
  form {
    height: 75%;
  }
}
@media (max-width: 767px) {
  div.relative-container {
    background-image: none;
    background-color: #459bee;
  }
  div.whole-form {
    top: 12%;
    width: 94%;
    height: 85%;
    left: 3%;
    font-size: 24px;
  }
  form {
    height: 75%;
  }
}
@media (max-width: 425px) {
  div.whole-form {
    font-size: 20px;
  }
}
</style>
