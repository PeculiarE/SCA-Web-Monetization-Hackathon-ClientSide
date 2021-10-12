<template>
  <div class="add-school mt-5">
    <div class="title">Add School</div>
      <b-form class="form"
        @submit.prevent="submitSchoolDetails()">
              <div class="d-flex justify-content-between">
                <div class="small-inputs">
                <b-form-group id="input-group-1" label="Name" label-for="input-1">
              <b-form-input
              id="input-1"
              v-model="school.name" type="text"
              required @keyup="validateName()"></b-form-input>
              <b-form-invalid-feedback :state="feedbackName">
                This field requires a minimum of 10 characters
              </b-form-invalid-feedback>
              </b-form-group>
              </div>
              <div class="small-inputs">
                <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
              id="input-2"
              v-model="school.email" type="email"
              required @keyup="feedbackEmail = true"></b-form-input>
              </b-form-group>
              </div>
              </div>
              <div class="d-flex justify-content-between">
              <div class="small-inputs">
                <b-form-group id="input-group-3" label="About" label-for="input-3">
              <b-form-input
              id="input-3"
              v-model="school.aboutUs" type="text"
              required @keyup="validateAbout()"></b-form-input>
              <b-form-invalid-feedback :state="feedbackAbout">
                This field requires a minimum of 10 characters
              </b-form-invalid-feedback>
              </b-form-group>
              </div>
              <div class="small-inputs">
                <b-form-group id="input-group-4" label="Address" label-for="input-4">
              <b-form-input
              id="input-4"
              v-model="school.address" type="text"
              required @keyup="validateAddress()"></b-form-input>
              <b-form-invalid-feedback :state="feedbackAddress">
                This field requires a minimum of 10 characters
              </b-form-invalid-feedback>
              </b-form-group>
              </div>
              </div>
              <div class="d-flex justify-content-between">
              <div class="small-inputs">
                <b-form-group id="input-group-5" label="School Fees Range" label-for="input-5">
              <b-form-input
              id="input-5"
              v-model="school.schoolFeesRange" type="text"
              required @keyup="validateFees()"></b-form-input>
              <b-form-invalid-feedback :state="feedbackRange">
                This field requires a minimum of 5 characters
              </b-form-invalid-feedback>
              </b-form-group>
              </div>
              <div class="small-inputs">
                <b-form-group id="input-group-6" label="Facilities" label-for="input-6">
              <b-form-input
              id="input-6"
              v-model="school.facilities" type="text"
              required @keyup="validateFacilities()"></b-form-input>
              <b-form-invalid-feedback :state="feedbackFacilities">
                This field requires a minimum of 10 characters
              </b-form-invalid-feedback>
              </b-form-group>
              </div>
              </div>
              <div class="d-flex justify-content-between">
              <div class="small-inputs">
              <b-form-group id="input-group-7" label="Category" label-for="input-7">
              <b-form-select id="input-6" v-model="school.category"
              :options="options"></b-form-select>
              </b-form-group>
              </div>
              <div class=" w-50 d-flex justify-space-around pl-5">
              <div class="small-inputs" id="input-group-8">
              <b-form-file v-model="school.banner" plain class="mt-4"></b-form-file>
              </div>
              <div class="test">
                <b-button
                block type="button" variant="primary" @click="convertImage"
                class="button mb-4 mt-5"><a>Upload</a>
              </b-button>
                <b-form-valid-feedback style="font-size: 15px"
              :state="uploadingStatus" class="text-center">
              <b>Uploading...please wait</b>
              </b-form-valid-feedback>
              <b-form-invalid-feedback style="font-size: 15px" :state="uploadingResponse">
            <b> Failed to upload! </b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback style="font-size: 15px" :state="uploadingResponse">
            <b>Uploaded successfully</b>
          </b-form-valid-feedback>
              </div>
              </div>
              </div>
            <div>
              <b-form-valid-feedback style="font-size: 15px"
              :state="loadingStatus" class="text-center">
              <b>Checking...please wait</b>
              </b-form-valid-feedback>
            </div>
                <b-form-invalid-feedback style="font-size: 15px" :state="valid">
            <b>{{getResponseAddSchool.message}}</b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback style="font-size: 15px" :state="valid">
            <b>{{getResponseAddSchool.message}}</b>
          </b-form-valid-feedback>
           <div class="text-center">
                <b-button id="submit-btn" type="submit" :disabled="validSch">Submit</b-button>
            </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddSchool',
  data() {
    return {
      school: {
        name: '',
        aboutUs: '',
        address: '',
        email: '',
        schoolFeesRange: '',
        facilities: '',
        category: null,
        banner: '',
      },
      loadingStatus: null,
      uploadingStatus: null,
      uploadingResponse: null,
      feedbackName: null,
      feedbackEmail: null,
      feedbackAbout: null,
      feedbackAddress: null,
      feedBackFacilities: null,
      feedbackRange: null,
      validSch: null,
      valid: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'creche', text: 'Creche' },
        { value: 'nursery_and_primary', text: 'Nursery and Primary' },
        { value: 'online_school', text: 'Online School' },
        { value: 'secondary_school', text: 'Secondary School' },
        { value: 'pre_degree_foundation', text: 'Pre Degree' },
        { value: 'tertiary', text: 'Tertiary Institution' },
        { value: 'special_school', text: 'Special Needs School' },
        { value: 'business_school', text: 'Business School' },
      ],
    };
  },
  computed: {
    ...mapGetters(['getResponseAddSchool', 'getResponseUploadFile']),
    changeState() {
      const {
        feedbackName,
        feedbackEmail,
        feedbackAbout,
        feedbackAddress,
        feedbackRange,
        feedBackFacilities,
        school,
      } = this;
      return {
        feedbackName,
        feedbackEmail,
        feedbackAbout,
        feedbackAddress,
        feedbackRange,
        feedBackFacilities,
        school,
      };
    },
  },
  watch: {
    changeState: {
      handler(val) {
        if (val.feedbackName && val.feedbackEmail && val.feedbackAbout
        && val.feedbackAddress && val.feedbackRange && val.feedBackFacilities
        && this.school.category && val.school.banner) {
          this.validSch = true;
          return this.validSch;
        }
        this.validSch = false;
        return this.validSch;
      },
      deep: true,
    },
    getResponseUploadFile(val) {
      if (val) {
        this.uploadingStatus = false;
        this.uploadingResponse = true;
      } else {
        this.uploadingStatus = false;
        this.uploadingResponse = false;
      }
    },
    getResponseAddSchool(val) {
      console.log(val);
      if (val.status === 'success') {
        this.loadingStatus = false;
        this.valid = true;
        console.log('yay!!!!');
      } else {
        this.loadingStatus = false;
      }
    },
  },
  methods: {
    ...mapActions(['addSchool', 'uploadFile']),
    validateName() {
      if (/^(?!.*?\s{2})[A-Za-z0-9.?/@!#$%^&*()_+=-><,:;"'{[}| ]{10,}$/.test(this.school.name)) {
        this.feedbackName = true;
        return;
      }
      this.feedbackName = false;
    },
    validateAbout() {
      if (/^(?!.*?\s{2})[A-Za-z0-9.?/@!#$%^&*()_+=-><,:;"'{[}| ]{10,}$/.test(this.school.aboutUs)) {
        this.feedbackAbout = true;
        return;
      }
      this.feedbackAbout = false;
    },
    validateFees() {
      if (/^(?!.*?\s{2})[A-Za-z0-9.#$%&()-><,:;"'{[}| ]{5,}$/.test(this.school.schoolFeesRange)) {
        this.feedbackRange = true;
        return;
      }
      this.feedbackRange = false;
    },
    validateFacilities() {
      if (/^(?!.*?\s{2})[A-Za-z0-9.?/@!#$%^&*()_+=-><,:;"'{[}| ]{10,}$/.test(this.school.facilities)) {
        this.feedbackFacilities = true;
        return;
      }
      this.feedbackFacilities = false;
    },
    reset() {
      this.school = {
        name: '',
        about: '',
        address: '',
        email: '',
        schoolFeesRange: '',
        facilities: '',
        category: null,
        banner: '',
      };
      this.valid = null;
    },
    convertImage() {
      this.uploadingStatus = true;
      this.uploadFile(this.school.banner);
    },
    submitSchoolDetails() {
      this.loadingStatus = true;
      this.addSchool(this.school);
      this.reset();
      this.uploadingResponse = false;
    },
  },
};
</script>

<style scoped>
.title {
    font-weight: 300;
    margin-top: 50px;
    font-size: 43.5555px;
    font-style: normal;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
.form {
    margin-top: 40px;
}
#choose-file {
    width: 456px;
    cursor: pointer;
}
#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4, #input-group-5, #input-group-6, #input-group-7, #input-group-8 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-primary);
  text-align: left;
}
#input-group-1, #input-group-4, #input-group-2,
#input-group-3, #input-group-6, #input-group-5,
#input-group-7, #input-group-8 {
    margin-top: 36px;
}
#input-1,
#input-2,
#input-3,
#input-4, #input-5, #input-6 {
  width: 440px;
  height: 41px;
  border: 1.5px solid var(--text-primary);
  box-sizing: border-box;
  border-radius: 4px;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#input-group-4 {
  margin-left: 50px
}
#input-19 {
    width: 976px;
    height: 144px;
    border: 1.5px solid var(--text-primary);
    box-sizing: border-box;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.height-- {
  width: 456px;
  height: 108px;
}
.instructions {
  height: 144px;
}
#submit-btn {
    width: 379px;
    height: 50px;
    background-color: var(--enyata-purple);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    font-family: Lato;
    margin-top: 80px;
}
.button {
    height: 50px;
    width: 120px;
    margin-top: 40px;
    background-color: var(--enyata-purple);
    border: none;
}
.button:hover {
  background-color: var(--enyata-purple);
}

button a {
  color: white
}

button a:hover {
  color: white
}

.test {
  display: flex;
  flex-direction: column;
}
</style>
