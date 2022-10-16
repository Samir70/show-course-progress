class Task {
    constructor(section='unknown section', task='unknown task', done=false) {
        this.section = section;
        this.task = task;
        this.done = done;
    }
}
export class TaskTracker{
    constructor(chapterData = {}) {
        this.chapterName = chapterData.chapterName || "This chapter has no name";
        this.key = chapterData.key
        this.data = chapterData
        this.tasks = []
        for (let section in chapterData.sections) {
            // console.log(`working on section ${section}`)
            for (let task of chapterData.sections[section]) {
                // console.log(task)
                this.tasks.push(new Task(section, task))
            }
        }
    }
}