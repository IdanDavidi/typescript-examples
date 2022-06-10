export async function insertNumbersToDB(numbers: number[]): Promise<void> {
  await doSomething();
  console.log(numbers);
}

export async function addNumberFromAPI(numbers: number[]): Promise<void> {
  const numberFromExternalAPI = await getNumberFromExternalAPI();
  numbers.push(numberFromExternalAPI);
}

async function getNumberFromExternalAPI(): Promise<number> {
  await doSomething();
  return 1;
}

async function doSomething() {
  const sleepTime = (Math.random() * 100) % 3;
  await new Promise((resolve) => setTimeout(resolve, sleepTime));
}
