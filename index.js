//property shorthand

let name = 'DSA';
let authour = 'Satish Ganesh';
let noOfPages = 360;
let price = 653.23;
let inStock = 20;


let book1 =  {
    name : name,
    authour:authour,
    noOfPages:noOfPages,
    price: price,
    inStock:inStock

}

let book2 = {

    name,
    authour,
    noOfPages,
    price,
    inStock
}

console.log(book1);
console.log(book2);