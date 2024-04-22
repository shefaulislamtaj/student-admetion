let students = [];

function addStudent() {
    document.getElementById('studentForm').style.display = 'block';
    document.getElementById('studentList').style.display = 'none';
}

function displayStudents() {
    document.getElementById('studentForm').style.display = 'none';
    document.getElementById('studentList').style.display = 'block';
    let studentUl = document.getElementById('studentUl');
    studentUl.innerHTML = '';
    students.forEach(student => {
        let li = document.createElement('li');
        li.textContent = `Roll Number: ${student.roll_number}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
        studentUl.appendChild(li);
    });
}

function submitForm() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let grade = document.getElementById('grade').value;
    let roll_number = Math.floor(Math.random() * 9000) + 1000;
    students.push({name, age, grade, roll_number});
    document.getElementById('studentForm').reset();
    alert("Student added successfully!");
}
