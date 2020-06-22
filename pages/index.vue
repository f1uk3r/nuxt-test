<template>
  <div>
    <section class="top-image">
      <img src="../assets/top-image.png" alt="Banner Image" class="banner">
      <img src="../assets/top-image-vector.png" alt="Foreground" class="top-banner-vector">
      <h1 class="has-text-weight-bold is-size-1">Book your own Tutor</h1>

      <!-- First Dropdown -->
      <div class="field category">
        <div class="control">
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
      </div>

      <!-- second dropdown -->
      <div class="field standard">
        <div class="control">
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
        <div class="column is-12">
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

  </div>
</template>

<script>

export default {
  name: 'HomePage',
  // layout: 'landing',
  components: {
  },
  data () {
    return {
      category: '',
      formLink: '',
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

}
section.top-image>div.field.category {
  position: absolute;
  top: 39%;
  left: 2%;
}
section.top-image>div.field.standard {
  position: absolute;
  top: 39%;
  left: 22%
}
section.top-image>a#submit {
  position: absolute;
  top: 48%;
  left: 2%
}
@media (max-width: 1024px) {
  section.top-image>h1 {
    top: 30%;
    left: 5%;
    color: white;

  }
  section.top-image>div.field.category {
    top: 45%;
    left: 5%;
  }
  section.top-image>div.field.standard {
    top: 55%;
    left: 5%
  }
  section.top-image>a#submit {
    top: 50%;
    left: 35%
  }
}
@media (max-width: 900px) {
  section.top-image>img.top-banner-vector {
    display: none;
  }
  section.top-image>h1 {
    top: 25%;
    left: 10%;
    color: white;

  }
  section.top-image>div.field.category {
    top: 40%;
    left: 10%;
  }
  section.top-image>div.field.standard {
    top: 50%;
    left: 10%
  }
  section.top-image>a#submit {
    top: 45%;
    left: 45%
  }
}
@media (max-width: 767px) {
  section.top-image>h1 {
    top: 15%;
    color: white;

  }
  section.top-image>div.field.category {
    left: 15%;
  }
  section.top-image>div.field.standard {
    top: 55%;
    left: 15%
  }
  section.top-image>a#submit {
    left: 55%
  }
}
@media (max-width: 600px) {
  section.top-image>img.banner {
    display: none;
  }
  section.top-image {
    background-color: #459bee;
    height: 300px;
  }
  section.top-image>h1 {
    top: 15%;
    left: 5%;
    color: white;

  }
  section.top-image>div.field.category {
    top: 50%;
    left: 15%;
  }
  section.top-image>div.field.standard {
    top: 65%;
    left: 15%
  }
  section.top-image>a#submit {
    top: 55%;
    left: 70%
  }
}
@media (max-width: 500px) {
  section.top-image>div.field.category {
    top: 65%;
    left: 8%;
  }
  section.top-image>div.field.standard {
    top: 80%;
    left: 8%
  }
  section.top-image>a#submit {
    top: 72%;
    left: 70%
  }
}

/******************* Services section starts here ***********************/
section.services {
  position: relative;
  padding: 50px 20px 20px;
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
  left: 20%;
}
div.service-acads>ul, div.service-sports>ul, div.service-hobbies>ul {
  position: absolute;
  top: 30%;
  left: 5%;
}
@media (max-width: 767px) {
  div.service-acads, div.service-sports, div.service-hobbies {
    height: 200px;
  }
}

</style>
