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