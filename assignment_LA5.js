//function to make simple hash key for namehash makes a number 
//so we can store name fast in hashedTable
function simpleHash(name) {
  let hash = 0;
  //add char codes of each letter to make hash unique for name
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % 10; 
  //use % 10 so hash key stays small
}

//let to declare hashedTable to store customers by hash key
//hashedTable is an object that keeps customers in key:value pair
let hashedTable = {};

//array for default customers to add first
let defaultCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

//loop to add each default customer to hashedTable using hash function
//each customer get the number from hash to find them later
defaultCustomers.forEach((name) => {
  let hashKey = simpleHash(name);
  hashedTable[hashKey] = name;
});

//show initial hashed table in console
console.log("Initial Hashed Table:", hashedTable);

//using prompt the browser ask new customer name to add to hashedTable
let newCustomer = prompt("Enter your name:");

//make hash key for new customer using same hash function
let newHashKey = simpleHash(newCustomer);

//add a new customer to hashedTable using hash key
hashedTable[newHashKey] = newCustomer;

//show new customer their number in hash table
alert(`Hello ${newCustomer}, your number is ${newHashKey}`);

//show updated hashed table with new customer in console
console.log("Updated Hashed Table after adding:", hashedTable);

//ask number to service by hash key
let serviceHash = parseInt(prompt("Enter the number to be serviced:"));

//check if customer exists at hash key
if (hashedTable[serviceHash]) {
  //show which customer is being serviced
  alert(`Now servicing: ${hashedTable[serviceHash]}`);
  //remove customer from hashedTable so they are not in line anymore
  delete hashedTable[serviceHash];
  
  console.log("Updated Hashed Table after servicing:", hashedTable);
} else {
  alert("Invalid number! No customer found.");
}
