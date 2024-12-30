const express = require("express")
const {getStudentByRollNo} = require("./getStudentByRollNo")
const {getCoordinatorBySection} = require("./getCoordinatorBySection")
const {getFacultyByFacultyId} = require("./getFacultyByFacultyId")

const app = express()

app.get('/student/:universityId', (req, res) => {
    let universityId = req.params.universityId;
  
    universityId = universityId.replace(/^:/, '');
  
    getStudentByRollNo(universityId)
      .then(stu => {
        console.log(stu); 
        res.json(stu);    
      })
      .catch(err => {
        console.error('Error:', err);
        res.status(500).json({ error: 'Something went wrong' });  
      });
  });
    

  app.get('/faculty/:section', (req, res) => {
    let section = req.params.section;
  
    section = section.replace(/^:/, '');


  
getCoordinatorBySection(section)
.then(coor => {
  console.log(coor); 
  res.json(coor);    
})
.catch(err => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Something went wrong' });  
});

  });



  
  app.get('/faculty/:facultyId', (req, res) => {
    let facultyId = req.params.facultyId;
  
    facultyId = facultyId.replace(/^:/, '');


  
getFacultyByFacultyId(facultyId)
.then(coor => {
  console.log(coor); 
  res.json(coor);    
})
.catch(err => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Something went wrong' });  
});

  });







app.listen(8000,()=>{
    console.log("SERVER UP ON PORT :",8000)
})