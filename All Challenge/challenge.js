`use strict`;
/*Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////
/*Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
  studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
  Odd of victory Bayern Munich: 1.33
  Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them
  (except for "draw"). Hint: Note how the odds and the game objects have the
  same property names �
  4. Bonus: Create an object called 'scorers' which contains the names of the
  players who scored as properties, and the number of goals as the value. In this
  game, it will look like this:
  {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
  }*/
const goalScorer = game.scored;
console.log(goalScorer);
for (const [i, value] of goalScorer.entries()) {
  console.log(`Goal ${i + 1}: ${value}`);
}
const property = Object.values(game.odds);
console.log(property);
let sum = 0;
let avg = 0;
for (const eachProperty of property) {
  sum += eachProperty;
  avg = sum / property.length;
}
console.log(sum, avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`odds for ${teamStr}: ${odd}`);
}

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
// const teamOneOdd = game.odds.team1;
// const teamTwoOdd = game.odds.team2;
// const teamDrawOdd = game.odds.x;

// console.log(teamOneOdd, teamTwoOdd, teamDrawOdd);
// console.log(`odds for victory ${game.team1}: ${teamOneOdd}`);
// console.log(`odds for Draw: ${teamDrawOdd}`);
// console.log(`odds for victory ${game.team2}: ${teamTwoOdd}`);
// // for (const [team1, team2, odds] of gameOdd) {
//   console.log(team1, team2, odds);
// }
// for (const { i, value } of gameOdd) {
//   console.log(i, value);
// }
/*
//coding challenge #1
//.1)
const [players1, players2] = game.players;
console.log(players1, players2);
//.2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);
//.3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//.4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//.5
// const team1 = [game.odds.team1];
// const draw = [game.odds.x];
// const team2 = [game.odds.team2];

//a simple way could have been
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//.6
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} were scored`);
};
printGoals(...game.scored);

//.7
team1 < team2 && console.log(`Team 1 is likely to win`);
team1 > team2 && console.log(`Team 2 is likely to win`);*/
