<template>
<div class="admin-application">
    <div class="admin-application-sidebar">
      <Sidebar :toggleAddSchoolBorder="toggleAddSchoolBorder" />
    </div>
    <div class="admin-application-content">
      <SchoolCreation />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import SchoolCreation from '@/components/SchoolCreation.vue';

export default {
  name: 'AddSchool',
  data() {
    return {
      toggleAddSchoolBorder: false,
    };
  },
  components: {
    Sidebar,
    SchoolCreation,
  },
  mounted() {
    this.toggleAddSchoolBorder = true;
  },
};
</script>

<style scoped>
.admin-application {
  display: flex;
  width: 100%;
  /* align-items: stretch; */
}
.admin-application-sidebar {
  width: 27%;
}
.admin-application-content {
  height: 750px;
  /* padding-right: 30px; */
  box-sizing: border-box;
}
</style>
