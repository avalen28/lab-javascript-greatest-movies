/*HEllO STRANGER
Hay un par de rojos que no consigo solucionar. Me quedan los bonus por hacer pero es que la vida no me da para más.
Son las 2.30 de la mañana, ni los gatos están ya a mi lado. Me siento muy sólo y odio la industria cinematográfica, Hollywood,
los Oscars, y la reputa madre del Spielberg. Sólo quiero hacerme una pelota y llorar. Esto no lo ponía en el contrato.*/

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((element) => element.director);
  const directorsArrClean = [...new Set(directorsArr)];
  return directorsArrClean;
} //
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spilbergArr = moviesArray.filter(
    (element) => element.director === "Steven Spielberg"
  );
  const spilbergGenre = spilbergArr.filter((element) =>
    element.genre.includes("Drama")
  );
  return spilbergGenre.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scores = moviesArray.map((element) => element.score);
  if (scores.length === 0) {
    return 0;
  }
  const pruebaRara = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === "") {
      continue;
    } else if (scores[i] === undefined) {
      continue;
    } else {
      pruebaRara.push(scores[i]);
    }
  }
  console.log(pruebaRara);
  const scoresTotal = pruebaRara.reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  const scoresAverage = scoresTotal / scores.length;
  const scoresAverageRound = Number(scoresAverage.toFixed(2));
  return scoresAverageRound;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  return scoresAverage(dramas);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const years = moviesArray.filter((element) => element.year);
  //console.log(yearsCopy); copia con todo (y años)
  const patata = years.filter((element) => element.year);
  //const patata2 = patata.map((element) => element.year);
  const prueba = JSON.parse(JSON.stringify(patata));
  const prueba2 = [...new Set(prueba)];
  const ascendingYear = prueba2.sort((a, b) => a - b);
  //console.log(ascendingYear); // no se porqué no lo detecta porque lo devuelvo por orden de año.
  // he probado tanto sin duplicados de años como un único array de años.
  //creo que pasa como en el ejercicio anterior que habrá que filtarse el array y limpiarlo de ""?
  return ascendingYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleFilter = moviesArray.map((element) => element.title);
  const titleSlice = titleFilter.slice(0, 20);
  const titleSliceOrder = titleSlice.sort();
  console.log(titleSliceOrder);
  return titleSlice;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {} //map duration split(" ")  replace (h y min)
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
