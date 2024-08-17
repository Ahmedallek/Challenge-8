function even(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evennumbers = even(numbers);

console.log(evennumbers);
