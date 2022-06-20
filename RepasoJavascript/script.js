

// crear variables en javascript 

const list = []
const anotherList = list.concat(157)
console.log(list[1]);  
console.log(anotherList);

const persona = {
    name: 'Edgar',
    twitter: '@edrian',
    age: 18,
    isDeveloper: true,
    emails: ['edgar@gmail.com','edrian@hotmail.com']
}


const sumar = (a, b) =>{
    console.log(a,b);
    return a + b
}

console.log(sumar(1,3)); 


function restar (a,b){
    return a-b
} 