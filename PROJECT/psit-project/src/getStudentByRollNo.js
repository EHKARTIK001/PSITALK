const fs = require('fs').promises;

const filePath = "../data/students.json";

async function getStudentsData() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing JSON file:', err);
    }
}

async function getStudentByRollNo(rollNo) {
    const data = await getStudentsData();
    if (!data) {
        return 'No data found.';
    }
    
    
    const student = data.find(student => student.UniversityRollNo == rollNo);
    return student || 'Student not found';
}





module.exports = {
    getStudentByRollNo
};
