const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = array.map (function(movies){
    return movies.director;
  });

   /* ALSO THIS WAY:
   let result=array.map(movies=>movies.director);
   */
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesDirector = array.filter((films) => films.director == director);
  return moviesDirector;

  
 /*
   let moviesDirector = array.filter(function(films){
   if( films.director === director){
   return true;
  }
  });
 */
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter((films) => films.director == director);
  let sumScore = moviesDirector.reduce(function(acc,films) {
    return acc + films.score
  },0);

  let scoreAverage = sumScore / moviesDirector.length;
  return  Math.round (scoreAverage * 100) /100;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let arrayTitle = array.map(movies=>movies.title);
  let sortAlphabetically = arrayTitle.sort ((a,b) => (a > b) ? 1 : -1);
  let firstTwenty = sortAlphabetically.slice (0,20);
  return firstTwenty;
  
  /* ALSO THIS WAY:
  let arrayTitle = array.map(movies=>movies.title);
  arrayTitle.sort()
  return arrayTitle.slice(0,20);
  */
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
   let moviesByYear = [...array];
   return moviesByYear.sort((a,b) => {if (a.title < b.title) return -1 }).sort ((a,b)=> a.year - b.year);
  
 
   /* ALSO THIS WAY :
   moviesByYear.sort ((a,b)=> {
     if (a.title < b.title){
       return -1;
     }
     if (a.title > b.title) {
       return 1;
     }
     });  
   moviesByYear.sort ((a,b)=> a.year - b.year);
   return moviesByYear;
  */

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  let getScore = array.filter ((movies)=>movies.score !== '');
  let getGenre = getScore.filter ((movies)=> movies.genre.includes(genre));
  let getGenreAndScore = getGenre.map ((movies)=> movies.score);
  let initialValue = 0;
  let sumScore = getGenreAndScore.reduce((a,b) => a + b, initialValue);
  
  return parseFloat(sumScore / getGenreAndScore.length);
    
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(duration) {
  

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  let filmOfYear = array.filter (movie =>movie.year == year);
  filmOfYear.sort (function(a,b) {
    if (a.score > b.score){
      return -1;
    }
    if (a.score < b.score){
      return 1;
    }
    return 0;
  });
  return filmOfYear.slice (0,1);
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
