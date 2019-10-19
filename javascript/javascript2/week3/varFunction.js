// task 1:
function fun1() {
    return 'function1';
}
function fun2() {
    return 'function2';
}
function fun3() {
    return 'function3';
}

const arr = [fun1(),fun2(),fun3()];
arr.forEach(element => { 
    console.log(element);
});

// Task 2:

const constFunction= function conFunction(){
    return 'conFunction';
}

function normalFunction(){
    return constFunction();
}

console.log(normalFunction());

// Task 3:

const myObject= {
    keyFunction: ()=> {
        return 'This is object key';
    }
}

console.log(myObject.keyFunction());