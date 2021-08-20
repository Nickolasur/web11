let year = prompt("Введите Ваш возраст",0);
if (year > 0 && year <= 2) {alert ("Вы еще ребенок");
}
else if (year >= 12 && year <= 18) {alert ("Вы подросток");
}
else if (year > 18 && year <= 60) {alert ("Вы взрослый");
}
else if ( year > 60) {alert ("Вы пенсионер");
};

let number = Number (prompt ("Введите число от 0 до 9",0));
switch (number) {
    case '0': alert ('0 is )');
    break;
    case '1': alert ('1 is !');
    break;
    case '2': alert ('2 is @');
    break;
    case '3': alert ('3 is #');
    break;
    case '4': alert ('4 is $');
    break;
    case '5': alert ('5 is %');
    break;
    case '6': alert ('0 is ^');
    break;
    case '7': alert ('7 is &');
    break;
    case '8': alert ('8 is *');
    break;
    case '9': alert ('9 is (');
    break;
};

let number = Number (prompt("Введите трехзначное число",0));
number = number + '';
    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2])
    {
    alert('Есть одинаковые цифры');
    }
    else
    alert('Нет одинаковых цифр');

    let year = prompt("Введите год",0);
    if (year%400==0 || (year %4==0 && year %100 !==0)) {
    alert("Високосный год");
}
else {
    alert("Не високосный год");
}

let fiveNumber = prompt ("Введите пятизначное число" ,0);
fiveNumber = fiveNumber + '';
if (fiveNumber === fivenumber.split('').reverse().join('')){
    alert("Палиндром");
}
else {alert("Не палиндром");
}

let quantity = prompt ("Введите количество в USD:" ,0);
let currancy = prompt ("EUR = 1, UAN = 2, AZN = 3" ,0);
switch (currancy) {
    case '1':
        alert(quantity*0.85 + 'EUR');
    case '2':
        alert(quantity*6.48 + 'UAN');
    case '3':
        alert(quantity*1.7 + 'AZN');
}

let sumBuy = prompt ("Введите сумму покупки: ",0);
if (sumBuy>=200 && sumBuy <=300) {
    alert(sumBuy/1.03, 'скидка составила 3%');
}
else if (sumBuy>300 && sumBuy <500) {
    alert(sumBuy/1.05, 'скидка составила 5%');
}
else if (sumBuy >=500) {
    alert(sumBuy/1.07, 'скидка составила 7%');
}

let circum = prompt ("Введите длину окружности: ",0);
let perimeter = prompt ("Введите периметр квадрата: ",0);
const circle = circum/3.14;
const square = perimeter/4;
if (circle < square) {
    alert ("Окружность поместиться в квадрат");
}
else if (circle > square) {
    alert ("Окружность не поместиться в квадрат");
}

let football = prompt ("Кто выиграл чемпионат Европы по футболу 2021г? 1)- Франция 2) Италия 3) Бельгия");
let olympic = prompt ("Какая страна выиграл на первом месте по количеству золотых медалей 1) Россия 2) США 3) Китай");
let river = prompt ("В каком городе протекает река Сена? 1)-Будапешт 2)- Стокгольм 3)-Париж");
let points = 0;
if (football == 2)
points += 2;
if (olympic == 2) 
points += 2;
if (river == 3) 
points += 2;
alert("Количество набранных баллов: " +points);

let date = prompt("Введите дату в формате: день-месяц-год");
date = date.split('-');
let previousDate = new Date (date[2], date[1]-1, date[0]);
previousDate.setDate(previousDate.getDate()+1);
alert (previousDate);



