// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const {EOL} = require('os')
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength; 
   
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 7});
    this.boomerang = new Boomerang({ position: 1 });
    this.view = new View(this);
   
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
   
       this.track = [];
  
    this.track.push(new Array(this.trackLength).fill([]),new Array(this.trackLength).fill([]),new Array(this.trackLength).fill([]),new Array(this.trackLength).fill([]),new Array(this.trackLength).fill([]))
    
    this.track[0][this.hero.position] = this.hero.skin;
    this.track[0][this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position][this.boomerang.position] = this.boomerang.skin;
       // console.log(this.track)

  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    } else if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
    }else if (this.boomerang.position === this.hero.position) {
      console.log("YOU WIN!");
      process.exit();
   }

  }

  play() {
    setInterval(() => {
      // Let's play!
      if (this.enemy.position > this.boomerang.position) {
        this.boomerang.moveRight();
       } else {
         this.boomerang.moveLeft();
       }
       this.enemy.moveLeft();
      
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 4000);
  }
}

module.exports = Game;
