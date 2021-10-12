<template>
  <div class="home">
    <div class="contents">
      <b-navbar toggleable="lg" type="light" variant="faded">
        <b-navbar-brand class="logo-img" href="#">
          <img src="../assets/school-hub-logo.svg" alt="school hub logo" />
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <span id="owner">Are You a School Owner?</span>
          <div id="parent" class="ml-auto">
              <a id="boldf" href="/signup">Sign Up</a>
              <a id="boldf" href="/login">Login</a>
          </div>
        </b-collapse>
      </b-navbar>
      <div class="row1 d-flex justify-content-between">
        <div class="main-texts">
          <h1 class="text-black main-text fw-bold">
            Looking for the<br />
            <br/><span class="school-text">Best Schools</span> in Nigeria?
          </h1>
          <p class="text-muted minor-text">
            We've made your search easier! <br />
            The School Hub hosts the biggest platform of
            <br /> affordable schools offering quality education.
          </p>
          <div class="button-group">
            <b-button
            class="button"><a href="/schools">View Schools</a></b-button>
            <b-button
            class="button" id="second"><a href="/user/add-school">Post Your School</a></b-button>
          </div>
        </div>
        <div class="mentor">
          <img class="home-img w-100 d-none d-md-block"
          src="../assets/homepage-pic.jpg" alt="school children image"/>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="footer p-0 m-auto text-center text-light">
      <p>Copyright © The School Hub 2021</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

.home {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
}
.navbar {
  padding: 20px 0;
}
.nav-item {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);
  margin-left: 30px;
}
.contents {
  padding: 0 130px;
  width: 1440px;
  margin: 0 auto;
}
.row1 {
  box-sizing: border-box;
}
.main-text {
  margin-top: 122px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 40.9082px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #211f26;
}
.school-text {
  color: var(--enyata-purple);
}
.minor-text {
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
}
.mentor {
  position: relative;
  width: 500px;
  height: 350px;
  margin-top: 122px;
}
.button {
  width: 160px;
  height: 52px;
  background-color: var(--enyata-purple);
  border: none;
}

.button-group {
  width: 80%;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
button:hover {
  background-color: var(--enyata-purple);
}
button a {
  color: #ffffff;
}
button:hover {
  background-color: var(--enyata-purple);
}
.space {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #b3aaca;
}
h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
}
.col p,
.footer {
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  letter-spacing: 0.01em;
  color: rgba(33, 31, 38, 0.6);
}
.footer {
  background-color: var(--enyata-purple);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center
}
.footer p {
  margin: auto;
}

.login-signup {
  align-items: center;
}

#boldf {
    color: var(--enyata-purple);
    font-weight: bold;
  }
#parent {
  text-align: center;
}

#parent a {
    display: inline-block;
    width: 70px;
    margin: 0px 10px;
}
#owner {
  margin-left: 550px;
}
</style>
