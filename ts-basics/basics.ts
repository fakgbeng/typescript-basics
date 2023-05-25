// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// Type Aliases
type Person = {
  name: string;
  age: number;
};
let person: Person;
person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type Inference

let course = "React - The Complete Guide";

// course = 12341;

// Union Type
let courseDetails: string | number = "React - The Complete Guide";

courseDetails = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}
// function add(a: number, b: number): number | string {
//   return a + b;
// }

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

stringArray[0].split("");
// updatedArray[0].split("");
