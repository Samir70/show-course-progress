<script setup>
const props = defineProps({
    course: Object
})
</script>
<template>
    <div id="course-display-box">
        <p>Course name: {{course.courseName}}</p>
        <p>Modules: {{course.modules}}</p>
    </div>
</template>
<style>
</style>