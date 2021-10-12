<template>
<div class="admin-application">
    <div class="admin-application-sidebar">
      <Sidebar :toggleDashboardBorder="toggleDashboardBorder" />
    </div>
    <div class="admin-application-content">
      <SchoolsTable />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import SchoolsTable from '@/components/SchoolsTable.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      toggleDashboardBorder: false,
    };
  },
  components: {
    Sidebar,
    SchoolsTable,
  },
  mounted() {
    this.toggleDashboardBorder = true;
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
