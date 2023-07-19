## tolimesnes uzduotys sprenciam komitindami su git

```javascript
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
```

1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.

2. Naudojant Array.prototype.filter grazinti visas moteris jaunesnes nei 35 metai.

3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

   3.1 Naudojant Array.prototype.filter atrinkti visus žmones kurie turi mašinas.

4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.

   4.1 Naudojant Array.prototype.filter atrinkti visus susituokusius žmones.

5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

   5.1 Naudojant Array.prototype.map grazinti naujame masyve visų vairuojančių žmonių lytį.

6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
   suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income

8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'
   pirma sukuriam nauja savybe i objekta 'salary'
   istrinti income

9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės

10. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą kur savybės name ir surname būtų pakeistos viena savybe - fullname
