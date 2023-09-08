// Основной файл.

// const {after} = require('./aftor')
// const aga = after()
const Game = require('./src/Game');
const Hero = require('./src/game-models/Hero');


// Инициализация игры с настройками.
const game = new Game({
  trackLength: 7,
});
// const hero = new Hero({
//   skin: aga[1]
// })



game.play();
