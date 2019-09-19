// const user = {
//     name: "Hemanth kumar",
//     nickname : "heman",
//     age: 28,
//     nationality: "Indian",
//     gender: "Man",
//     languages: ["Indian","Danish","Swedish","french"],
//     education: "Bachelor's",
//     ismarried: true,
//     friends :{
//         bestFriends:["kiran","praveen"],
//         acquaintences:["arun","raju"]
//     }
// }



// const isGreetedFormally = true;

// let key;
// if(isGreetedFormally){
//    key="name";
// }else{
//   key="nickname";
// }

// console.log(`hello,${user["key"]}`);
// console.log(user.name);
// delete user.age;

//  console.log(user["friends"]["acquaintences"]);

//  console.log(user.friends.acquaintences);

//  console.log(`${user["friends"]["acquaintences"]}`);

//  console.log(user.languages[user.languages.length-1]);


const user1 = {
    name: "Hemanth kumar",
    nickname : "heman",
    age: 28,
    nationality: "Indian",
    gender: "Man",
    languages: ["Indian","Danish","Swedish","ruby","french"],
    education: "Bachelor's",
    ismarried: true,
    friends :{
        bestFriends:["kiran","praveen"],
        acquaintences:["arun","raju"]
    }
}

const user2 = {
    name:  " kumar",
    nickname : "heman",
    age: 29,
    nationality: "danish",
    gender: "Man",
    languages: ["Danish","python", "Swedish","french"],
    education: "Masters",
    ismarried: false,
    friends :{
        bestFriends:["kiran","praveen"],
        acquaintences:["arun","raju"]
    }
}

const user3 = {
    name:  "sarath",
    nickname : "saru",
    age: 29,
    nationality: "indian",
    gender: "Man",
    languages: ["Indian","Danish","java","Swedish","french"],
    education: "Masters",
    ismarried: false,
    friends :{
        bestFriends:["kiran","mownika"],
        acquaintences:["james","raju"]
    }
}

// const users= [user1,user2,user3];
// let sum=0;
// for(let i=0;i<users.length;i++){
//     console.log(users[i].name);
//     console.log(users[i].age);
//     sum += users[i].age;
    
// }

// const average = sum/users.length;
// console.log(average);


const users= [user1,user2,user3];
let x=[];
for(let i=0;i<users.length;i++){
        x =x.concat(users[i].languages);   
}
const mySet = new set(x);
console.log(mySet);

