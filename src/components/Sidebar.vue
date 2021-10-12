<template>
    <b-sidebar
      id="admin-sidebar-no-header"
      v-model="visible"
      aria-labelledby="admin-sidebar-no-header-title"
      bg-variant="white"
      no-header
      shadow
      class="border"
    >
      <div id="admin-sidebar-top-section">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Admin image"
          :src="getUserDetails.image"
          class="m-auto"
        ></b-img>
        <div>
          <p class="m-auto">
            <span class="font-weight-bold">{{ getUserDetails.name }}</span><br />
            <i>{{ getUserDetails.email }}</i>
          </p>
        </div>
      </div>
      <div class="mt-4">
        <nav>
          <b-nav vertical>
            <b-nav-item active class="admin-sidebar-menu mb-2"
            :class="toggleDashboardBorder ? 'purple-border' : null"
            @click="selectDashboard">
              <img
                src="../assets/dashboard-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Dashboard</b-nav-item
            >
            <b-nav-item class="admin-sidebar-menu mb-2"
            :class="toggleAddSchoolBorder ? 'purple-border' : null"
            @click="selectAddSchool">
              <img
                src="../assets/create-application-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Add School</b-nav-item
            >
            <b-nav-item @click="logoutNow" class="admin-sidebar-menu mb-2 log-out">
              <img
                src="../assets/log-out-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Log Out</b-nav-item
            >
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  props: {
    toggleDashboardBorder: {
      type: Boolean,
    },
    toggleAddSchoolBorder: {
      type: Boolean,
    },
  },
  data() {
    return {
      visible: true,
      mainProps: {
        width: 100,
        height: 100,
        class: 'mt-4',
      },
    };
  },
  computed: {
    ...mapGetters(['getUserDetails']),
  },
  methods: {
    ...mapActions(['logout']),
    selectDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    selectAddSchool() {
      this.$router.push({ name: 'AddSchool' });
    },
    logoutNow() {
      this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
.admin-sidebar-menu {
  font-size: 16px;
  font-weight: 400;
}
#admin-sidebar-menu-history {
  margin-left: -2px;
}
#admin-sidebar-top-section {
  background: var(--enyata-purple);
}
p {
  color: #ffffff;
}
a {
  color: var(--text-primary);
}
a:hover {
  color: var(--text-primary);
  font-weight: 700;
}

.purple-border {
  border-left: 6px #7557D3 solid;
}
.log-out {
  margin-top: 50px;
}
</style>
