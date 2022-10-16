import { ModuleTracker } from "./ModuleTracker";
export class CourseTracker {
    constructor(courseData = {}) {
        this.courseName = courseData.courseName || "This course has no name!"
        this.modules = {}
        this.moduleCount = 0
        for (let module in courseData.modules) {
            // console.log('Working on module', module)
            this.moduleCount++
            this.modules[module] = new ModuleTracker({
                ...courseData.modules[module], key: 'module'+this.moduleCount
            })
        }
    }
}