// #1
let valueToReplace = 'Only when a mosquito lands on your balls and you kill it anyway, only then you become a true Samurai...';
let valueToReplaceWith = 'Only a true Samurai knows the cost of being a Samurai...';
let string = 'Only when a mosquito lands on your balls and you kill it anyway, only then you become a true Samurai... And... Only a true Samurai knows the cost of being a Samurai... ';

const myFunction = (string, valueToReplace, valueToReplaceWith) => {
    return string.replaceAll(valueToReplace, valueToReplaceWith);
}
const newString = myFunction(string, valueToReplace, valueToReplaceWith)
console.log(newString);
// კოდი გვიბრუნებს "Only a true Samurai knows the cost of being a Samurai..." ხაზს ორჯერ "And..."-მდე და მის შემდეგ.

// #2

let sentence = 'March Winds And April Showers';
const mySecondFunction = (sentence) => {
    if (typeof sentence === 'string') {
        return sentence.toUpperCase()
    } else {
        return false;
    }
}
console.log(mySecondFunction(sentence))
console.log(mySecondFunction([3,22,31]))
// შევამოწმეთ კოდი string-ის და სხვა მნიშვნელობის, ამ შემთხვევაში მაგალითად Array-ს შემთხვევაში.

// #3
const usersArray = [
    {name:'Lasha', age:30},
    {name:'Saba', age:20}
]

const myThirdFunction = (sortedArray) => {
    return usersArray.sort((a, b) => a.age - b.age)
}
console.log(myThirdFunction(usersArray))
// value.sort(compareFn)