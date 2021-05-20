const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''); //переменная от пользователя

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  //


/* for (let i = 0; i < 2; i++) {
    const movieName = prompt ('Один из просмотреных фильмов?', ''),
          movieMark = prompt ('Какую оценку вы поставите фильму?', '');

        if (movieMark != null && movieName != null && movieName != '' && movieMark != '' && movieName.length < 50) {
            personalMovieDB.movies [movieName] = movieMark;
            console.log('Done!');
        } else {
            console.log('Error!')
            i--;
        }
} */

let i = 0;
while (i < 2) {

    const movieName = prompt ('Один из просмотреных фильмов?', ''),
          movieMark = prompt ('Какую оценку вы поставите фильму?', '');

          i++;
        
          if (movieMark != null && movieName != null && movieName != '' && movieMark != '' && movieName.length < 50) {
            personalMovieDB.movies [movieName] = movieMark;
            console.log('Done!');
        } else {
            console.log('Error!')
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('You watched a small amnount of movies!')
} else if (personalMovieDB.count < 30) {
    console.log('Normas! Kinoman!')
} else if (personalMovieDB.count > 50) {
    console.log('Nu ty i gonish!')
} else {
    console.log('Kapez, ty tupoi!')
}

console.log(personalMovieDB);