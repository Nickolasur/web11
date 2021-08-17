let forename = prompt("Введите Ваше имя");
let avg = forename
alert("Привет, " +avg);

let born = prompt("Введите год рождения", 0);
const year = 2021;
let avg = year - +born;
alert("Ваш возраст: " +avg);

let length = prompt("Введите длину стороны квадрата", 0);
let avg = 4*length;
alert("Периметр квадрата: " +avg);

let radius = prompt("Введите радиус окружности",0);
const pi = 3.14;
let avg = pi*radius*radius;
alert("Площадь окружности: " +avg);

let distance = prompt("Введите расстояние, км", 0);
let time = prompt("Введите время, ч", 0);
let avg = distance / time;
alert("Необходимая скорость: " +avg,);

let number = prompt("Введите доллары",0);
const euro = 0.85;
alert(number * euro);

let number = prompt ("Введите объем флешки, ГБ", 0);
const gigabyte = 1024;
const megabyte = 820;
let avg = (number * gigabyte)/ megabyte;
alert ("Количество файлов составляет: " +avg);

let cash = prompt ("Введите сумму денег", 0);
let price = prompt ("Введите цену шоколадки", 0);
let avgOne = Math.floor(cash / price);
let avgTwo = cash- (avgOne*price);
alert ("Количество шоколадок: " +avgOne);
alert ("Сдача: "+avgTwo);

let number = prompt ("Введите трехзначное число: ",0);
let avg = number % 10;
let avgOne = Math.floor (number/10);
let avgOnes = avgOne % 10;
let avgTwo = Math.floor (number/100);
let avgTwos = avgTwo % 10;
alert (+avg + '' +avgOnes + '' +avgTwos);

const num = prompt("Введите число: ", 0);
const result = !(num % 2) ? "Число четное" : "Число нечетное";
alert(result);