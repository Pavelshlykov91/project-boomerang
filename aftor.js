var readlineSync = require('readline-sync');
//const { Model } = require("sequelize");

// Wait for user's response.
function after() {
  let arr = [];
  var userName = readlineSync.question('May I have your name? ');

  //console.log('Hi ' + userName + '!');
  const animals = ['🦄', '🦞', '🦨', '🐺', '🤖'],
    index = readlineSync.keyInSelect(animals, 'Which animal?');
  console.log('Ok, ' + animals[index] + ' goes to your room.');
  //await Model.bulkCreate([userName ])
  arr.push(userName);
  arr.push(animals[index]);
  //console.log(arr);
  return arr;
}

let funk = after();
//console.log(funk,'0000');
module.exports = funk;
