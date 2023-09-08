// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
sapce: (game) => game.hero.attack('space')
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  q: () => console.log('q'),
  w: () => console.log('w'),
  e: () => console.log('e'),
  r: () => console.log('r'),
  t: () => console.log('t'),
  y: () => console.log('y'),
};

// Какая-то функция.

function runInteractiveConsole(game) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](game);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();
