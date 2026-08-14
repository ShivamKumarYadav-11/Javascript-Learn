/*
<-----Note POints ----->

1- primitive data type ->  call by value [ Boolean, Number, String, Null, Undefined, Symbole, BigInt ]

2- primitive data type use Stack ( it contains value as a copy)

3- Non primtive (Refrence) -> call by Refrence [ Array, Object, Function 

4- Non primitive data type use Heap ( it contains value as a refrence)
*/


// stack [ call by value, it's means only give a value not reference]
let userName = "shivam kumar yadav"

let anotherUserName = userName;

anotherUserName = "sky"

console.log(anotherUserName);
console.log(userName);



// Heap [call by reference]
let userOne = {
    email:"sky@gmail.com",
    id:400
}

let userTwo = userOne

userTwo.email = "shivam@gmail.com"

console.log(userTwo);
console.log(userOne);


/*
userOne ────┐
            ↓
        ┌──────────────────────┐
        │ email: "sky@gmail.com"│
        │ id: 400              │
        └──────────────────────┘
            ↑
userTwo ────┘
*/