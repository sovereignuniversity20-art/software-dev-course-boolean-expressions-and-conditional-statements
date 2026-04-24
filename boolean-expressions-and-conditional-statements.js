/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasSword = false;
const hasRifle = true;

console.log("As you continue through the mountains, you encounter a family of lions. Do you 'fight' or 'run'?");
const lionChoice = readline.question("What do you do?");

if (lionChoice === "fight" && (!hasSword || hasRifle)) {
  console.log("You bravery paid off and you survive another day!"); 
} else if (lionChoice === "fight" && !hasSword && !hasRifle) {
  console.log("You are brave but unprepared for this match, and the lions get the best of you.");
} else if (lionChoice === "run" && hasTorch) {
  console.log("Good thinking! Use your torch to scare them away and use let your tourch guide you to safety.");
} else if (lionChoice === "run" && !hasTorch) {
  console.log("You are correct to run, but the darkness makes it easy for the lions to catch you.");
} else if (lionChoice === "run" && hasMap) {
  console.log("Try to use your map to find a safe path away from the lions, but beware they see well in the dark.");
} else if (lionChoice === "run" && !hasMap) {
  console.log("Run as fast as you can, but without a map, it may be hard to avoid the lions.");
} else if (lionChoice === "fight" && hasMap && hasRifle || hasSword) {    
  console.log("Your preparedness has paid off! You manage to fend off the lions and survive with little to no harm!");
}

console.log("Hungry lions were no match for your bravery and preparedness, but you are now tasked with finding food. Do you 'hunt' or 'gather'?");
const foodChoice = readline.question("What do you do?");

if (foodChoice === "hunt" && hasRifle){
  console.log("You successfully hunt a bear providing enough meat for a the next couple of weeks.");
} else if (foodChoice === "hunt" && !hasRifle) {
  console.log("Your bare hands are no match for the beast, was this really the best choice?"); 
} else if (foodChoice === "gather" && hasMap) {
  console.log("Use your map, to figure out where a nearby berry bush is and gather some berries to eat.");
} else if (foodChoice === "gather" && !hasMap) {
  console.log("You  may be able to find food by wandering around, but without a map, you have no idea where to look and end up going in circles.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/