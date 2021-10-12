<template>
  <div class="pl-5 pr-5">
    <div class="logo semi-nav-bar">
      <img src="../assets/school-hub-logo.svg" alt="school hub logo">
    </div>
    <div v-if="getAllSchools.schools.length === 0" class="logo">
      <h2>No schools to display</h2>
    </div>
    <div v-else>
      <h1 id="header">Our Schools</h1>
      <br />
      <div class="home">
        <div class="headlines">
          <div
            class="single__headline"
            v-for="(school, hindex) in getAllSchools.schools"
            :key="hindex"
          >
            <div class="image__headline">
              <img class="img" :src="school.banner" :alt="school.name" />
            </div>
            <h3>{{ school.name }}</h3>
            <h2>{{ school.category }}</h2>
            <button class="bookmark" id="cta">Sorry, the rest of this content is exclusive</button>
            <div class="bottom__headline" id="exclusive" hidden>
              <h4> Here's your exclusive content </h4>
              <p><b>About us:</b> {{ school.aboutUs }}</p>
              <p><b>School fees range:</b> {{ school.schoolFeesRange }}</p>
              <p><b>Our facilities include:</b> {{ school.facilities }}</p>
              <p><b>Contact Us:</b> {{ `${school.email}; ${school.address}` }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Schools',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getAllSchools']),
  },
  watch: {
    getResponseAddSchool(val) {
      if (val.status === 'Success') {
        this.loading = false;
        console.log('yay!!!!', val);
      } else {
        this.loading = true;
      }
    },
  },
  methods: {
    ...mapActions(['fetchAllSchools']),
  },
  mounted() {
    this.fetchAllSchools();
  },
};
</script>

<style scoped>
#header, .logo {
  text-align: center;
}
.home {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 70vh;
  padding: 30px;
  box-sizing: border-box;
}
.headlines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.single__headline {
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
}
.image__headline {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
.bookmark {
  border: none;
  border-radius: 5px;
  color: white;
  background: var(--enyata-purple);
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
}
.semi-nav-bar {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
}
#exclusive {
  border-top: 2px solid black;
}
</style>
