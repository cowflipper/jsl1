/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let i = 1;
while(i <= 20) {
    if(i % 2 !== 0) {
        sum += i;
    }
    i++;
}

console.log(sum)
