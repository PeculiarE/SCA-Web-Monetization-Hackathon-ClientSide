/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetails: JSON.parse(localStorage.getItem('userDetails')) || {},
    allSchoolsForUser: [],
    allSchools: {},
    responseRegister: {
      status: '',
      message: '',
    },
    responseLogin: {
      status: '',
      message: '',
    },
    loginToken: localStorage.getItem('loginToken') || null,
    initialResponseLogin: {
      image: '',
      name: '',
      email: '',
    },
    imageData: localStorage.getItem('imageData') || null,
    responseAddSchool: {
      status: '',
      message: '',
    },
  },
  getters: {
    getUserDetails(state) {
      return state.userDetails;
    },
    getSchoolsForUser(state) {
      return state.allSchoolsForUser;
    },
    getAllSchools(state) {
      return state.allSchools;
    },
    getResponseRegister(state) {
      return state.responseRegister;
    },
    getLoginToken(state) {
      return state.loginToken;
    },
    getResponseLogin(state) {
      return state.responseLogin;
    },
    loggedInStatus(state) {
      return state.loginToken !== null;
    },
    getUserInfo(state) {
      if (!state.userDetails) {
        return state.initialResponseLogin;
      }
      return state.userDetails;
    },
    getResponseUploadFile(state) {
      return state.imageData;
    },
    getResponseAddSchool(state) {
      return state.responseAddSchool;
    },
  },

  mutations: {
    updateQuizSetTime(state, payload) {
      state.setTime = payload;
      console.log(state.setTime);
    },
    updateTestscore(state, payload) {
      state.testScore = payload;
    },
    adminDetails(state, payload) {
      state.adminDetails = payload;
    },
    renderAllBatchQuestionsInDb(state, payload) {
      state.allQuestionsInDb = [...payload];
      console.log(state.allQuestionsInDb);
    },
    updateQuestionCount(state, payload) {
      state.questionCount += payload;
    },
    reduceQuestionCount(state, payload) {
      state.questionCount -= payload;
    },
    updateAdminQuestions(state, payload) {
      state.adminQuestions.push(payload);
    },

    updateAllSchoolsForUser(state, payload) {
      state.allSchoolsForUser = payload;
    },
    updateAllSchools(state, payload) {
      state.allSchools = payload;
    },
    updateQuestionsDetails(state, payload) {
      state.questionsDetailsToSend.push(payload);
    },
    updateResponseRegister(state, payload) {
      state.responseRegister = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateResponseLogin(state, payload) {
      state.responseLogin = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateResponseUploadFile(state, payload) {
      state.responseUploadFile = {
        status: payload.status,
        message: payload.message,
        data: payload.data,
      };
    },
    retrieveLoginToken(state, payload) {
      console.log({ payload });
      state.loginToken = payload;
    },
    retrieveImageData(state, payload) {
      state.imageData = payload;
    },
    updateUserDetails(state, payload) {
      console.log(payload.image);
      /* eslint-disable global-require */
      state.initialResponseLogin.image = require('@/assets/account.svg');
      state.initialResponseLogin.name = `${payload.firstName} ${payload.lastName}`;
      state.initialResponseLogin.email = payload.email;
      console.log(state.initialResponseLogin);
    },
    destroyLoginToken(state) {
      state.loginToken = null;
    },
    updateResponseAddSchool(state, payload) {
      state.responseAddSchool = {
        status: payload.status,
        message: payload.message,
      };
    },
  },

  actions: {
    async register({ commit }, userData) {
      console.log(userData);
      await axios
        .post('https://the-school-hub.herokuapp.com/api/v1/auth/signup', userData)
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          commit('updateResponseRegister', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          commit('updateResponseRegister', failObject);
        })
        .finally(() => {});
    },

    async login(context, userData) {
      await axios
        .post('https://the-school-hub.herokuapp.com/api/v1/auth/signin', userData)
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          console.log('response.data.data', response.data.data);
          const { token, ...deets } = response.data.data;
          localStorage.setItem('loginToken', token);
          context.commit('retrieveLoginToken', token);
          context.commit('updateResponseLogin', successObject);
          context.commit('updateUserDetails', deets);
          localStorage.setItem('userDetails', JSON.stringify(context.state.initialResponseLogin));
        })
        .catch((error) => {
          console.log(error);
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseLogin', failObject);
        })
        .finally(() => {});
    },

    async fetchSchoolsForUser({ commit, state }) {
      if (localStorage.getItem('loginToken')) {
        axios.defaults.headers.common.Authorization = `Bearer ${state.loginToken}`;
        await axios.get('https://the-school-hub.herokuapp.com/api/v1/user/schools')
          .then((response) => {
            console.log(response);
            commit('updateAllSchoolsForUser', response.data.data);
          })
          .catch((error) => console.log(error))
          .finally(() => console.log('finally loading'));
      }
    },

    async uploadFile(context, pictureData) {
      const formData = new FormData();
      formData.append('file', pictureData, pictureData.name);
      console.log(formData);
      await axios({
        method: 'post',
        url: 'https://the-school-hub.herokuapp.com/api/v1/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${context.state.loginToken}`,
        },
      })
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data.url,
          };
          console.log(successObject);
          console.log(response.data.data.url);
          localStorage.setItem('imageData', response.data.data.url);
          context.commit('retrieveImageData', response.data.data.url);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          console.log(failObject);
        })
        .finally(() => {});
    },

    async addSchool(context, schoolData) {
      const a = context.state.imageData;
      console.log(a);
      const completeSchoolData = { ...schoolData, banner: a };
      console.log(completeSchoolData);
      await axios({
        method: 'post',
        url: 'https://the-school-hub.herokuapp.com/api/v1/school',
        data: completeSchoolData,
        headers: {
          Authorization: `Bearer ${context.state.loginToken}`,
        },
      })
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          context.commit('updateResponseAddSchool', successObject);
        })
        .catch((error) => {
          console.log(error);
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseAddSchool', failObject);
        })
        .finally(() => {});
    },

    async fetchAllSchools({ commit }) {
      await axios.get('https://the-school-hub.herokuapp.com/api/v1/school')
        .then((response) => {
          console.log(response);
          commit('updateAllSchools', response.data.data);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('finally loading'));
    },

    logout({ commit }) {
      localStorage.removeItem('loginToken');
      localStorage.removeItem('userId');
      commit('destroyLoginToken');
    },
  },
});
