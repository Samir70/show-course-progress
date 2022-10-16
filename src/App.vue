<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import showCourseProgress from './components/showCourseProgress.vue';
import { testCourseData } from "./assets/testCourseData";
import { CourseTracker } from "./Classes/CourseTracker";
const testCourse = new CourseTracker(testCourseData);
const history = ref(new Set());
const addToHistory = (obj) => {
  let { chapter, section, task } = obj;
  let key = [chapter, section, task].join('-');
  console.log(`From App: ${key}`);
  if (history.value.has(key)) {
    history.value.delete(key)
  } else {
    history.value.add(key)
  }
  console.log(history.value);
}
</script>

<template>
  <showCourseProgress v-bind:course="testCourse" v-bind:history="history" v-on:item-clicked="addToHistory" />
</template>

<style scoped>

</style>
