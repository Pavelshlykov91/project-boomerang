// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 30;
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }
  moveLeft2() {
    // Идём влево.
    this.position -= 2;
  }
  moveLeft3() {
    // Идём влево.
    this.position -= 3;
  }
  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
