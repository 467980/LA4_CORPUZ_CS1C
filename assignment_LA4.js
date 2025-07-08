// start in let to declare the variable"customerQueue"It an array that stores the list of customers waiting for service
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

//display the initial queue in the console so you can see who's in line
console.log("Initial Queue:", customerQueue);

//using prompt the is browser that gonna pop up on the top of your screen ask a new customer to enter their name
let newCustomer = prompt("Enter your name:");

//use a .push to add the name of new customer
customerQueue.push(newCustomer);

//and alert to tell the new customer their number in line
alert(`Hello ${newCustomer}, your number is ${customerQueue.length}`);

//the updated queue in the console to see the new list
console.log("Updated Queue after adding:", customerQueue);

// Ask the customer service representative to enter a number to be serviced
let serviceNumber = parseInt(prompt("Enter the number to be serviced:"));
// if the entered number is valid (inside the range of the queue).
if (serviceNumber >= 1 && serviceNumber <= customerQueue.length) {
//get the name of the customer who will be serviced
  let customerName = customerQueue[serviceNumber - 1];

//Show an alert saying which customer is being serviced now
  alert(`Now servicing: ${customerName}`);
//Remove that customer from the queue since they are now being helped
  customerQueue.splice(serviceNumber - 1, 1);
//Display the updated queue in the console to show who is left
  console.log("Updated Queue after servicing:", customerQueue);
} else {
//If the number is not valid alert to say no one was serviced
  alert("Invalid number! No customer serviced.");
}
