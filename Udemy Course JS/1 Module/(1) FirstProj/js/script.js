const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''); //переменная от пользователя

//alert(`Вы посмотрели: ${numberOfFilms} фильмов!`)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  //

const movieName = prompt (`Один из просмотреных фильмов?`, ``),
      movieMark = prompt (`Какую оценку вы поставите фильму?`, ``),
      movieNameB = prompt (`Один из просмотреных фильмов?`, ``),
      movieMarkB = prompt (`Какую оценку вы поставите фильму?`, ``);

personalMovieDB.movies[movieName] = movieMark;
personalMovieDB.movies[movieNameB] = movieMarkB;

alert(`Hello: ${personalMovieDB}!`);