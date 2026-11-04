class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }

    applyGraceMarks() {
        this.grades = this.grades.map(grade =>
            grade === 48 || grade === 49 ? 50 : grade
        );
    }

    analyzeGrades() {
        const total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        const highest = this.grades.reduce(
            (max, grade) => Math.max(max, grade)
        );

        const lowest = this.grades.reduce(
            (min, grade) => Math.min(min, grade)
        );

        return {
            total,
            highest,
            lowest
        };
    }
}

const universitySystem = [];

const student1 = new Student("Rewan Ahmed", 101, [90, 85, 48, 95]);
const student2 = new Student("Ahmed Mohamed", 102, [70, 80, 65, 90]);
const student3 = new Student("Mona Ali", 103, [40, 75, 49, 60]);

const students = [student1, student2, student3];

students.forEach(student => {
    student.applyGraceMarks();
    universitySystem.push(student);
});

const successfulStudents = universitySystem.filter(student =>
    student.grades.filter(grade => grade >= 50).length === student.grades.length
);

const failedStudents = universitySystem.filter(student =>
    student.grades.filter(grade => grade < 50).length > 0
);

console.log("UNIVERSITY SYSTEM");
console.log(universitySystem);

console.log("SUCCESSFUL STUDENTS");
console.log(successfulStudents);

console.log("FAILED STUDENTS");
console.log(failedStudents);

console.log("GRADE ANALYSIS");

universitySystem.forEach(student => {
    console.log(`Student Name: ${student.name}`);
    console.log(`Student ID: ${student.id}`);
    console.log("Grade Analysis:", student.analyzeGrades());
});