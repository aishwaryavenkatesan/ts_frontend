export class Component1Model {
  id: number;
  name: string;
  uni_name: string;
  age: number;
  description: string;

  constructor(
    id: number,
    name: string,
    uni_name: string,
    age: number,
    description: string
  ) {
    this.name = name;
    this.uni_name = uni_name;
    this.age = age;
    this.description = description;
    this.id = id;
  }
}
