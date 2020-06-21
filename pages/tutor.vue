<template>
  <div class="academic-form">
    <div class="relative-container">
      <div class="whole-form">
        <ValidationObserver ref="form">
          <form action="post">
            <b-steps v-model="step">
              <b-step-item
                icon="id-card"
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
                    key="standard"
                    v-model="form.standard"
                    vid="standard"
                    type="text"
                    label="Standard"
                    rules="required"
                    placeholder="Enter Standard"
                  />
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                icon="chalkboard-teacher"
                label="Academical Information"
              >
                <ValidationObserver ref="academicalInformationSection">
                  <div class="field">
                    <p class="has-text-left is-size-4">
                      For which board(s) you give tuitions?
                    </p>
                    <div v-if="form.board.length===0" class="field">
                      <b-tag
                        type="is-danger"
                      >
                        <b-icon icon-pack="fas" icon="times-circle" />
                        Choose atleast one board
                      </b-tag>
                    </div>
                    <form-checkbox
                      rules="required"
                      label="Board"
                    >
                      <template v-for="(item,i) in boardArray">
                        <b-checkbox
                          :key="`${i}-${item}`"
                          v-model="form.board"
                          :native-value="item"
                          size="is-medium"
                        >
                          {{ item }}
                        </b-checkbox>
                        <br :key="`${i}-${item.id}`">
                      </template>
                    </form-checkbox>
                  </div>

                  <div class="field">
                    <p class="has-text-left is-size-4">
                      In what medium(s) do you prefer to take tuitions
                    </p>
                    <div v-if="form.medium.length===0" class="field">
                      <b-tag
                        type="is-danger"
                      >
                        <b-icon icon-pack="fas" icon="times-circle" />
                        Choose atleast one Medium
                      </b-tag>
                    </div>
                    <form-checkbox
                      rules="required"
                      label="Medium"
                    >
                      <template v-for="(item,i) in mediumArray">
                        <b-checkbox
                          :key="`${i}-${item}`"
                          v-model="form.medium"
                          :native-value="item"
                          size="is-medium"
                        >
                          {{ item }}
                        </b-checkbox>
                        <br :key="`${i}-${item.id}`">
                      </template>
                    </form-checkbox>
                  </div>

                  <div class="field">
                    <p class="has-text-left is-size-4">
                      What type of tuitions are you willing to take?
                    </p>
                    <div v-if="form.type_tuition.length===0" class="field">
                      <b-tag
                        type="is-danger"
                      >
                        <b-icon icon-pack="fas" icon="times-circle" />
                        Choose atleast one type
                      </b-tag>
                    </div>
                    <form-checkbox
                      rules="required"
                    >
                      <template v-for="(item,i) in typeTuitionArray">
                        <b-checkbox
                          :key="`${i}-${item}`"
                          v-model="form.type_tuition"
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
                icon="calendar-alt"
                label="Preference"
              >
                <ValidationObserver ref="preferenceSection">
                  <form-input
                    key="subjects"
                    v-model="form.subjects"
                    vid="subjects"
                    type="text"
                    label="For which subject(s) do you want to take tuitions"
                    rules="required"
                    placeholder="Enter name of subject(s)"
                  />

                  <form-input
                    key="timings"
                    v-model="form.timings"
                    vid="timings"
                    type="text"
                    label="On what times will you be able to take classes?"
                    rules="required"
                    placeholder="eg.9am to 12pm"
                  />

                  <form-input
                    key="location"
                    v-model="form.location"
                    vid="location"
                    type="text"
                    label="Location where you are comfortable for providing tuition or how far are you willing to travel?"
                    rules="required"
                    placeholder="eg.Heerapura"
                  />

                  <div class="field">
                    <p class="has-text-left is-size-4">
                      Which of the days would you prefer to take the classes?
                    </p>
                    <div v-if="form.days.length===0" class="field">
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
                icon="id-card"
                label="Academic Experience"
              >
                <ValidationObserver ref="experienceSection">
                  <form-input
                    key="qualification"
                    v-model="form.qualification"
                    vid="qualification"
                    type="text"
                    label="Your highest qualification (if pursuing then please mention semester/year)?"
                    rules="required"
                    placeholder="Highest Qualification"
                  />

                  <form-input
                    key="experience"
                    v-model="form.experience"
                    vid="experience"
                    type="text"
                    label="Teaching Experience (in years)"
                    rules="required"
                    placeholder="Teaching Experience"
                  />

                  <form-input
                    key="fees"
                    v-model="form.fees"
                    vid="fees"
                    type="text"
                    label="How much do you charge for tuition each month?"
                    rules="required"
                    placeholder="Expected Fees"
                  />

                  <form-input
                    key="comment"
                    v-model="form.comment"
                    vid="comment"
                    type="textarea"
                    label="Would you like to share anything else with us?"
                    placeholder="Comment here"
                  />
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                icon="thumbs-up"
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
                    v-if="step!==4"
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
                    v-if="step<3"
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
import FormInput from '../components/FormInput.vue'
import FormCheckbox from '../components/FormCheckbox.vue'

export default {
  components: {
    ValidationObserver,
    FormInput,
    FormCheckbox
  },
  data () {
    return {
      step: 0,
      boardArray: [
        'CBSE',
        'ICSE',
        'RBSE',
        'International Board'
      ],
      mediumArray: [
        'English',
        'Hindi'
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
      typeTuitionArray: [
        '1-on-1',
        'Batch of 5',
        'Regular batch'
      ],
      form: {
        category: 'Academics',
        name: '',
        contact: '',
        email: '',
        standard: '',
        board: [],
        medium: [],
        type_tuition: [],
        subjects: '',
        timings: '',
        location: '',
        days: [],
        qualification: '',
        experience: '',
        fees: '',
        comment: ''
      },
      daysRaw: ''
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
  methods: {
    onNext () {
      if (this.step === 0) {
        this.$refs.informationSection.validate().then((success) => {
          if (success) {
            this.step++
          }
        })
      } else if (this.step === 1) {
        this.$refs.academicalInformationSection.validate().then((success) => {
          if (success && this.form.days !== []) {
            this.step++
          }
        })
      } else if (this.step === 2) {
        this.$refs.preferenceSection.validate().then((success) => {
          if (success) {
            this.step++
          }
        })
      }
    },
    onSubmit () {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.addQuery()
        }
      })
    },
    addQuery () {
      this.$axios.$post('/tutor/', {
        category: this.form.category,
        name: this.form.name,
        contact: this.form.contact,
        email: this.form.email,
        standard: this.form.standard,
        board: this.form.board,
        medium: this.form.medium,
        type_tuition: this.form.type_tuition,
        subject: this.form.subjects,
        timings: this.form.timings,
        location: this.form.location,
        days: this.form.days,
        qualification: this.form.qualification,
        experience: this.form.experience,
        fees: this.form.fees,
        comment: this.form.comment
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
