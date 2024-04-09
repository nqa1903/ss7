class Student {
    id: number;
    name: string;
    className: string;
    constructor(id: number, name: string, className: string) {
        this.id = id;
        this.name = name;
        this.className = className;
    }
}

let Students: Student[] = [
    new Student(1, "Anh", "A"),
    new Student(2, "Quang", "B"),
    new Student(3, "Anh Quang", "A"),
];

function filterStudentsByClass(studentArray: Student[], className: string): Student[] {
    return studentArray.filter(student => student.className === className);
}

const studentsInClassA = filterStudentsByClass(Students, "A");
console.log(studentsInClassA);
