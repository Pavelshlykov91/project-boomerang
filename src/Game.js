// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

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
    this.enemy = new Enemy({ position: 30 });
    this.boomerang = new Boomerang({ position: 1 });
    this.view = new View(this);
    this.track = [];
    // this.regenerateTrack(1000);
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    } else if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
    } else if (this.boomerang.position === this.hero.position) {
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
    }, 300);
  }
}

module.exports = Game;
