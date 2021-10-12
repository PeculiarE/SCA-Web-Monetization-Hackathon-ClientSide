<template>
<div class="login-container">
    <div class="login-content">
      <div class="login-content-icon">
          <img alt="school hub logo" src="../../assets/white-logo.svg">
      </div>
      <h2>Log In</h2>
      <LoginForm />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'AdminLogin',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
  .login-container{
    background: #7557D3;
    height: 100vh;
    width: 100%;
    padding: 70px;
    margin: auto;
    text-align: center;
  }
  .login-content {
    height: 100%;
    width: 50%;
    margin: auto;
    text-align: center;
    padding-top: 30px;
  }
  .login-content h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 56px;
  }
</style>
