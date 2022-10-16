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
        <!-- <p>Modules: {{course.modules}}</p> -->
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel v-for="module of course.modules" v-bind:key="module.key"
                v-bind:header="module.moduleName">
                <a-collapse accordion>
                    <a-collapse-panel v-for="chapter of module.chapters" v-bind:key="chapter.key" v-bind:header="chapter.chapterName">
                        <p>Contents of chapter: {{chapter.data}}</p>
                        <p>tasks: {{chapter.tasks}}</p>
                    </a-collapse-panel>
                </a-collapse>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>
<style>

</style>