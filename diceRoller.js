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

// Recreated as a Constructor
function DiceRoller (rolls, sides){
  this.rolls = rolls;
  this.sides = sides;
  this.hand = function(){
    var output = [];
    if (this.sides === undefined){
      this.sides = 6;
    }
    for (var i = 0; i < this.rolls; i++){
    output.push(Math.floor(Math.random() * this.sides) + 1);
  }
  return output;
  };
}

var game = new DiceRoller();
console.log(game.hand());

var game1 = new DiceRoller(5, 12);
console.log(game1.hand());

var game2 = new DiceRoller(7);
console.log(game2.hand());

// Recreated as a Contructor that can be reinstantiated.  Built off a real-world object that can be re-rolled.
// Behavior changes state internal to the object.

function Dice (diceCount, sides){
  this.roll = function(diceCount, sides){
    this.hand = [];
    if (sides === undefined){sides = 6;}
    for (var i = 0; i < diceCount; i++){
      this.hand.push(Math.floor(Math.random() * sides) + 1);
    }
  };
}

var game = new Dice();
console.log(game.hand);
game.roll(4);
console.log(game.hand);
game.roll(6);
console.log(game.hand);