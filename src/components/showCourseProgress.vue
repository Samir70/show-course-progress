<script setup>
const props = defineProps({
    course: Object
})
</script>
<template>
    <div id="course-display-box">
        <p>Course name: {{course.courseName}}</p>
    </div>
</template>
<style>
</style>