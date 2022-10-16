<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import showCourseProgress from './components/showCourseProgress.vue';
import { testCourse } from "./assets/test-course";
</script>

<template>
  <showCourseProgress v-bind:course="testCourse" />
</template>

<style scoped>
</style>
