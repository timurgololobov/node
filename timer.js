// Задание 1: сначала отработают Promise(в задании нет в промисах реализация конструкторов)
// потом отработают SetTimout

// Задание 2
//Введите дату YYYY-MM-DD, например node timer.js 2025-12-06
const EventEmitter = require("events");
const emitter = new EventEmitter();

const dateInput = process.argv.slice(2);
const updateTimer = (dI) => {
  future = Date.parse(dI);
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;
  return [diff, s, m, h, d];
};

const run = async () => {
  const [diff, s, m, h, d] = updateTimer(dateInput);
  if (diff <= 0) {
    emitter.emit("theEnd");
  } else {
    emitter.emit("timer", s, m, h, d);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await run();
};
class TimeNow {
  static left(s, m, h, d) {
    console.clear();
    console.log(`Осталось: ${d} дней ${h} часов ${m} минут ${s} секунд`);
  }
  static end() {
    console.log("СТОП!");
  }
}
emitter.on("timer", TimeNow.left);
emitter.on("theEnd", TimeNow.end);
run();
