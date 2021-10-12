<template>
    <div class="schools-wrapper">
        <Schools />
    </div>
</template>

<script>
import Schools from '@/components/Schools.vue';

export default {
  name: 'AllSchools',
  components: {
    Schools,
  },
};
</script>

<style scoped>
.schools-wrapper {
    max-height: 900px;
}
</style>
