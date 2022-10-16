<script setup>
import { ref } from "vue";
const props = defineProps({
    course: Object
})
const activeKey = ref([]);
</script>
<template>
    <div id="course-display-box">
        <p>Course name: {{course.courseName}}</p>
        <p>Modules: {{course.modules}}</p>
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel v-for="module of course.modules" v-bind:key="module" v-bind:header="module">
                <p>content of module {{course.modules.module}}</p>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>
<style>

</style>