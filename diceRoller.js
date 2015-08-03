// return a random number between 1 and 6
function diceRoller(){
  return Math.floor(Math.random() * 6) + 1;
}

console.log(diceRoller());

// return an array of random numbers between 1 and 6 where the amount of rolls is given as an argument
function diceRollerPlus(rolls){
  var output = [];
  for (var i = 0; i < rolls; i++){
    output.push(Math.floor(Math.random() * 6) + 1);
  }
  return output;
}

console.log(diceRollerPlus(3));

// return an array of random numbers between one and a number that you specify as an argument for a given number of rolls specified in another argument.
function diceRollerPremium(rolls, maxNumber){
  var output = [];
  for (var i = 0; i < rolls; i++){
    output.push(Math.floor(Math.random() * maxNumber) + 1);
  }
  return output;
}

console.log(diceRollerPremium(3, 11));


// same as Premium, but sets max-range to 6 if maxNumber argument is omitted.
function diceRollerEnterprise(rolls, maxNumber){
  var output = [];
  if (maxNumber === undefined){
    maxNumber = 6;
  }
  for (var i = 0; i < rolls; i++){
    output.push(Math.floor(Math.random() * maxNumber) + 1);
  }
  return output;
}

console.log(diceRollerEnterprise(5 )); // Take note of the space in the second argument.
console.log(diceRollerEnterprise(5, 10));