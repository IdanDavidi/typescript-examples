interface Person {
  name: string;
  age: number;
}

interface Pet {
  name: string;
  kind: string;
}

function logModelName(model: any) {
  console.log(model.name);
}

const pet: Pet = { name: 'Yogi', kind: 'Dog' };

logModelName(pet);

interface Plane {
  name: number;
  kind: string;
}

const plane: Plane = { name: 9, kind: 'Blackhawk' };
logModelName(plane);
