let score = 88 ; 
if(score>100||score<0){
  console.log("incorrect score");
}
else if(score > 85){
  console.log("Excellent");
}
else if (score>75){
  console.log("Very Good");
}
else if(score>65){
  console.log("good");
}
else{
  console.log("you failed");
  
}
//
let drinkcode = 3 ; 
switch(drinkcode) {
  case 1 : {
    console.log("you ordered tea pay 20LE");
    break ; 
  }
  case 2 : {
    console.log("you ordered coffee pay 25LE");
    break ;
  }
  case 3 : {
    console.log("you ordered juice pay 30LE");
    break;
  }
  default : {
    console.log("invalid code");
  }

}
//
let distance = 1000;
let total = 0;
for (let i = 1 ; i<=7 ; i++){
  let hard = "" ;
  distance = distance +(i-1)*500;
  total+=distance
  if(distance>=3000){
    hard = "hard day"
  }
  console.log(`you ran ${distance} meters today` + hard);
}
console.log(`you ran ${total} meters this week`);
//
let savings = 0 ; 
let i = 1 ; 
while (savings < 1000){
  savings+=150 ; 
  console.log(`week ${i} : you have saved ${savings}`);
  i++;
}
console.log(`you have saved ${savings} in ${i} weeks`);
//
const correctPin = "1234";
let balance = 2000;

let pinAttempts = ["1111", "2580", "1234"];

let operation = "withdraw";
let amount = 500;

let attempts = 0;
let enteredPin;

do {
  enteredPin = pinAttempts[attempts];
  attempts++;

  if (enteredPin !== correctPin) {
    console.log("Wrong PIN, " + (3 - attempts) + " attempts left");
  }
} while (enteredPin !== correctPin && attempts < 3);

if (enteredPin === correctPin) {
  console.log("Welcome");

  switch (operation) {
    case "balance":
      console.log("Your balance: " + balance + " EGP");
      break;
    case "withdraw":
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Withdrew " + amount + " EGP, current balance: " + balance + " EGP");
      }
      break;
    case "deposit":
      balance += amount;
      console.log("Deposited " + amount + " EGP, current balance: " + balance + " EGP");
      break;
    default:
      console.log("Unknown operation");
  }
} else {
  console.log("Card blocked");
}

let operations = ["balance", "withdraw", "deposit"];

for (let i = 0; i < operations.length; i++) {
  switch (operations[i]) {
    case "balance":
      console.log("Your balance: " + balance + " EGP");
      break;
    case "withdraw":
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Withdrew " + amount + " EGP, current balance: " + balance + " EGP");
      }
      break;
    case "deposit":
      balance += amount;
      console.log("Deposited " + amount + " EGP, current balance: " + balance + " EGP");
      break;
    default:
      console.log("Unknown operation");
  }
}

