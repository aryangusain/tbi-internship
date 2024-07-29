
# JavaScript Basics

JavaScript is a programming language used to add interactivity to an HTML page and make a website dynamic.

## Data Types

- **Number**: 16, 7.5, etc.
- **String**: "Red"
- **Boolean**: true, false
- **Object**: `person = {fname: "Aryan", lname: "Gusain"}`
- **Array**: `[12, "Yellow", true]`
- **Null**
- **Undefined**: variable not assigned a value

## Variables

It is a container for a value.

Example:
```javascript
let name = "Aryan";
```

- var: var can be redeclared multiple times.
- let: let can be declared only once.
- const: used for variables whose value must not change.


## Functions

A JS function is a block of code used to perform a particular task. It improves reusability and readability.

Different ways of writing functions:

```javascript
function square(num) {
    return num * num;
}
```
```javascript
const square = function(num) {
     return num * num;
}
```
```javascript
const square = (num) => {
     return num * num;
}
```

## Control Statements

used to change the flow of control in a program.

- **if-else**: 

```javascript
let marks = 50;
if(marks > 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

- **switch**:

```javascript
let val = 2;
switch(val) {
    case 1: 
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("0");
}
```

## Loops

used to repeat a set of statements based on a condition.

- **for**:
```javascript
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```

- **while**: 
```javascript
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```

- **do-while**:

```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 10);
```