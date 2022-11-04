function app(){
console.log ("Buying.....");


let description = prompt ("Add the product's name: ");


let price = prompt ("How much is each " + description + "?");

let quantity = prompt ("And just how many " + description + "'s do you want?:");

console.log (`${description}(s)`);
console.log(`Price: $${price} each`);
console.log(`Total Ordered: ${quantity}`);

const taxPercent = 0.1125;

function subTotal  (a,b)  {return a * b};
let sub = subTotal (price,quantity);
console.log (`Subtotal: $${sub}`);

let tax = (taxPercent * price);
console.log (`Taxes:$${tax}`);


function Total (a,b) {return a + b};
let Tot = Total (tax,sub);
console.log (`Total Cost: $${Tot}`);


document.write (` <h1 style="color:firebrick">James' amazing online store</h1>`)
document.write (`<p>You ordered ${quantity}  ${description}(s) at $${price} each.</p> `);
document.write (`<p>Your subtotal is: $${sub}</p>`)
document.write (`<p>Your total after tax is: $${Tot}</P>`)


}