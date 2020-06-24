<template>
  <b-navbar :style="navbarColorObject">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img
          src="../assets/logo-side-edhusk.png"
          alt="EdHusk"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item class="has-dropdown is-hoverable">
        <b-dropdown hoverable aria-role="list">
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <span>Academics</span>
            <b-icon icon="menu-down" />
          </a>
          <template v-for="(eachStandard, index) in academicsArray">
            <b-dropdown-item
              :key="index"
              aria-role="listitem"
            >
              <a :href="eachStandard.link">{{ eachStandard.text }}</a>
            </b-dropdown-item>
          </template>
        </b-dropdown>
      </b-navbar-item>

      <b-navbar-item class="has-dropdown is-hoverable">
        <b-dropdown hoverable aria-role="list">
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <span>Sports & Fitness</span>
            <b-icon icon="menu-down" />
          </a>
          <template v-for="(eachSport, index) in sportsArray">
            <b-dropdown-item
              :key="index"
              aria-role="listitem"
            >
              <a :href="eachSport.link">{{ eachSport.text }}</a>
            </b-dropdown-item>
          </template>
        </b-dropdown>
      </b-navbar-item>

      <b-navbar-item class="has-dropdown is-hoverable">
        <b-dropdown hoverable aria-role="list">
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <span>Hobbies & Life Skills</span>
            <b-icon icon="menu-down" />
          </a>
          <template v-for="(eachHobbie, index) in hobbiesArray">
            <b-dropdown-item
              :key="index"
              aria-role="listitem"
              tag="nuxt-link"
            >
              <a :href="eachHobbie.link">{{ eachHobbie.text }}</a>
            </b-dropdown-item>
          </template>
        </b-dropdown>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-success" href="/tutor/">
            <strong>Become a Tutor</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'WebsiteNavbarForms',
  data () {
    return {
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
        { link: '/life-skills/learn-language', text: 'Learn a Language' },
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
      ],
      showNav: false,
      mobShowAcad: false,
      mobShowSport: false,
      mobShowHobby: false,
      navbarColorObject: { backgroundColor: '#459bee' }
    }
  },
  computed: {
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 50) {
        this.navbarColorObject = {
          backgroundColor: 'white'
        }
      } else {
        this.navbarColorObject = {
          backgroundColor: '#459bee'
        }
      }
    }
  }
}
</script>

<style>
a.navbar-item>img {
  max-height: 44px;
}
nav.navbar {
  position: fixed;
  z-index: 1000;
  width: 100%;
}
</style>
