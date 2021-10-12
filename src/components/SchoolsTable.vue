<template>
  <div class="schools-container">
    <div class="schools-title">
      <span pt-5 pl-5>My Schools</span>
    </div>
    <div class="description" v-if="getSchoolsForUser.total < 1">
      <h4>You are yet to add a school</h4>
    </div>
    <b-table
      v-else
      id="schools-table"
      :items="getSchoolsForUser.schools"
      :fields="fields"
      head-variant="dark"
      table-variant="light"
      :borderless="true"
      responsive="sm"
    >
    </b-table>
    <b-button
      block type="submit" variant="primary"
      class="button mb-4 mt-5"><a href="/user/add-school">Add School</a></b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SchoolsTable',
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'category',
          sortable: false,
        },
        {
          key: 'email',
          sortable: false,
        },
        {
          key: 'address',
          sortable: false,
        },
        {
          key: 'schoolFeesRange',
          label: 'School Fees Range',
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getSchoolsForUser']),
  },
  methods: {
    ...mapActions(['fetchSchoolsForUser']),
  },
  mounted() {
    this.fetchSchoolsForUser();
  },
};
</script>

<style>
.schools-title {
  width: 350px;
  height: 53px;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-top: 50px;
  margin-bottom: 37px;
}
.description {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: var(--text-secondary-small);
}
.schools-table {
  height: 100%;
}
.schools-table tbody {
  font-size: 5px;
}
:focus {outline:0 !important;}
*:focus {
    outline: none !important;
}
a {
  color: #000000;
}
button {
  width: 125px;
  height: 48px;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: black;
}
button:hover {
  background-color: var(--enyatapurple);
}
table tbody tr:hover {
   box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05) !important;
   border-radius: 8px;
   margin-top: 5px;
}
.button {
    height: 50px;
    width:150px;
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
</style>
