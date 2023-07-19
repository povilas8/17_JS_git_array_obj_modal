export function printMen(arr) {
  // 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
  arr.forEach((personObj) => {
    // console.log('personObj.sex ===', personObj.sex);
    // patikrinti ar vyras
    if (personObj.sex === 'male') {
      // jei taip spausdinti
      console.log(personObj);
    }
    // jei ne nieko
  });
}

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.
export function printDriverGender(arr) {
  // sukkti cikla
  arr.forEach((personObj) => {
    // patikrinti ar asmuo vairuoja
    if (personObj.hasCar === true) {
      // jei taip atspausdinti jo lyti
      console.log(personObj.name, 'vairuoja ===', personObj.sex);
    }
  });
}
