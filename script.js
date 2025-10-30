function myFunction(name){
    return `Hello ${name}.`;
}

console.log(myFunction("Sarah"));


function getCircumference(diameter) {
    return Math.PI * diameter;
}

function function1(){
    console.log("Statement 1");
    function2();
    console.log("Statement 3");

}

function function2(){
    console.log("Statement 2");
}

function1();

/* 
function1 first prints Statement 1, then Statement 2 after calling
function2, then Statement 3 in function1. This is because of the stack order of the call stack, where it goes down a level after
calling function2, then returns to function1 after it is done calling function2.
*/

function stackOverflow() {
    return stackOverflow2();
}

function stackOverflow2() {
    return stackOverflow1();
}