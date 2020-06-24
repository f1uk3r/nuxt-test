<template>
  <div>
    <section class="top-image">
      <img src="../assets/top-image.png" alt="Banner Image" class="banner">
      <img src="../assets/top-image-vector.png" alt="Foreground" class="top-banner-vector">
      <h1 class="has-text-weight-bold">Book your own Tutor</h1>

      <!-- First Dropdown -->
      <div class="field is-grouped">
        <div class="control category">
          <b-select v-model="category" placeholder="Select category">
            <option value>Select Category</option>
            <option
              v-for="(item, index) in optionsCategory"
              :key="index"
              :value="item"
            >
              {{ item }}
            </option>
          </b-select>
        </div>
        <!-- second dropdown -->
        <div class="control standard">
          <b-select v-model="formLink" placeholder="Select category first">
            <option value>Select category First</option>
            <option
              v-for="(item, index) in optionFieldComputed"
              :key="index"
              :value="item"
            >
              {{ item.text }}
            </option>
          </b-select>
        </div>
      </div>

      <b-button id="submit" tag="a" :href="formLink" class="is-success">Submit</b-button>
    </section>

    <!-- Services section starts here -->
    <section class="services">
      <div class="columns">
        <div class="column empty-column" />
        <div class="column is-11">
          <div class="columns">
            <div class="column service-acads">
              <img src="../assets/1-acadmics-icon.png" width="43" height="44"><h2 class="has-text-weight-bold">Academics</h2>
              <ul>
                <li>All Subjects from Pre-Primary to 12<sup>th</sup></li>
                <li>All Boards (CBSE/IB/ICSE/State Board)</li>
                <li>Personalised Home Tutions/ Batch of 5</li>
                <li>Learn from 3-D Models & Videos</li>
              </ul>
            </div>
            <div class="column service-sports">
              <img src="../assets/2-sports-fitness.png" width="43" height="44"><h2 class="has-text-weight-bold">Sports & Fitness</h2>
              <ul>
                <li>Sculpt an Ideal Body with Yoga/Zumba</li>
                <li>Get fit with our Dieticians and Trainers</li>
                <li>Popular Indoor and Outdoor Games</li>
                <li>Get a Coach according to your Needs</li>
              </ul>
            </div>
            <div class="column service-hobbies">
              <img src="../assets/3-hobbies-life-skills.png" width="43" height="44"><h2 class="has-text-weight-bold">Hobbies & Life-Skills</h2>
              <ul>
                <li>Personality Development Courses</li>
                <li>Learn a New Language</li>
                <li>All Indian & Western Instruments</li>
                <li>Courses for all Age Groups</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column empty-column" />
      </div>
    </section>

    <!-- Why EdHusk section starts here -->
    <section class="why-us">
      <p class="is-size-3 has-text-weight-bold has-text-white has-text-centered">Why EdHusk?</p>
      <p class="is-size-5 has-text-white has-text-centered">We provide customized learning at student's home</p>
      <div class="columns first-row">
        <div class="column is-5 is-offset-1 column-why-us">
          <img src="../assets/why-us-1.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold">Best Possible Match</h2>
            <p class="has-text-left">We try to connect you with the most qualified tutors and professionals than anywhere else. We filter our tutors based on your preferences using our advanced matchmaking algorithm. You get to pick your match and the budget.</p>
          </div>
        </div>
        <div class="column is-5 column-why-us">
          <img src="../assets/why-us-2.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold">Customized Learning</h2>
            <p class="has-text-left">We have prepared conceptualized course content and 3D models with a holistic approach to understand realistic applications. Continuous learning and properly fashioned revision with periodic assessment helps in quick and higher retention</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-5 is-offset-1 column-why-us">
          <img src="../assets/why-us-3.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold">Quality</h2>
            <p class="has-text-left">We do a comprehensive screening of tutors for subject knowledge and teaching abilities before we hand pick them. You can choose to get tutored either in person or in a batch, which will help you to reach your goals.</p>
          </div>
        </div>
        <div class="column is-5 column-why-us">
          <img src="../assets/why-us-4.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold">Monitor your Progress</h2>
            <p class="has-text-left">You can track training progress online with our android app(Coming Soon). Check there for the attendance and constant tutor feedback. You will also get a detailed report on completed sessions every month, followed by test(s).</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-5 is-offset-1 column-why-us">
          <img src="../assets/why-us-5.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold">Support and Counselling</h2>
            <p class="has-text-left">We have an able counselling team with the learning environment of highest standard to monitor the progress of your ward. It is highly unlikely that your tutor is not being able to continue, if such a case arises, we will help you find a quick replacement.</p>
          </div>
        </div>
        <div class="column is-5 column-why-us">
          <img src="../assets/why-us-6.png" width="60" height="60">
          <div class="why-us-content">
            <h2 class="is-size-5 has-text-weight-bold long-title">Hassle-free Services & Payment</h2>
            <p class="has-text-left long-title-description">Guaranteed, personalized and adaptive services with utmost convenience, just a few clicks away. We have a 15 days payment scheme & 3D secure SSL payment gateway with money back guarantee in case of any discrepancies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics section starts here -->
    <section class="stats">
      <div class="columns">
        <div class="column is-5 is-offset-1">
          <img src="../assets/stats-1.png">
          <p class="stat-number has-text-weight-bold">1800</p>
          <p class="stat-text">Edhusk Experts</p>
        </div>
        <div class="column is-5">
          <img src="../assets/stats-2.png">
          <p class="stat-number has-text-weight-bold">&nbsp;450</p>
          <p class="stat-text">Satisfied Customer</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5 is-offset-1">
          <img src="../assets/stats-3.png">
          <p class="stat-number has-text-weight-bold">&nbsp;20k</p>
          <p class="stat-text">Hours Of Teaching</p>
        </div>
        <div class="column is-5">
          <img src="../assets/stats-4.png">
          <p class="stat-number has-text-weight-bold">1200</p>
          <p class="stat-text">Quizzes Conducted</p>
        </div>
      </div>
    </section>

    <!-- How it works section starts here -->
    <section class="work">
      <img src="../assets/how-it-works-1.png" alt="How It Works 1" class="image-one">
      <img src="../assets/how-it-works-2.png" alt="How It Works 2" class="image-two">
      <img src="../assets/how-it-works-3.png" alt="How It Works 3" class="image-three">
      <img src="../assets/how-it-works-background.png" alt="How It Works Background" class="image-background">
      <div class="title-block">
        <p>How It Works</p>
      </div>
      <div class="text-block text-block-one">
        <h1>Answer a few personalized questions</h1>
        <p>Tell us a few things about yourself and we'll introduce you to experts who are the most suitable matches for you.</p>
      </div>
      <div class="text-block text-block-two">
        <h1>Book a demo with your perfect match</h1>
        <p>We will contact you within 24 hours to book a demo class with your perfect match. We guarantee that you'll love your first lesson. If not, we'll cover the first session.</p>
      </div>
      <div class="text-block text-block-three">
        <h1>Accept and Subscribe</h1>
        <p>If you are satisfied with the approach and depth of your instructor's knowledge, you can start one of its kind EdHusk experience.</p>
      </div>
      <div class="section-ladders">
        <div class="start-block">
          <div class="start-triangle" />
        </div>
        <div class="numbered-square number-one">
          <div class="hollow-circle circle-one">
            <p>1</p>
          </div>
        </div>
        <div class="sector sector-one">
          <div class="sector-cut-out sector-cut-out-one" />
        </div>
        <div class="white-square square-one" />
        <div class="white-square square-two" />
        <div class="white-square square-three" />
        <div class="white-square square-four" />
        <div class="white-square square-five" />
        <div class="sector sector-two">
          <div class="sector-cut-out sector-cut-out-two" />
        </div>
        <div class="numbered-square number-two">
          <div class="hollow-circle circle-two">
            <p>2</p>
          </div>
        </div>
        <div class="sector sector-three">
          <div class="sector-cut-out sector-cut-out-three" />
        </div>
        <div class="white-square square-six" />
        <div class="white-square square-seven" />
        <div class="white-square square-eight" />
        <div class="sector sector-four">
          <div class="sector-cut-out sector-cut-out-four" />
        </div>
        <div class="numbered-square number-three">
          <div class="hollow-circle circle-three">
            <p>3</p>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio">
      <p class="is-size-3 has-text-weight-bold has-text-grey has-text-centered">Our Popular Services</p>
      <div class="container has-text-centered">
        <a class="button is-outlined all is-link" @click="portfolioCategory='all'">All</a>
        <a class="button is-outlined academics is-link" @click="portfolioCategory='academics'">Academics</a>
        <a class="button is-outlined sports-fitness is-link" @click="portfolioCategory='sports'">Sports & Fitness</a>
        <a class="button is-outlined hobbies-lifeskill is-link" @click="portfolioCategory='hobbies'">Hobbies & Life Skills</a>
      </div>

      <div class="portfolio-category" v-if="portfolioCategory==='all'">
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-1.png" alt="Art & Craft" class="portfolio-1"/>
                <a href="/hobbies/art-craft" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-2.png" alt="Guitar" class="portfolio-2"/>
                <a href="/hobbies/guitar" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-3.png" alt="Spoken English" class="portfolio-3"/>
                <a href="/life-skills/speaking-english" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-4.png" alt="Class 6" class="portfolio-4"/>
                <a href="/academics/6" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-5.png" alt="Western Dance" class="portfolio-5"/>
                <a href="/hobbies/western-dance" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-6.png" alt="Fitness Trainer" class="portfolio-6"/>
                <a href="/fitness/fitness-trainer" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-7.png" alt="Class 10" class="portfolio-7"/>
                <a href="/academics/10" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-8.png" alt="Yoga" class="portfolio-8"/>
                <a href="/fitness/yoga" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-9.png" alt="Swimming" class="portfolio-9"/>
                <a href="/sports/swimming" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-10.png" alt="Pre-Primary" class="portfolio-10"/>
                <a href="/academics/pre-primary" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-11.png" alt="Martial Arts" class="portfolio-11"/>
                <a href="/sports/martial-arts" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-12.png" alt="Class 11 - Science" class="portfolio-12"/>
                <a href="/academics/11-sci" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
      </div>

      <div class="portfolio-category" v-if="portfolioCategory==='academics'">
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-4.png" alt="Class 6" class="portfolio-4"/>
                <a href="/academics/6" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-10.png" alt="Pre-Primary" class="portfolio-10"/>
                <a href="/academics/pre-primary" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-7.png" alt="Class 10" class="portfolio-7"/>
                <a href="/academics/10" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-12.png" alt="Class 11 - Science" class="portfolio-12"/>
                <a href="/academics/11-sci" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
      </div>

      <div class="portfolio-category" v-if="portfolioCategory==='sports'">
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-6.png" alt="Fitness Trainer" class="portfolio-6"/>
                <a href="/fitness/fitness-trainer" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-8.png" alt="Yoga" class="portfolio-8"/>
                <a href="/fitness/yoga" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-9.png" alt="Swimming" class="portfolio-9"/>
                <a href="/sports/swimming" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-11.png" alt="Martial Arts" class="portfolio-11"/>
                <a href="/sports/martial-arts" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
      </div>

      <div class="portfolio-category" v-if="portfolioCategory==='hobbies'">
        <div class="columns">
          <div class="column empty-column"></div>
          <div class="column is-10">
            <div class="columns">
              <div class="column">
                <img src="../assets/portfolio-1.png" alt="Art & Craft" class="portfolio-1"/>
                <a href="/hobbies/art-craft" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-2.png" alt="Guitar" class="portfolio-2"/>
                <a href="/hobbies/guitar" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-3.png" alt="Spoken English" class="portfolio-3"/>
                <a href="/life-skills/speaking-english" class="button is-primary">Book Demo</a>
              </div>
              <div class="column">
                <img src="../assets/portfolio-5.png" alt="Western Dance" class="portfolio-5"/>
                <a href="/hobbies/western-dance" class="button is-primary">Book Demo</a>
              </div>
            </div>
          </div>
          <div class="column empty-column"></div>
        </div>
      </div>
    </section>

    <section class="call-back">
      <p class="is-size-3 has-text-weight-bold has-text-grey container has-text-centered">Request a Call Back</p>
      <p class="is-size-5 has-text-grey container has-text-centered">Get <button class="button is-outlined is-primary" @click="callback = !callback">free counselling</button> by our IIT Kharagpur Team</p>
      <div class="card container" v-if="callback">
        <header class="card-header">
          <p class="card-header-title ">Request a Callback</p>
        </header>
        <div class="container card-content" v-if="callback">
          <div class="content">
            <ValidationObserver ref="callbackForm">
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
            </ValidationObserver>
          </div>
        </div>
        <footer class="card-footer">
          <a @click.prevent="validateBeforeSubmit" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Cancel</a>
        </footer>
      </div>
    </section>

    <footer class="footer">
      <div class="columns">
        <div class="column empty-column"></div>
        <div class="column is-11">
          <div class="columns">
            <div class="column footer-information">
              <div>
                <span class="icon is-medium"><a style="color: white;" href="https://www.facebook.com/edhuskindia/"><i class="fab fa-facebook fa-2x"></i></a></span>
                <span class="icon is-medium"><a style="color: white;" href="https://twitter.com/edhusk_com"><i class="fab fa-twitter fa-2x"></i></a></span>
                <span class="icon is-medium"><a style="color: white;" href="https://www.instagram.com/edhusk.india/"><i class="fab fa-instagram fa-2x"></i></a></span>
              </div>

              <div class="address">
                <p class="address-title has-text-weight-bold">Contact Us</p>
                <p>Edhusk Pvt. Ltd.</p>
                <p>A-469, Vaishali Nagar</p>
                <p>Jaipur, 302021</p>
              </div>

              <div class="contact-details">
                <p>0141-4916128</p>
                <p>+91-7585965858</p>
                <p>+91-8764227181</p>
              </div>
              <a href="/tutor/" class="button is-primary">Become a Tutor</a>
            </div>
            <div class="column footer-links">
              <a href="/academics/1" class="footer-link">Home tutor for Class 1</a><br/>
              <a href="/academics/5" class="footer-link">Home tutor for Class 5</a><br/>
              <a href="/academics/6" class="footer-link">Home tutor for Class 6</a><br/>
              <a href="/academics/8" class="footer-link">Home tutor for Class 8</a><br/>
              <a href="/academics/9" class="footer-link">Home tutor for Class 9</a><br/>
              <a href="/academics/10" class="footer-link">Home tutor for Class 10</a><br/>
              <a href="/academics/11-sci" class="footer-link">Home tutor for Class 11 - Science</a><br/>
              <a href="/academics/11-com" class="footer-link">Home tutor for Class 11 - Commerce</a><br/>
              <a href="/sports/chess" class="footer-link">Book Coach for Chess</a><br/>
              <a href="/sports/cricket" class="footer-link">Book Coach for Cricket</a>
            </div>
            <div class="column footer-links">
              <a href="/sports/martial-arts" class="footer-link">Book Coach for Martial Arts</a><br/>
              <a href="/fitness/dietician" class="footer-link">Book a Dietician</a><br/>
              <a href="/fitness/yoga" class="footer-link">Book an Instructor for Yoga</a><br/>
              <a href="/fitness/zumba" class="footer-link">Book an Instructor for Zumba</a><br/>
              <a href="/hobbies/art-craft" class="footer-link">Home tutor for Art & Craft</a><br/>
              <a href="/life-skills/computer-basics" class="footer-link">Home tutor for Computer Basics</a><br/>
              <a href="/hobbies/western-dance" class="footer-link">Book Instructor for Western Dance</a><br/>
              <a href="/hobbies/guitar" class="footer-link">Book Instructor for Guitar</a><br/>
              <a href="/life-skills/speaking-english" class="footer-link">Home tutor for Spoken English</a><br/>
              <a href="/hobbies/western-instrument" class="footer-link">Book Instructor for Western Instrument</a>
            </div>
          </div>
          <p><span class="has-text-weight-bold">Home Tuition across Jaipur: </span>Ajmer Road / Ambabari / Bani Park / Bapu Nagar / Barkat Nagar / Chitrakoot / C-Scheme / Civil Lines / Durgapura / Gandhinagar / Gopalpura By Pass / Jagatpura / Jhotwara / Khatipura / Lal Kothi / Mahesh Nagar / Malviya Nagar / Mansarovar / New Sanganer Road / Nirman Nagar / Pratap Nagar / Raja Park / SFS Mansarovar / Shastri Nagar / Shyam Nagar / Sindhi Camp / Sodala / Tonk Phatak / Vaishali Nagar / Vidhyadhar Nagar</p>
        </div>
        <div class="column empty-column"></div>
      </div>
      <hr class="is-white">
      <div class="container copyright has-text-centered"><p>© 2017 Edhusk Pvt. Ltd. All Rights Reserved</p></div>
    </footer>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import FormInput from '../components/FormInput.vue'

export default {
  name: 'HomePage',
  // layout: 'landing',
  components: {
    ValidationObserver,
    FormInput
  },
  data () {
    return {
      category: '',
      formLink: '',
      callback: false,
      portfolioCategory: 'all',
      form: {
        name: '',
        number: null
      },
      optionsCategory: [
        'Academics',
        'Sports and Fitness',
        'Hobbies and Life-Skills'
      ],
      academicsArray: [
        { link: '/academics/pre-primary', text: 'Pre Primary' },
        { link: '/academics/1', text: 'Class 1' },
        { link: '/academics/2', text: 'Class 2' },
        { link: '/academics/3', text: 'Class 3' },
        { link: '/academics/4', text: 'Class 4' },
        { link: '/academics/5', text: 'Class 5' },
        { link: '/academics/6', text: 'Class 6' },
        { link: '/academics/7', text: 'Class 7' },
        { link: '/academics/8', text: 'Class 8' },
        { link: '/academics/9', text: 'Class 9' },
        { link: '/academics/10', text: 'Class 10' },
        { link: '/academics/11-art', text: 'Class 11 - Arts' },
        { link: '/academics/11-sci', text: 'Class 11 - Commerce' },
        { link: '/academics/11-com', text: 'Class 11 - Science' },
        { link: '/academics/12-art', text: 'Class 12 - Arts' },
        { link: '/academics/12-com', text: 'Class 12 - Commerce' },
        { link: '/academics/12-sci', text: 'Class 12 - Science' }
      ],
      hobbiesArray: [
        { link: '/hobbies/art-craft', text: 'Art & Craft' },
        { link: '/hobbies/classical-dance', text: 'Classical Dance' },
        { link: '/life-skills/computer-basics', text: 'Computer Basics' },
        { link: '/hobbies/cooking', text: 'Cooking' },
        { link: '/hobbies/western-dance', text: 'Western Dance' },
        { link: '/hobbies/guitar', text: 'Guitar' },
        { link: '/life-skills/learn-lang', text: 'Learn a Language' },
        { link: '/hobbies/indian-instrument', text: 'Indian Instrument' },
        { link: '/life-skills/speaking-english', text: 'Spoken English' },
        { link: '/hobbies/vocal', text: 'Vocals' },
        { link: '/hobbies/western-instrument', text: 'Western Instrument' }
      ],
      sportsArray: [
        { link: '/sports/badminton', text: 'Badminton' },
        { link: '/sports/basketball', text: 'Basketball' },
        { link: '/sports/chess', text: 'Chess' },
        { link: '/sports/cricket', text: 'Cricket' },
        { link: '/fitness/dietician', text: 'Dietician' },
        { link: '/sports/football', text: 'Football' },
        { link: '/sports/martial-arts', text: 'Martial Arts' },
        { link: '/sports/running', text: 'Running' },
        { link: '/sports/skating', text: 'Skating' },
        { link: '/sports/swimming', text: 'Swimming' },
        { link: '/fitness/fitness-trainer', text: 'Fitness Trainer' },
        { link: '/sports/volleyball', text: 'Volleyball' },
        { link: '/fitness/yoga', text: 'Yoga' },
        { link: '/fitness/zumba', text: 'Zumba' }
      ]
    }
  },
  computed: {
    optionFieldComputed () {
      if (this.category === 'Academics') {
        return this.academicsArray
      } else if (this.category === 'Sports and Fitness') {
        return this.sportsArray
      } else if (this.category === 'Hobbies and Life-Skills') {
        return this.hobbiesArray
      }
      return null
    },
    workSectionToggleComputed () {
      if (this.portfolioCategory === 'all') {
        return false
      }
      return this.workSectionHeightObject
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$refs.callbackForm.validate().then((success) => {
        if (success) {
          this.addCallbackQuery()
        }
      })
      console.log('ho raha hai')
    },
    addCallbackQuery () {
      this.$axios.$post('/request-callback/', {
        name: this.form.name,
        contact: this.form.contact
      })
        .then(
          console.log('ho gaya')
        )
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scope>
section.top-image {
  padding-top: 50px;
  position: relative;
}
section.top-image>img.banner {
  width: 100%;
}
section.top-image>img.top-banner-vector {
  position: absolute;
  height: 65%;
  left: 54%;
  z-index: 200;
  top: 13%
}
section.top-image>h1 {
  position: absolute;
  top: 25%;
  left: 2%;
  color: white;
  font-size: 5vw;
}
section.top-image>div.field.is-grouped {
  position: absolute;
  top: 39%;
  left: 2%;
}
section.top-image>a#submit {
  position: absolute;
  top: 48%;
  left: 2%
}
@media (max-width: 900px) {
  section.top-image>img.top-banner-vector {
    height: 63%;
    left: 58%;
  }
}
@media (max-width: 767px) {
  section.top-image>img.top-banner-vector {
    display: none;
  }
  section.top-image>h1 {
    top: 20%;
    font-size: 7vw;
  }
  section.top-image>a#submit {
    top: 50%;
  }
}
@media (max-width: 600px) {
  section.top-image>a#submit {
    top: 53%;
  }
}
/******************* Services section starts here ***********************/
section.services {
  position: relative;
  padding-top: 50px;
  padding-bottom: 30px;
}
div.service-acads, div.service-sports, div.service-hobbies {
  position: relative;
  height: 225px;
}
div.service-acads>img, div.service-sports>img, div.service-hobbies>img {
  position: absolute;
  left: 5%;
}
div.service-acads>h2, div.service-sports>h2, div.service-hobbies>h2 {
  position: absolute;
  left: 25%;
  font-size: 2.25vw;
}
div.service-acads>ul, div.service-sports>ul, div.service-hobbies>ul {
  position: absolute;
  top: 30%;
  left: 5%;
  font-size: 1.69vw;
}
@media (max-width: 767px) {
  section.services {
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
  }
  div.service-acads, div.service-sports, div.service-hobbies {
    height: 225px;
  }
  div.service-acads>img {
    left: 39%;
  }
  div.service-acads>h2 {
    left: 49%;
    font-size: 3.5vw;
  }
  div.service-sports>img {
    left: 35%;
  }
  div.service-sports>h2 {
    left: 45%;
    font-size: 3.5vw;
  }
  div.service-hobbies>img {
    left: 30%;
  }
  div.service-hobbies>h2 {
    left: 40%;
    font-size: 3.5vw;
  }
  div.service-acads>ul, div.service-sports>ul, div.service-hobbies>ul {
    left: 28%;
    font-size: 3vw;
  }
}

/************************Why EdHusk section starts here************************/
section.why-us {
  position: relative;
  background-color: #459bee;
  padding-top: 4rem;
  padding-bottom: 6rem;
}
section.why-us>div.columns.first-row {
  padding-top: 10px;
  padding-bottom: 10px;
}
section.why-us>div>div.column-why-us {
  position: relative;
  padding-left: 70px;
}
section.why-us>div>div.column-why-us>img {
  position: absolute;
  top: 15%;
  left: 0%;
}
@media (max-width: 767px) {
  section.why-us>div>div.column-why-us {
    padding: 10px 50px 10px 150px;
  }
  section.why-us>div>div.column-why-us>img {
    left: 8%;
  }
}
/************************ Statistics section start here *************************/
section.stats {
  position: relative;
  padding: 50px;
}
section.stats>div>div {
  position: relative;
  padding: 20px;
}
section.stats>div>div>p.stat-number {
  position: absolute;
  top: 37%;
  left: 14%;
  font-size: 2.5vw;
}
section.stats>div>div>p.stat-text {
  position: absolute;
  top: 30%;
  left: 48%;
  font-size: 1.5rem;
}
@media (max-width: 767px) {
  section.stats>div>div>img {
    width: 85%;
    padding-left: 25px;
  }
  section.stats>div>div>p.stat-number {
    font-size: 5vw;
    left: 15%;
  }
  section.stats>div>div>p.stat-text {
    font-size: 2rem;
    left: 45%;
  }
}
@media (max-width: 550px) {
  section.stats>div>div>p.stat-number {
    font-size: 4.5vw;
    left: 17%;
  }
}
@media (max-width: 450px) {
  section.stats>div>div>p.stat-number {
    left: 18%;
  }
}
@media (max-width: 400px) {
  section.stats>div>div>p.stat-number {
    font-size: 4vw;
    left: 21%;
  }
}
/************************How it works section starts here************************/
section.work {
  position: relative;
}
section.work>img.image-background {
  width: 100%;
  z-index: -1;
}
section.work>img.image-one {
  position: absolute;
  left: 2%;
  width: 6%;
  top: 5%;
}
section.work>img.image-two {
  position: absolute;
  left: 83%;
  width: 15%;
  top: 38%;
}
section.work>img.image-three {
  position: absolute;
  left: 18%;
  width: 9%;
  top: 65%;
}
section.work>div.title-block {
  position: absolute;
  left: 30%;
  top: 0%;
  color: white;
  font-size: 7vw;
}
section.work>div.text-block {
  position: absolute;
  text-align: left;
}
section.work>div.text-block>h1 {
  font-size: 2vw;
}
section.work>div.text-block>p {
  color: white;
  font-size: 1.8vw;
}
section.work>div.text-block-one {
  top: 13%;
  left: 25%;
  width: 50%
}
section.work>div.text-block-two {
  top: 40%;
  left: 20%;
  width: 50%
}
section.work>div.text-block-three {
  top: 70%;
  left: 42%;
  width: 50%
}
section.work>div.section-ladders {
  position: absolute;
  width: 90%;
  height: 80%;
  top: 0%;
  left: 10%;
}
section.work>div>div.start-block {
  position: absolute;
  height: 16%;
  width: 10%;
  z-index: 110;
  top: 0.5%;
  background-color: white;
}
section.work>div>div>div.start-triangle {
  position: absolute;
  z-index: 125;
  border-left: 1.5rem solid transparent;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid grey;
  top: 40%;
  left: 20%;
}
section.work>div>div.numbered-square {
  position: absolute;
  height: 14%;
  width: 10%;
  background-color: black;
  z-index: 110;
}
section.work>div>div.number-one {
  top: 17%;
}
section.work>div>div>div.hollow-circle {
  position: absolute;
  z-index: 125;
  border-radius: 50%;
  height: 90%;
  width: 90%;
  border: 5px solid white;
  left: 5%;
  top:5%;
}
section.work>div.section-ladders>div>div>p {
  position: absolute;
  color: white;
  top: -30%;
  left: 24%;
  font-size: 7vw;
}
div.sector {
  position: absolute;
  background-color: white;
  height: 17%;
  width: 13%;
  z-index: 110;
}
div.sector-cut-out {
  position: absolute;
  background-color: #459bee;
  z-index: 125;
  width: 25%;
  height: 25%;
}
div.sector-one {
  top: 31.5%;
  border-bottom-left-radius: 100%;
}
div.sector-cut-out-one {
  left: 77%;
  top: -5%;
  border-bottom-left-radius: 100%;
}
div.white-square {
  position: absolute;
  height: 14%;
  width: 10%;
  background-color: white;
  z-index: 110;
}
div.square-one {
  left: 13.5%;
  top: 34.5%;
}
div.square-two {
  left: 24%;
  top: 34.5%;
}
div.square-three {
  left: 34.5%;
  top: 34.5%;
}
div.square-four {
  left: 45%;
  top: 34.5%;
}
div.square-five {
  left: 55.5%;
  top: 34.5%;
}
div.sector-two {
  top: 34.5%;
  left: 66%;
  border-top-right-radius: 100%;
}
div.sector-cut-out-two {
  top: 80%;
  left: -3%;
  border-top-right-radius: 100%;
}
div.number-two {
  top: 52.5%;
  left: 69%;
}
div.sector-three {
  top: 67.5%;
  left: 66%;
  border-bottom-right-radius: 100%;
}
div.sector-cut-out-three {
  left: -3%;
  top: -3%;
  border-bottom-right-radius: 100%;
}
div.square-six {
  left: 55.5%;
  top: 71%;
}
div.square-seven {
  left: 45%;
  top: 71%;
}
div.square-eight {
  left: 34.5%;
  top: 71%;
}
div.sector-four {
  top: 71%;
  left: 21%;
  border-top-left-radius: 100%;
}
div.sector-cut-out-four {
  top: 80%;
  left: 77%;
  border-top-left-radius: 100%;
}
div.number-three {
  left: 21%;
  top: 89%;
}
@media (max-width: 767px) {
  div.sector, div.square-three, div.square-four, div.square-five, div.square-six, div.square-seven, div.square-eight {
    display: none;
  }
  section.work>div.section-ladders {
    left: 15%;
  }
  section.work>div>div.start-block {
    height: 20%;
    width: 11%;
  }
  section.work>div>div.numbered-square {
    height: 15%;
    width: 11%;
    background-color: black;
    z-index: 110;
  }
  section.work>div.section-ladders>div>div>p {
    top: -35%;
    left: 20%;
    font-size: 8vw;
  }
  div.white-square {
    height: 15%;
    width: 11%;
  }
  section.work>div>div.number-one {
    top: 21.5%;
  }
  div.square-one {
    left: 0%;
    top: 37.5%;
  }
  section.work>div>div.number-two {
    left: 0%;
    top: 53.5%;
  }
  div.square-two {
    left: 0%;
    top: 69.5%;
  }
  section.work>div>div.number-three {
    left: 0%;
    top: 85.5%;
  }
  section.work>div.text-block>h1 {
    font-size: 3vw;
  }
  section.work>div.text-block>p {
    color: white;
    font-size: 2vw;
  }
  section.work>div.text-block-one {
    top: 15%;
    left: 28%;
    width: 70%
  }
  section.work>div.text-block-two {
    top: 40%;
    left: 28%;
    width: 70%
  }
  section.work>div.text-block-three {
    top: 67%;
    left: 28%;
    width: 70%
  }
  section.work>img.image-one {
    left: 5%;
    width: 6%;
    top: 8%;
  }
  section.work>img.image-two {
    left: 1%;
    width: 13%;
    top: 41%;
  }
  section.work>img.image-three {
    left: 3%;
    width: 9%;
    top: 66%;
  }
}

/********************* Portfolio section starts here *********************/
section.portfolio {
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
}
section.portfolio>div.container.has-text-centered {
  padding-bottom: 2rem;
}
section.portfolio>div.portfolio-category>div>div.column.is-10 {
  padding-bottom: 0rem;
}
section.portfolio>div.portfolio-category>div>div>div>div {
  padding: 0rem;
}
section.portfolio>div.portfolio-category>div>div>div>div>img {
  -webkit-transition: all 0.25s ease; /* Safari and Chrome */
  -moz-transition: all 0.25s ease; /* Firefox */
  -ms-transition: all 0.25s ease; /* IE 9 */
  -o-transition: all 0.25s ease; /* Opera */
  transition: all 0.25s ease;
}
section.portfolio>div.portfolio-category>div>div>div>div>a {
  display: none;
  top: -25%;
}
section.portfolio>div.portfolio-category>div>div>div>div:hover img {
  -webkit-transform:scale(1.25); /* Safari and Chrome */
  -moz-transform:scale(1.25); /* Firefox */
  -ms-transform:scale(1.25); /* IE 9 */
  -o-transform:scale(1.25); /* Opera */
  transform:scale(1.25);
}
section.portfolio>div.portfolio-category>div>div>div>div:hover a {
  display: block;
}
@media (max-width: 767px) {
  section.portfolio>div.portfolio-category>div>div>div>div>img {
    width: 60%;
    margin-left: 20%;
  }
}

section.call-back {
  padding: 10px 20px 30px;
}

footer.footer {
  background-color: #459bee;
}
footer.footer>div>div>div>div>div>p {
  color: white;
}
footer.footer>div>div>div>div>div.address, footer.footer>div>div>div>div>div.contact-details {
  margin-top: 20px;
}
footer.footer>div>div>div>div>a {
  margin-top: 20px;
}
footer.footer>div>div>div>div>a.footer-link {
  font-size: 1.6vw;
  color: white;
}
@media (max-width: 767px) {
  footer.footer>div>div>div>div.footer-links, footer.footer>div>div>div>div.footer-information {
    text-align: center;
  }
  footer.footer>div>div>div>div>a.footer-link {
    font-size: 2vw;
  }
}
</style>
