class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person1 = new Person("Alice", 30);
  console.log(person1.name); // Output: Alice
  console.log(person1.age);  // Output: 30
  
  const person2 = new Person("Bob", 25);
  console.log(person2.name); // Output: Bob
  console.log(person2.age);  // Output: 25