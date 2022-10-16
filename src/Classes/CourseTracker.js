export class CourseTracker {
    constructor(courseData = {}) {
        this.courseName = courseData.courseName || "This course has no name!"
        this.modules = courseData.modules === undefined ?
            "This course has no modules!" : Object.keys(courseData.modules)
    }
}