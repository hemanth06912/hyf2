// Flight booking fullname function

function getFullname(firstname, surname, useFormalName) {
    if(!firstname && surname) {
        return "Enter firstname";
    }
    else if (firstname && !surname) {
        return "Enter surname";
    }
    else if (useFormalName){
        return `Lord ${firstname} ${surname}`;
    }
    else{
        return `${firstname} ${surname}`
    }
  }
  // In formal way:
 const fullname1 = getFullname("hemanth","kumar",true);
  // In informal way:
 const fullname2 = getFullname("hemanth","kumar",false);
console.log(fullname1);
console.log(fullname2);
