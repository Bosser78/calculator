// Function for calculating grades 
class Student {
    constructor() {
        this.name = "";
        this.midterm = 0;
        this.final = 0;
    }

    // Method สำหรับรับค่าจากหน้าเว็บ
    setStudent(n, m, f) {
        this.name = n;
        this.midterm = parseFloat(m);
        this.final = parseFloat(f);
    }

    // Method สำหรับคำนวณและให้ค่าเกรด
    grade() {
        let total = this.midterm + this.final;
        let grade;

        if (total >= 80) {
            grade = '4';
        } else if (total >= 70) {
            grade = '3';
        } else if (total >= 60) {
            grade = '2';
        } else if (total >= 50) {
            grade = '1';
        } else {
            grade = '0';
        }

        return grade;
    }

    // Method สำหรับแสดงชื่อ-สกุล คะแนนกลางภาค คะแนนปลายภาค คะแนนรวม และเกรดบนหน้าเว็บ
    showStudent() {
        const total = this.midterm + this.final;
        const studentGrade = this.grade();

        return `
            <br>
            NAME is ${this.name}<br>
            Score sum is ${total}<br>
            Your grade is ${studentGrade}  
        `;
    }
}

const calculate = () => {
    // Getting input from user
    let name = document.querySelector("#name").value; 
    let midtermScore = document.querySelector("#scoremid").value; 
    let finalScore = document.querySelector("#scorelast").value; 

    // Creating a new student object
    let student = new Student();

    // Setting student's data
    student.setStudent(name, midtermScore, finalScore);

    // Checking if all fields are filled
    if (!name || !midtermScore || !finalScore) {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields"; 
    } else {
        // Showing student's data
        document.querySelector("#showdata").innerHTML = student.showStudent();
    }
};
