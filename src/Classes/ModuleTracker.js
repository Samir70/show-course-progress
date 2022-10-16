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
}