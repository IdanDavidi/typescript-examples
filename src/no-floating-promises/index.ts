import { addNumberFromAPI, insertNumbersToDB } from "./utils";

async function foo() {
  const numbers: number[] = [];

  addNumberFromAPI(numbers);
  insertNumbersToDB(numbers);
}

async function runFooMultipleTimes() {
  console.log("=====================================");
  for (let i = 0; i <= 10; ++i) {
    await foo();
  }
}

runFooMultipleTimes();
