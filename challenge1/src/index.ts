// INSTRUCTIONS:

import { CallBack } from "csvtojson/v2/Converter";

// Replace unknown type with the correct type
let numberOfDishes: number = 50;

let favoriteSnack: string = "cake";

const ingredients: string[] = [
  "butter",
  "flour",
  "baking powder",
  "sugar",
  "eggs",
  "vanilla",
  "salt",
];

// The object is missing a value. Fill in the missing value with drinks of your choice.
const menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: ['coke', 'sprite'],
};

interface Strawberry {
  name: string;
  color: string;
  sweetness: number;
}

const strawberry = {
  name: "Strawberry",
  color: "red",
  sweetness: 80,
};

// Correctly annotate this function parameter
function eatFruit(fruit:Strawberry): void {
  if (fruit.name === "Strawberry") {
    console.log("I love Strawberry!");
  }
  console.log("Fruit is very tasty.");
}

eatFruit(strawberry);

// Correctly annotate the fruitList and transformFunction parameters
function mapFruit(fruitList: string[], transformFunction:(fruitName: string) => string): string[] {
  return fruitList.map(transformFunction);''
}

const fruitList = ["Apple", "Banana", "Orange"];

// Annotate the fruitName function parameter
function bakeFruit(fruitName: string): string {
  return `Baked ${fruitName}`;
}

const bakedFruit = mapFruit(fruitList, bakeFruit);
