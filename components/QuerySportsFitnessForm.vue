<template>
  <div id="dashboard-form">
    <website-nav-bar-normal></website-nav-bar-normal>
    <div class="relative-container">
      <div class="whole-form">
        <div class="progress-header">
          <progress class="progress is-primary show-value" :value="progressValue" max="100"><span>{{ progressValue }}%</span></progress>
        </div>
        <form action="post">
          <div class="modal-form" 
          v-if="step === 1" 
          v-show="form.standard === 'dietician' || form.standard === 'martial-arts' || form.standard === 'trainer' || form.standard === 'yoga'">
            <FormCheckbox
            :labelText="subjectQuestionFinal"
            v-model="form.subjects"
            :instance="form.subjects"
            v-validate="'required'"
            name="subjects"
            :error="errors.first('subjects')"
            :optionList="subjectListFinal"
            @add-to-instance="addToInstance"></FormCheckbox>
          </div>
          <div class="modal-form" v-if="step === 2">
            <FormDropdown 
            v-show="form.standard !== 'dietician' || form.standard !== 'trainer' || form.standard !== 'yoga' || form.standard !== 'zumba'"
            labelText="Your current Knowledge/Skill level."
            v-model="form.level"
            :options="levelArray"
            :instance="form.level"
            ref="level"
            key="level"></FormDropdown>

            <FormDropdown 
            v-show="form.standard === 'dietician' || form.standard === 'trainer' || form.standard === 'yoga'"
            labelText="Do you have a gender preference of the tutor?"
            v-model="form.gender_preference"
            :options="genderPreferenceArray"
            :instance="form.gender_preference"
            ref="genderPreference"
            key="genderPreference"></FormDropdown>

            <FormDropdown 
            v-show="form.standard !== 'dietician'"
            labelText="How many students will be getting coached?"
            v-model="form.number_of_student"
            :options="numberOfStudentArray"
            :instance="form.number_of_student"
            ref="numberOfStudent"
            key="numberOfStudent"></FormDropdown>

            <FormRadio
            labelText="Which of the days would you prefer to take the classes?"
            v-model="daysRaw"
            :instance="daysRaw"
            fieldId="daysRaw"
            v-validate="'required'"
            name="daysRaw"
            :error="errors.first('daysRaw')"
            :optionList="daysArray"
            @add-to-instance="addToDaysInstance"
            key="daysRaw"></FormRadio>
            
            <FormCheckbox
            v-if="daysRaw==='custom'"
            v-model="form.days"
            :instance="form.days"
            v-validate="'required'"
            name="days"
            :error="errors.first('days')"
            :optionList="customDaysArray"
            @add-to-instance="addToCustomDaysInstance"
            key="days"></FormCheckbox>
          </div>

          <div class="modal-form" v-if="step === 3">
            <FormDropdown 
            v-if="form.standard !== 'dietician'"
            labelText="How would you prefer to learn?"
            v-model="form.type_coaching"
            :options="typeCoachingArray"
            :instance="form.type_coaching"
            @input="emptyCoachingLocation()"
            ref="typeCoaching"></FormDropdown>

            <FormDropdown 
            v-if="(form.standard === 'chess' || form.standard === 'skating' || form.standard === 'zumba' || form.standard === 'dietician' || form.standard === 'trainer' || form.standard === 'yoga') && type_coaching !== 'batch'"
            labelText="Where would you prefer taking the classes?"
            v-model="form.coaching_location"
            :options="coachingLocationArray"
            :instance="form.coaching_location"
            @input="emptyTravel()"
            ref="coachingLocation"></FormDropdown>

            <FormDropdown 
            v-if="form.coaching_location !== 'at home'"
            labelText="How far is it comfortable for you to travel?"
            v-model="form.travel"
            :options="travelArray"
            :instance="form.travel"
            ref="travel"></FormDropdown>

          </div>
          <div class="modal-form" v-if="step === 4">
            <p class="has-text-left">Your Contact Information</p>
            
            <FormInput
            type="text"
            labelText="Name"
            v-model="form.name"
            :instance="form.name"
            fieldId="name"
            v-validate="'required'"
            name="name"
            :error="errors.first('name')"
            placeholder="Name"
            key="name"></FormInput>

            <FormInput
            type="tel"
            labelText="Contact(Mobile) Number"
            v-model="form.contact"
            :instance="form.contact"
            fieldId="contact"
            v-validate="{required: true, regex: /^[5-9]\d{9}$/}"
            name="contact"
            :error="errors.first('contact')"
            placeholder="Please enter 10 digit mobile number"
            key="contact"></FormInput>

            <FormInput
            type="email"
            labelText="E-mail"
            v-model="form.email"
            :instance="form.email"
            fieldId="email"
            v-validate="'required|email'"
            name="email"
            :error="errors.first('email')"
            placeholder="E-mail"
            key="email"></FormInput>

            <FormInput
            type="number"
            labelText="Age of the student"
            v-model="form.age"
            :instance="form.age"
            fieldId="age"
            v-validate="'required|min_value:5'"
            name="age"
            :error="errors.first('age')"
            placeholder="Age of student"
            key="age"></FormInput>
            
          </div>
          <div class="modal-form" v-if="step === 5">

            <FormDropdown 
            v-if="form.standard !== 'dietician'"
            labelText="What is the gender of the student??"
            v-model="form.gender"
            :options="genderArray"
            :instance="form.gender"
            ref="gender"></FormDropdown>

            <FormInput
            type="text"
            labelText="Your locality"
            v-model="form.location"
            :instance="form.location"
            fieldId="location"
            v-validate="'required'"
            name="location"
            :error="errors.first('location')"
            placeholder="eg.Heerapura"
            key="location"></FormInput>

            <FormInput
            type="textarea"
            labelText="Your full address"
            v-model="form.address"
            :instance="form.address"
            fieldId="address"
            v-validate="'required|min:10'"
            name="address"
            :error="errors.first('address')"
            placeholder="Enter your postal address"
            key="address"></FormInput>

            <FormInput
            type="text"
            labelText="Landmark"
            v-model="form.landmark"
            :instance="form.landmark"
            fieldId="landmark"
            v-validate="'required'"
            name="landmark"
            :error="errors.first('landmark')"
            placeholder="Enter your Landmark"
            key="landmark"></FormInput>

            <FormInput
            type="textarea"
            labelText="Anything else you would like to share with us?"
            v-model="form.comment"
            :instance="form.comment"
            fieldId="comment"
            placeholder="Comment here"
            key="comment"></FormInput>

          </div>
          <div class="modal-form" v-if="step === 6">
            <h1>That's all, thank you!</h1>
            <span style="font-size: 60px; color: #3273dc;"><i class="fas fa-check-circle"></i></span>
            <p>Our team will try to contact you as soon as possible!</p>
            <p>Got a minute? Show us some love!</p>
            <p>Follow us on <a href="https://twitter.com/edhusk_com">Twitter</a> and like us on <a href="https://www.facebook.com/edhuskindia/">Facebook</a>.</p>
          </div>
        </form>
        
        <div class="field is-grouped">
          <template v-if="form.standard === 'dietician' || form.standard === 'martial-arts' || form.standard === 'trainer' || form.standard === 'yoga'">
            <button class="button is-link" 
            @click="prev" v-show="step===2 || step===3 || step===4 || step===5">
              Previous
            </button>
          </template>
          <template v-else>
            <button class="button is-link" 
            @click="prev" v-show="step===3 || step===4 || step===5">
              Previous
            </button>
          </template>
          
          <button class="button is-link" 
          @click="next" v-show="step===1 || step===2 || step===3 || step===4">
            Next
          </button>
          <button class="button is-link" 
          @click="validateBeforeSubmit" v-show="step===5">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import FormInput from './FormInput'
import FormDropdown from './FormDropdown'
import FormCheckbox from './FormCheckbox'
import WebsiteNavBarNormal from './WebsiteNavBarNormal'
import FormRadio from './FormRadio'

export default {
  components: {
    FormDropdown,
    FormInput,
    FormCheckbox,
    FormRadio,
    WebsiteNavBarNormal
  },
  name: 'QuerySportsFitnessForm',
  props: {
  },
  data () {
    return {
      modalStatus: false,
      step: 1,
      progressValue: 0,
      form: {
        fees: 1000,
        category: 'Sports and Fitness',
        standard: '',
        subjects: [],
        level: '',
        type_coaching: '',
        travel: '',
        number_of_student: '',
        coaching_location: '',
        days: [],
        gender_preference: '',
        location: '',
        address: '',
        landmark: '',
        name: '',
        age: '',
        contact: '',
        email: '',
        gender: '',
        comment: ''
      },
      daysRaw: '',
      typeCoachingArray: [
        { value: "batch", text: "In a Batch"},
        { value: "1-on-1", text: "1-on-1 Sessions"},
        { value: "flexible", text: "Flexible to get best tutor"}
      ],
      travelArray: [
        { value: "0-1", text: "0-1 Km"},
        { value: "0-3", text: "0-3 Km"},
        { value: "0-5", text: "0-5 Km"},
        { value: "more than 5", text: "More than 5 Km"}
      ],
      coachingLocationArray: [
        { value: "at home", text: "At Home"},
        { value: "at tutor", text: "At Tutor's Location"},
        { value: "flexible", text: "Flexible to get best tutor"},
      ],
      genderPreferenceArray: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
        { value: "none", text: "No preference" }
      ],
      daysArray: [
        { value: "5", text: "5 days a week (Weekdays)" },
        { value: "6", text: "6 days a week (Weekdays + Saturday)" },
        { value: "7", text: "7 days a week (Everyday)" },
        { value: "3-1", text: "3 days a week I (Monday,Wednesday,Friday)" },
        { value: "3-2", text: "3 days a week II (Tuesday,Thursday,Saturday)" },
        { value: "2", text: "Weekends (Sunday and Saturday)"},
        { value: "custom", text: "Custom" }
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
        { value: "beginner", text: "Beginner" },
        { value: "intermediate", text: "Intermediate" },
        { value: "advanced", text: "Advanced" }
      ],
      genderArray: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" }
      ],
      numberOfStudentArray: [
        { value: "One", text: "One" },
        { value: "Two", text: "Two" },
        { value: "Three", text: "Three" },
        { value: "More than Three", text: "More than Three" },
      ],
      dieticianSubjects: [
        "Weight Loss",
        "Weight Gain",
        "Health Condition",
        "Sports Conditioning Diets"
      ],
      martialArtsSubjects: [
        "Karate",
        "Taekwondo",
        "Wing Chun",
      ],
      trainerSubjects: [
        "General Fitness",
        "Intermediate Bodybuilding",
        "Hardcore Bodybuilding"
      ],
      yogaSubjects: [
        "Power Yoga",
        "Therapeutic Yoga",
        "Yoga for Senior Citizen",
        "Pregnancy Yoga",
        "Yoga for Everyone"
      ]
    }
  },
  mounted () {
    this.form.standard = this.$route.params.standard
    if (['dietician', 'trainer', 'yoga', 'martial-arts'].indexOf(this.form.standard) !== -1) {
      this.step = 1
    }
    else {
      this.step = 2
    }
  },
  methods: {
    modalToggle() {
      this.modalStatus = !this.modalStatus
    },
    /*addToInstance method is corrosponding to checkbox component*/
    addToInstance(e) {
      if (this.form.subjects.indexOf(e) ===-1) {
        this.form.subjects.push(e)
      }
      else {
        this.form.subjects.splice(this.form.subjects.indexOf(e), 1)
      }
    },
    addToDaysInstance(e) {
      this.daysRaw = e
      if (this.daysRaw === 'custom') {
        this.form.days = []
      }
    },
    addToCustomDaysInstance(e) {
      if (this.form.days.indexOf(e) ===-1) {
        this.form.days.push(e)
      }
      else {
        this.form.days.splice(this.form.days.indexOf(e), 1)
      }
    },
    prev() {
      this.progressValue -= 20
      this.step--;
    },
    next() {
      if (this.step === 1) {
        this.$validator.validate('subjects', this.form.subjects)
        if (this.form.subjects.length!==0) {
          this.step++
          this.progressValue += 20
        }
      }
      else if (this.step === 2) {
        this.$refs.level.dropdownToggle()
        this.$refs.genderPreference.dropdownToggle()
        this.$validator.validate('daysRaw', this.daysRaw)
        if (this.daysRaw === 'custom') {
          this.$validator.validate('days', this.form.days)
        }
        if (['dietician', 'trainer', 'yoga', 'zumba'].indexOf(this.form.standard) === -1) {
          if (this.form.level !== '' && this.daysRaw !== '' && this.form.days !== []) {
            this.step++
            this.progressValue += 20
          }
        }
        else if (['dietician', 'trainer', 'yoga'].indexOf(this.form.standard) !== -1) {
          if(this.form.gender_preference !== '' && this.daysRaw !== '' && this.form.days !== []) {
            this.step++
            this.progressValue +=20
          }
        }
        else if (this.form.standard === 'zumba') {
          if (this.daysRaw !== '' && this.form.days !== []) {
            this.step++
            this.progressValue += 20
          }
        }
      }
      else if (this.step === 3) {
        if (this.form.standard !== 'dietician') {
          this.$refs.typeCoaching.dropdownToggle()
        }
        if (['chess', 'skating', 'trainer', 'yoga', 'zumba'].indexOf(this.form.standard) !== -1 && this.form.type_coaching!=='batch') {
          this.$refs.coachingLocation.dropdownToggle()
          if (this.form.coaching_location !== 'at home') {
            this.$refs.travel.dropdownToggle()
          }
        }
        else {
          this.$refs.travel.dropdownToggle()
        }
        if (this.form.standard !== 'dietician') {
          if (this.form.type_coaching !== '') {
            if (['chess', 'skating', 'trainer', 'yoga', 'zumba'].indexOf(this.form.standard) !== -1) {
              if (this.form.type_coaching !== 'batch' && this.form.coaching_location !=='') {
                if (this.form.coaching_location !== 'at home' && this.form.travel !== '') {
                  this.step++
                  this.progressValue += 20
                }
                else if (this.form.coaching_location === 'at home' && this.form.travel === '') {
                  this.step++
                  this.progressValue += 20
                }
              }
              else if (this.form.type_coaching === 'batch' && this.form.travel !== '') {
                this.step++
                this.progressValue += 20
              }
            }
            else if (['chess', 'skating', 'trainer', 'yoga', 'zumba'].indexOf(this.form.standard) === -1) {
              if (this.form.travel !== '') {
                this.step++
                this.progressValue += 20
              }
            }
          }
        }
        else if (this.form.standard === 'dietician') {
          if (this.form.coaching_location !== 'at home' && this.form.travel !== '') {
            this.step++
            this.progressValue += 20
          }
          else if (this.form.coaching_location === 'at home' && this.form.travel === '') {
            this.step++
            this.progressValue += 20
          }
        }
      }
      else if (this.step === 4) {
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
    validateBeforeSubmit() {
      this.$refs.gender.dropdownToggle()
      this.$validator.validate('location', this.form.location)
      this.$validator.validate('address', this.form.address)
      this.$validator.validate('landmark', this.form.landmark)
      if (this.form.standard === 'dietician') {
        if (this.errors.items.length === 0) {
          this.addQuery()
          this.modalToggle()
        }
      }
      else if (this.form.standard !== 'dietician') {
        if (this.errors.items.length === 0 && this.form.gender !== '') {
          this.addQuery()
          this.modalToggle()
        }
      }
    },
    emptyCoachingLocation() {
      this.form.coaching_location = ''
    },
    emptyTravel() {
      this.form.travel = ''
    },
    addQuery() {
      axios({
        method: 'post',
        url: 'http://edhusk.com/api/v1/sport-query/',
        data: {
          fees: this.form.fees,
          category: this.form.category,
          standard: this.form.standard,
          subjects: this.form.subjects,
          level: this.form.level,
          type_coaching: this.form.type_coaching,
          travel: this.form.travel,
          number_of_student: this.form.number_of_student,
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
          student_gender: this.form.gender,
          comment: this.form.comment
        }
      }).then(() => { 

        this.form.subjects = [],
        this.form.level = '',
        this.form.type_coaching = '',
        this.form.travel = '',
        this.form.number_of_student = '',
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
        this.form.gender = '',
        this.form.comment = '',
        this.step++

      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  computed: {
    subjectListFinal: function() {
      if (this.form.standard === 'dietician') {
        return this.dieticianSubjects
      }
      else if (this.form.standard === 'martial-arts') {
        return this.martialArtsSubjects
      }
      else if (this.form.standard === 'trainer') {
        return this.trainerSubjects
      }
      else if (this.form.standard === 'yoga') {
        return this.yogaSubjects
      }
    },
    subjectQuestionFinal: function() {
      if (this.form.standard === 'dietician') {
        return "Which of the following do you need help with?"
      }
      else if (this.form.standard === 'martial-arts') {
        return "Which of the following Martial Art Form(s) do you need help with?"
      }
      else if (this.form.standard === 'trainer') {
        return "Which of the following do you need help with?"
      }
      else if (this.form.standard === 'yoga') {
        return "Which of the following yoga-style(s) do you need help with?"
      }
    }
  },
  watch: {
    daysRaw: function(newValue) {
      if (newValue === "5") {
        this.form.days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
      }
      else if (newValue === "6") {
        this.form.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      }
      else if (newValue === "7") {
        this.form.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
      }
      else if (newValue === "3-1") {
        this.form.days = ['Monday','Wednesday','Friday']
      }
      else if (newValue === "3-2") {
        this.form.days = ['Tuesday','Thursday','Saturday']
      }
      else if (newValue === "2") {
        this.form.days = ['Saturday','Sunday']
      }
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
    top: 13%;
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
