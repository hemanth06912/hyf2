const list = {
    name : " ",
    todos: [],
    date : " ",
    dish : " "
};

function getReply(command){
    if(command.includes("Hello my name is Hemanth")){
    const spCommand = command.split(" ");
    const slice = spCommand.slice(-1);
    list.name = slice;
    return `Nice to meet you ${list.name} `;
    }else if(command.includes("What is my name?")){
        return `Your name is ${list.name}`;
    }else if(command.includes("Add fishing to my todo")){
         spCommand = command.split(" ");
         todo = spCommand.slice(1,2);
         list.todos = todo;
        return `${todo} added to your todo`;
    }
    else if(command.includes("Add singing in the shower to my todo")){
        spCommand = command.split(" ");
        todo = spCommand.slice(1,2);
        list.todos.push(todo);
       return `${todo} added to your todo`;
    }
    else if(command.includes("Remove fishing from my todo")){
        spCommand = command.split(" ");
        todo = spCommand.slice(1,2);
        list.todos.push(todo);
        return `${todo} removed from your todo`;
    }else if(command.includes("What is on my todo?")){
        return `${list.todos[1]},${list.todos[2]} in your todo`;
    }else if(command.includes("what day is it today")){
        spCom = Date();
        spComd =spCom.split(" ");
        list.date = spComd.slice(1,4);
        return `${list.date}`;       
    }else if(command.includes("what is") && command.includes ("+")||command.includes ("-")||command.includes ("*")||command.includes ("/")
     ||command.includes ("%")){
        const calculate = command.slice (8, command.length);
        const result = eval (calculate);
        return result;
    }else if (command.includes("My favorite dish is")){
        const spCommand = command.split(" ");
        const favorite = spCommand.slice(-1);
        list.dish = favorite;
        return `${list.dish}`;
    }else if (command.includes("what is your favorite dish")){
        return `Your favourite dish is ${list.dish}`;
    }
    if(command.includes("to my calendar")){
    const spCommand = command.split(" ");
    const date = spCommand.slice(4,5);
    return `This date ${date} added to the calendar`;
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
console.log(getReply('Add Bike ride the 3/5/2019 to my calendar'));

