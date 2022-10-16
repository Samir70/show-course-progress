<script setup>
import { ref } from "vue";
const props = defineProps({
    course: Object,
    history: Object
})
const emits = defineEmits(['item-clicked'])
const activeKey = ref([]);
const reportChange = (chapter, section, task) => {
    console.log(`Clicked on ${[chapter, section, task].join('-')}`)
    emits('item-clicked', { chapter, section, task })
}
const makeKey = (c, s, t) => [c, s, t].join('-')
</script>
<template>
    <div id="course-display-box">
        <p>Course name: {{course.courseName}}</p>
        <p>There are {{course.moduleCount}} modules in this course</p>
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel v-for="module in course.modules" v-bind:key="module.key"
                v-bind:header="module.moduleName">
                <a-collapse accordion>
                    <div>There are {{module.chapterCount}} chapters in this module </div>
                    <a-collapse-panel v-for="chapter in module.chapters" v-bind:key="chapter.key"
                        v-bind:header="chapter.chapterName">
                        <a-list bordered v-bind:data-source="chapter.tasks">
                            <template #renderItem="{item}">
                                <a-list-item v-on:click="reportChange(chapter.chapterName, item.section, item.task)" v-bind:class="history.has(makeKey(chapter.chapterName, item.section, item.task)) ? 'item-done' : 'item-todo'">
                                    {{`${chapter.chapterName}-${item.section}-${item.task} ${history.has(makeKey(chapter.chapterName, item.section, item.task))}`}}</a-list-item>
                            </template>
                            <template #header>
                                <div>There are {{chapter.taskCount}} tasks in {{chapter.chapterName}} progress bar to be added</div>
                                <div>{{chapter.countCompletedTasks(history)}} are complete</div>
                            </template>
                        </a-list>
                    </a-collapse-panel>
                </a-collapse>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>
<style>
li {
    padding: 3px;
}
li.item-done {
    background: lightgreen;
}
li.item-todo {
    background: rgb(248, 251, 90);
}
li:hover {
    text-decoration: underline;
    background: violet;
}

</style>