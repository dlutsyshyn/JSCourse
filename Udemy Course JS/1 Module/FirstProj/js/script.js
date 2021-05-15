let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    if (Number(!numberOfFilms) || '') {
        alert('Fuck you!');
    } else {
alert(`Вы посмотрели: ${numberOfFilms}!`)
}