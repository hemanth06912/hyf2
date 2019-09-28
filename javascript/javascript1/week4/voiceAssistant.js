const list = {
    name : " ",
    todos: [],
    date : " ",
    dish : " "
};
let sum = 0;

function getReply(command){

    if(command.includes("Hello my name is Hemanth")){
    const spCommand = command.split(" ")
    const slice = spCommand.slice(-1);
    list.name = slice;
    return `Nice to meet you ${list.name} `;
    }else if(command.includes("What is my name?")){
        return `Your name is ${list.name}`;
    }else if(command.includes("Add fishing to my todo")){
         spCommand = command.split(" ")
         todo = spCommand.slice(1,2);
         list.todos = todo;
        return `${todo} added to your todo`;
    }
    else if(command.includes("Add singing in the shower to my todo")){
        spCommand = command.split(" ")
        todo = spCommand.slice(1,2);
        list.todos.push(todo);
       return `${todo} added to your todo`;
    }else if(command.includes("Remove fishing from my todo")){
        spCommand = command.split(" ")
        todo = spCommand.slice(1,2);
        list.todos.push(todo);
        return `${todo} removed from your todo`;
    }else if(command.includes("What is on my todo?")){
        return `${list.todos[1]},${list.todos[2]} in your todo`;
    }else if(command.includes("what day is it today")){
        spCom = Date();
        spComd =spCom.split(" ")
        list.date = spComd.slice(1,4);
        return `${list.date}`;       
    }else if(command.includes("what is")){
        spCommand = command.split("");
        if(spCommand.includes("+")){
             const x = spCommand[8];
             const y = spCommand[10]; 
            return x+y;        
         };        
    }if(command.includes("My favorite dish is lasagne")){
        const spCommand = command.split(" ")
        const slice = spCommand.slice(-1);
        list.dish = slice;
        return `${list.dish} `;
    }else if(command.includes("what is your favorite dish")){
        return `Your favourite dish is ${list.dish}`;
    }else if(command.includes("Add Bike ride the 3/5/2019 to my calendar")){
        const spCommand = command.split(" ")
        const lice = spCommand.slice(4,5);
        if (typeof(lice) === "number"){
            const spSlice = lice.split("/",2);
            return spSlice;
        }    
    }
}
console.log(getReply("Hello my name is Hemanth"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("what day is it today"));
console.log(getReply("what is 3+3"));
console.log(getReply("My favorite dish is lasagne"));
console.log(getReply("what is your favorite dish"));
console.log(getReply("Add Bike ride the 3/5/2019 to my calendar"))


// const list = {
//     name: '',
//     todosList: [],
//     day: '',
//     favoriteDish: '',
//     myCalendar: []
// };

// function getReply(command) {
//     if(command.includes('hello my name is hemanth')) {
//     //    const commandArray = command.split(" ");
//     //     const name = commandArray[commandArray.length - 1];
//     //     list.name = name;
//         return `nice to meet you ${list.name}`;
//     } else if(command.includes('what is my name?')){
//        return `Your name is ${list.name}`;
//      } 
//     }