// TS is statically typed (c,jaba, typescript) where js is dynamically typed (Js python).

// If we use ts we need ti compile it to js Beacuse browsers don't understand ts.

// tsc --init     This will create typescript config

// in ts config uncomment - "rootDir": "./src",  "outDir": "./dist","removeComments": true, "noEmitOnError": true, 

// now just type tsc in the terminal it will complie all files.

// In typescript when define and decalre on 1 line, ts automatically get the type (No need to specify)
// if we dont assign a value it will be a any type.

let x : number = 123;
let y = 456;
let a;



// Function
function add(n1: number, n2: number) : number{   //last number here tells about the return type.
    return n1 + n2;
}

console.log(add(1, 4))

// !if our function return nothing we can just put return type as void
function adding(n1: number, n2: number) : void{  
    console.log(adding(4,6));
    
}

// Array

let numbes: number[] = [1, 4, 6];   //Cannot add string or any other type here.
let number = [1, 4 , 6]         //if we dont specify it will auomatically get the relevant type.


//Tuple
let user :[number, string] = [1, "Musarraf"];



//Extra functions with union
function kgToLbs(weight: number | string) :number {
    if (typeof weight === "number"){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2;
    }
}


// Interface 
interface Person{
    first: string;
    last: string;
    [key: string]: any;
}


const person: Person = {
    first: "jeff",
    last: "Delaney"
}

const person2: Person = {
    first: "jeff",
    last: "Delaney",
    fast :true
}
