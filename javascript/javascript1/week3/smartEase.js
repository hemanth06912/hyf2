// Smart-ease

const notes = [];
function addNote(content,id){
    if (typeof content == "string" && typeof id == "number"){
        notes.push({content,id});
        return notes;
    }else
    return "please give correct information.";
      
}

 addNote("information",2);
console.log(addNote(2,"information"));
addNote(8,"info");
addNote("information",6);


// Get the notes

function getNoteFromId(id){
    for(i=0;i<notes.length;i++){
        if (id== notes[i].id){
            return notes[i];
        } else if ( typeof id != "number" ||  id ==" " ){
            return "please enter correct information";
        }   
    }
}

console.log(getNoteFromId(2));
console.log(getNoteFromId('yh'));
console.log(getNoteFromId());
console.log(notes);

function logOutNotesFormatted(id){
    for(i=0;i<notes.length;i++){
        if(id==notes[i].id){
            return "The note with id: " + notes[i].id + 
            ",has the following note text: " + notes[i].content + ".";
        } else
        return "please enter correct information.";
    }

}

console.log(logOutNotesFormatted(2));