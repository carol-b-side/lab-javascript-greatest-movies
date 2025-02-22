// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const onlyDirectors = moviesArray.map((currentMovie) => currentMovie.director);

  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const allSpielberg = moviesArray.filter((currentMovie) => currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama"));
  return allSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scoreAverage = moviesArray.reduce((acc, score) => {
    if (score.score) {
      return acc + score.score;
    } else {
      return acc;
    }
  }, 0);

  return Number((scoreAverage / moviesArray.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((currentMovie) => currentMovie.genre.includes("Drama"));
  if (drama.length === 0) {
    return 0;
  }
  const dramaScore = drama.map((movie) => movie.score);
  const averageDrama = dramaScore.reduce((acc, score) => acc + score, 0) / dramaScore.length;

  return Number(averageDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //cria uma nova array
  const byYear = moviesArray.map(currentYear => currentYear);
  const years = byYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return years;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const onlyTitle = moviesArray.map((currentMovie) => currentMovie.title);
  const alphabeticTitle = onlyTitle.sort();
  const onlyTwenty = alphabeticTitle.slice(0, 20);
  return onlyTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // const onlyDuration = moviesArray.map((currentMovie) => currentMovie.duration);
  // let splitStr = onlyDuration.split(" ");
  // let hours = splitStr[0].replace((/\D/g, ""));
  // let minutes = splitStr[1].replace((/\D/g, ""));
  // let turnHours = hours * 60;
  // let totalDuration = turnHours + minutes;
  // return totalDuration;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  /* um array para cada ano
     average score de cada array (ano)
     qual array tem a maior média
  */

}
