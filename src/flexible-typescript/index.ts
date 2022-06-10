interface Person {
  name: string;
  age: number;
}

interface Pet {
  name: string;
  kind: string;
}

function logModelName(model: any) {
  console.log(model.name.toLowerCase());
}
