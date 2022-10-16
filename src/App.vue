<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import showCourseProgress from './components/showCourseProgress.vue';
import { testCourseData } from "./assets/testCourseData";
import { CourseTracker } from "./Classes/CourseTracker";
const testCourse = new CourseTracker(testCourseData)
</script>

<template>
  <showCourseProgress v-bind:course="testCourse" />
</template>

<style scoped>
</style>
