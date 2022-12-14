class Task {
    constructor(section='unknown section', task='unknown task', id=0, done=false) {
        this.section = section;
        this.task = task;
        this.id = id;
        this.done = done;
    }
}
export class TaskTracker{
    constructor(chapterData = {}) {
        this.chapterName = chapterData.chapterName || "This chapter has no name";
        this.key = chapterData.key
        this.data = chapterData
        this.tasks = []
        this.taskCount = 0
        this.taskCountInSection = {}
        for (let section in chapterData.sections) {
            // console.log(`working on section ${section}`)
            this.taskCountInSection[section] = 0;
            for (let task of chapterData.sections[section]) {
                // console.log(task)
                this.taskCount++
                this.taskCountInSection[section]++
                this.tasks.push(new Task(section, task, section+this.taskCount))
            }
        }
    }
    countCompletedTasks = (history) => {
        return [...history].filter(h => h.startsWith(this.chapterName)).length
    }
}