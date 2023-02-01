const numberInput = 7;

const isItAPrime = (param: number): (boolean | number) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

const numberList: number[] = [10, 5, 18, 2, 8, 23];
const sortInput = (param: number[]): number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

type input = {
    name: string,
    age: number,
}

const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: input): string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

const ageInput: number = 15;

const isOfLegalAge = (param: (string | boolean)) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));