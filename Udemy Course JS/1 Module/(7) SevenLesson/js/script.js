"use strict"

let numberOfFilms; //переменная от пользователя

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

// start();

/* function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres = prompt (`Ваш любимый жанр под номером ${i}?`, '');
    }
    personalMovieDB
}

writeYourGenres(); */

function rememberMyFilms() {
    let i = 0;
    while (i < 2) {

        const movieName = prompt('Один из просмотреных фильмов?', ''),
            movieMark = prompt('Какую оценку вы поставите фильму?', '');

        i++;

        if (movieMark != null && movieName != null && movieName != '' && movieMark != '' && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieMark;
            console.log('Done!');
        } else {
            console.log('Error!')
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('You watched a small amnount of movies!')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count) {
        console.log('Normas! Kinoman!')
    } else if (numberOfFilms >= 30) {
        console.log('Nu ty i gonish!')
    } else {
        console.log('Kapez!')
    }
}

// detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
