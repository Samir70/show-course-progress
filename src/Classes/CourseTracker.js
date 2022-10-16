export class CourseTracker {
    constructor(courseData = {}) {
        this.courseName = courseData.courseName || "This course has no name!"
    }
}