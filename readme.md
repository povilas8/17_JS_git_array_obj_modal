## modal uzd

1.

```html
<fieldset>
  <legend>Modalo title</legend>
  <input type="text" placeholder="nauja modalo antraste" />
  <button id="fieldsetBtn">Pakeisti ir parodyti</button>
</fieldset>
```

paspaudimu pakeisti modalo antraste i tai kas ivesta ivesties lauke ir parodyti modala

## uzduotys su masyvu objektais

```javascript
const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];
// console.table(students);

/*
  1. Peržvelgti students masyvą, jeigu patogu susibraižyti ant lapo duoenų struktūras, kad būtų aiškiau kas kam priklauso.
  2. Peržiūrėti duomenis naršyklės konsolėje, jie pateikti naudojant console.table
  3. Pagal funkcijų aprašus implementuoti logiką ir pavaizduoti korektiška funkcijų veikimą.
    3.1 Naudoti Array.prototype metodus:
      3.1.1 - forEach
      3.1.2 - map
      3.1.3 - filter
      3.1.4 - reduce
      3.1.5 - sort
      3.1.6 - slice

  Užduotims atlikti galima patiems susigalvoti papildomas funkcijas, jas pasivadinti ir panaudoti.
  Taip pat galima ir labai skatintina naudoti jau aprašytas funkcijas kitų užduočių sprendimui. (Code reuse)
*/
```

### grazinti naujame masyve, nekeiciam orginalo:

1. visų studentų vidurkius
2. visu studentu vardus ir pavardes kaip stringus masyve.
3. visu studentu fakultetus kaip stringus masyve.
4. tik Informatikos fakulteto studentus
5. tik Chemijos fakulteto studentus
6. tik Elektros ir elektronikos fakulteto studentus
7. Informatikos fakulteto studentų vidurkius
8. Chemijos fakulteto studentų vidurkius
9. Elektros ir elektronikos fakulteto studentų vidurkius
10. tik pirmo kurso studentus
11. tik antro kurso studentus
12. tik trečio kurso studentus
13. tik ketvirto kurso studentus

## parasyti funkcija kuri

1. getStudentsFromYear(2) - grazintu visus antro kurso studentus (argumentas yra kelinto kurso studentus grazinti)
2. findStudentBySurname('Varžauskas') - grazins studento obejka su pavarde 'Varžauskas' (argumentas yra pavarde)
3. getSudentsFaculty('Varžauskas') - grazins studento obejka su pavarde 'Varžauskas' fakulta (argumentas yra pavarde)
