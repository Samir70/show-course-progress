export class ModuleTracker {
    constructor(moduleData = {}) {
        this.moduleName = moduleData.moduleName || "This module has no name!"
        this.key = moduleData.key;
        this.chapters = moduleData.chapters === undefined ? 
            "This module has no chapters!" :
            Object.keys(moduleData.chapters)
    }
}