// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scope with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const"; 
}

// Global scope
console.log(blockVar); // Output: "I'm a global variable"
// console.log(blockLet); // Output: "I'm also global, but scoped with let"
// console.log(blockConst); // Output: "I'm a global constant"

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
