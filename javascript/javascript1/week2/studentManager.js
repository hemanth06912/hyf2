 const class07Students = [];
 function addStudentToClass(studentName){
     if (class07Students.includes(studentName,0)){
         return "student " + studentName + " is already in class ";
     }else if (studentName == "queen"){
        class07Students.push(studentName);
     }else if (class07Students.length>6){
         return "cannot add more students to class ";
     }else if (studentName == " "){
        return "You cannot add empty string to a class  ";
        }else   class07Students.push(studentName);
       
}

console.log(addStudentToClass("queen"));
console.log(addStudentToClass("hemanth"));
console.log(addStudentToClass("hemanth"));
console.log(class07Students);
console.log(class07Students.length);
    

function getNumberOfStudents(){
    console.log(class07Students.length);
}




