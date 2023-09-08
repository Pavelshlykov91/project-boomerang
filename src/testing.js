// var keypress = require("keypress");

// // make `process.stdin` begin emitting "mousepress" (and "keypress") events
// keypress(process.stdin);
// // you must enable the mouse events before they will begin firing
// keypress.enableMouse(process.stdout);
// process.stdin.on("mousepress", function (info) {
//   console.log('got "mousepress" event at %d x %d', info.x, info.y);
// });
// process.on("exit", function () {
//   // disable mouse on exit, so that the state
//   // is back to normal for the terminal
//   keypress.disableMouse(process.stdout);
// });
// console.log("проверка");
const keypress = require("keypress");

// Включение обработки событий нажатия клавиш
keypress(process.stdin);

// Функция обработки события нажатия клавиши
function handleKeyPress(ch, key) {
  if (key && key.ctrl && key.name === "c") {
    // Если нажата комбинация Ctrl+C, завершаем процесс
    process.exit();
  } else {
    // Выводим сообщение с нажатой клавишей
    console.log(`Нажата клавиша: ${ch}`);
  }
}

// Добавление обработчика события нажатия клавиши
process.stdin.on("keypress", handleKeyPress);

// Включение режима чтения ввода с терминала
process.stdin.setRawMode(true);
process.stdin.resume();
