// Напишите программу для вывода в консоль простых чисел, чтобы они попадали в указанный диапазон включительно.
// При этом числа должны окрашиваться в цвета по принципу светофора:
// первое число выводится зелёным цветом;
// второе — жёлтым; yellow
// третье — красным. red
// Диапазон, куда попадут числа, указывается при запуске программы.
// Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале красным цветом.
// Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и завершите программу.
import colors from "colors";

let x = process.argv[2];
const y = process.argv[3];
let output = [];
let countNumber = 0;
if (isNaN(x) || !isFinite(x) || isNaN(y) || !isFinite(y)) {
  console.log(
    colors.red(
      "Ошибка! Введите диапазон чисел в аргументы программы, например node index.js 0 100"
    )
  );
  process.exitCode = 0;
}
function isPrime(num) {
  let i = 2;
  if (num <= 2) {
    return false;
  }
  while (i <= num / 2) {
    if (num % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}
function varColors(num, z) {
  switch (z) {
    case 1:
      z = 2;
      return colors.green(num);
    case 2:
      z = 3;
      return colors.yellow(num);
    case 0:
      z = 1;
      return colors.red(num);
    default:
      return "Ошибка";
  }
}
while (x < y) {
  x++;
  if (isPrime(x)) {
    countNumber++;
    output.push(`${varColors(x, countNumber % 3)}`);
  }
}
if (countNumber == 0) {
  console.log(colors.red("Простых чисел в диапазоне нет"));
} else {
  console.log(output.join("; "));
}
