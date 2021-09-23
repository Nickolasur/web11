/*let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
function checkNumber(a,b){
    if(a<b){
        return -1;
    }
    else if (a>b) {
        return 1;
    }
    else {
    return 0;
}
}
alert(checkNumber(a,b));*/


/*function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  alert( factorial(3) )*/


/*let numberOne = (prompt("Введите первое число"));
let numberTwo = (prompt("Введите второе число"));
let numberThree = (prompt("Введите третье число"));
function createString (numberOne,numberTwo,numberThree){
    return  numberOne + numberTwo + numberThree;
}
alert (createString(numberOne,numberTwo,numberThree));*/


/*let length = Number(prompt('Введите длину прямоугольника'));
let width = Number(prompt('Введите ширину прямоугольника'));
function calcRectangle(length,width){
if(length!=''&& width!='') 
return length*width;
else if(length!='' && width=='')
return length*length;
else if(length=='' && width!='')
return width*width;
}
 alert(calcRectangle(length,width));*/


/*let number = prompt("Введите число:",0);
function checkPerfect(n)*/

/*function perfect(n) {
    let k = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0){
            k=k+i;
        }
    }
    return k === n;
}
 console.log (perfect(28));*/


 /*function perfect(numb) {
    let k = 0
    
    for (let i = 1; i <= numb / 2; i++) {
    if (numb % i === 0) 
        k=k+i;
    }
    
    return k === numb;
    }
    
    function rangePerfect(from, to) {
    for (let i = from; i <= to; i++) {
    const isPerfect = perfect(i);
    
    if (isPerfect) console.log('Совершенные числа из диапазона: ', i)
    };
    };
    console.log (rangePerfect(2,512));*/



    /*function acceptTime(чч) {
        return function acceptMinute(мм = 0){
        return function acceptSecond(cc = 0){
            return `${чч}:${мм}:${cc}`
        }   
        }
    }
    let time = acceptTime(23)(30)(49);
    console.log(time);*/


    /*let hours = Number(prompt("Введите часы:"));
    let minutes = Number(prompt("Введите минуты:"));
    let seconds = Number(prompt("Введите секунды:"));

    function takeTime (hours,minutes,seconds){
        return sec = hours*3600 + minutes*60 + seconds;
    };
alert (takeTime (hours,minutes,seconds));*/


    /*let seconds = Number(prompt("Введите секунды:"));

    function takeTime (seconds){
    let hours = (seconds/3600) % 24;
    let minutes = (seconds/60) % 60;
    let second = seconds % 60;
        return `${hours}:${minutes}:${second}`;
    };
alert (takeTime (seconds));*/


/*let date = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
    if (h == 0) {
        h = 24;
    }
    let sec = h * 3600 + m * 60 + s;
    let sec1 = h1 * 3600 + m1 * 60 + s1;
    let secVariance = Math.abs(sec1 - sec);

    function Time(n) {
        let hoursAround = n / 3600;
        let hours = Math.floor(hoursAround);
        let minutes = Math.floor((hoursAround - hours) * 60);
        let sec  = n - ((minutes * 60) + (hours * 3600));
        function addNull (num){
            return num > 9 ? num : `0${num}`;
        }
        return `${addNull(hours)}:${addNull(minutes)}:${addNull(sec)}`;
    }
    return Time(secVariance);
};
console.log(date(4, 15, 0, 17, 12, 7)); 
console.log(date(1, 3, 0, 18, 6, 14));*/    