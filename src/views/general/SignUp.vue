<template>
  <div class="signup-container">
    <div class="logo">
      <img src="../../assets/school-hub-logo.svg" alt="school hub logo">
    </div>
    <div>
      <div class="title">Sign Up as a School Owner or Administrator</div>
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm,
  },
};
</script>

<style scoped>
  .signup-container {
    height: 100vh;
    width: 820px;
    padding-top: 30px;
    margin: auto;
    text-align: center;
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
    margin: auto;
    margin-bottom: 68px;
  }
</style>
