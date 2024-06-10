export interface UserInterface{
    id: string;
    name: string;
    age: number;
    getMessage(): string;
}

const user: UserInterface = {
    id: '1',
    name: 'Foo',
    age: 30,
    getMessage() {
        return `${this.name} is ${this.age}`
    },
}


//define array
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let vegetables: Array<string> = ['Potato', 'Tomato'];

//array of different types, but it is a bad practice
let values: (string|number)[] = ['Apple', 2, 'Orange', 3]

//defining the empty array of numbers
let array: number[] = [];


//defining string variable
let word: string = '';