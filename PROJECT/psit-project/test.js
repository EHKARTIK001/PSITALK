//TEST : Student with universityId
const universityId = '2433074';
const url1 = `http://localhost:8000/student/${universityId}`;

fetch(url1)
  .then(response => response.json())  
  .then(data => {
    console.log('Student Data:', data); 
  })
  .catch(error => {
    console.error('Error:', error);  
  });




  //TEST : Faculty with section
  const section="PSITCHE-BBA-I-A"
  const url2 = `http://localhost:8000/faculty/${section}`;

  fetch(url2)
    .then(response => response.json())  
    .then(data => {
      console.log(`Faculty Data for section ${section}:`, data); 
    })
    .catch(error => {
      console.error('Error:', error);  
    });


      //TEST : Faculty with section
  const facultyId="PSITCHE-BBA-I-A"
  const url3 = `http://localhost:8000/faculty/${facultyId}`;

  fetch(url2)
    .then(response => response.json())  
    .then(data => {
      console.log(`Faculty Data for faculty Id ${facultyId}:`, data); 
    })
    .catch(error => {
      console.error('Error:', error);  
    });

