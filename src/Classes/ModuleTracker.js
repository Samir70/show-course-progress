import { TaskTracker } from "./TaskTracker";
export class ModuleTracker {
    constructor(moduleData = {}) {
        this.moduleName = moduleData.moduleName || "This module has no name!"
        this.key = moduleData.key;
        this.chapterCount = 0;
        this.chapters = {}
        for (let chapter in moduleData.chapters) {
            this.chapterCount++
            this.chapters[chapter] = new TaskTracker({
                sections: moduleData.chapters[chapter],
                chapterName: chapter,
                key: 'chapter' + this.chapterCount
            })
        }
    }
    countTasks = (history) => {
        let count = { exists: 0, done: 0 }
        for (let chapter in this.chapters) {
            count.exists += this.chapters[chapter].taskCount
            count.done += this.chapters[chapter].countCompletedTasks(history)
        }
        return count
    }
}