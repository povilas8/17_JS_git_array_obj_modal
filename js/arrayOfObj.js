'use strict';
console.log('arrayOfObj.js file was loaded');

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// {
//     name: 'Jonas',
//     surname: 'Jonaitis',
//     sex: 'male',
//     age: 26,
//     income: 1200,
//     married: false,
//     hasCar: false,
//   },
console.table(people);
const skArr = [1, 4, 5];

people.forEach((personObj) => {
  if (personObj.sex === 'male') console.log('personObj ===', personObj);
});

// 2. Naudojant Array.prototype.filter grazinti visas moteris jaunesnes nei 35 metai.
function youngWomen(mainArr) {
  const atrinktiObj = mainArr.filter(
    (personObj) => personObj.sex === 'female' && personObj.age < 35
  );
  console.table(atrinktiObj);
  // grazinti
  return atrinktiObj;
}

const moterys = youngWomen(people);
console.log('moterys ===', moterys.length);
