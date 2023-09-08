// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const { EOL } = require("os");
const { log } = require("console");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 30 });
    this.enemy1 = new Enemy({ position: 30 });
    this.enemy2 = new Enemy({ position: 30 });
    this.enemy3 = new Enemy({ position: 30 });
    this.enemy4 = new Enemy({ position: 30 });
    this.boomerang = new Boomerang({ position: 1 });
    this.view = new View(this);
    this.track = [];
    // this.regenerateTrack(1000);
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(5); // 5 - количество строк игрового поля
    for (let i = 0; i < 5; i++) {
      this.track[i] = new Array(this.trackLength).fill(" ");
      // this.track[i].push(EOL);
      this.track[i].push(EOL);
    }
    // this.track[0] = new Array(this.trackLength).fill(" ");
    // this.track[0].push(EOL);
    // this.track[1] = new Array(this.trackLength).fill(" ");
    // this.track[1].push(EOL);
    // this.track[2] = new Array(this.trackLength).fill(" ");
    // this.track[2].push(EOL);
    // this.track[3] = new Array(this.trackLength).fill(" ");
    // this.track[3].push(EOL);
    // this.track[4] = new Array(this.trackLength).fill(" ");
    // this.track[4].push(EOL);
    this.track[2][this.hero.position] = this.hero.skin;
    this.track[2][this.boomerang.position] = this.boomerang.skin;
    // for (let j = 0; j < 5; j++) {
    //   this.track[j][this.enemy.position] = this.enemy.skin;
    // }
    this.track[0][this.enemy.position] = this.enemy.skin;
    this.track[1][this.enemy1.position] = this.enemy1.skin;
    this.track[2][this.enemy2.position] = this.enemy2.skin;
    this.track[3][this.enemy3.position] = this.enemy3.skin;
    this.track[4][this.enemy4.position] = this.enemy4.skin;
    // this.track = new Array(this.trackLength).fill(" ");
    // this.track[this.hero.position] = this.hero.skin;
    // this.track[this.enemy.position] = this.enemy.skin;
    // this.track[this.boomerang.position] = this.boomerang.skin;
    // for (let j = 0; j < 4; j++) {
    //   this.track[j][this.enemy.position] = this.enemy.skin;
    // }
  }
  getHeroRow() {
    let heroRow = -1;
    for (let i = 0; i < this.track.length; i++) {
      if (this.track[i][this.hero.position] === this.hero.skin) {
        heroRow = i;
        break;
      }
    }
    return heroRow;
  }

  check() {
    let checkIndex = this.getHeroRow();
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    } else if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
    } else if (this.boomerang.position === this.hero.position) {
      console.log("YOU WIN!", checkIndex);
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
      this.enemy1.moveLeft();
      this.enemy2.moveLeft2();
      this.enemy3.moveLeft3();
      this.enemy4.moveLeft2();

      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 450);
  }
}

module.exports = Game;
