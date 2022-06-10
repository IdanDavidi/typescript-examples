async function foo() {
  const numbers = [];
  insertNumber(numbers);

  await doSomething();

  console.log(numbers[0]);
}

async function insertNumber(arr: number[]) {
  await doSomething();
  arr.push(1);
}

function runFooMultipleTimes() {
  for (let i = 0; i <= 10; ++i) {
    foo();
  }
}

async function doSomething() {
  const sleepTime = (Math.random() * 10) % 3;
  await new Promise((resolve) => setTimeout(resolve, sleepTime));
}

runFooMultipleTimes();

const a = '1';
