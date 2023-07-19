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
