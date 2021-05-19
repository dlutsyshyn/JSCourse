
/* if (1===1) {
    console.log(`Hello!`)
} else {
    console.log(`Bye!`)
}
 */
/* if (num < 49) {
    alert(`Error!`)
} else if (num > 100) {
    alert(`Dohrena!`)
} else {
    alert(`Ваше число: ${num}!`)
} */

/* (num === 50) ? alert(`OK`) : alert(`Ne ok!`);  */

const num = 50;

switch (num) {
    case 0: alert(`No!`); break;
    case 49: alert(`Close enought!`); break;
    case 50: alert(`Opa opa, NUM is ${num}!`); break;
    default: alert(`Not today!`); break;
}