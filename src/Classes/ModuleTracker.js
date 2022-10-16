import { TaskTracker } from "./TaskTracker";
export class ModuleTracker {
    constructor(moduleData = {}) {
        this.moduleName = moduleData.moduleName || "This module has no name!"
        this.key = moduleData.key;
        this.chapters = moduleData.chapters === undefined ?
            "This module has no chapters!" :
            Object.keys(moduleData.chapters).map((c, i) => new TaskTracker({
                sections: moduleData.chapters[c], chapterName: c, key: 'chapter' + i
            }))
    }
}