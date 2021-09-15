/*let car = {
    manufacture: "Audi",
    model: "S8",
    yearOfRelease: 2021,
    averageSpeed: 110,
showInfo: function() {
alert("Manufacture:"+ 
car.manufacture +
"\nModel:"+ 
car.model+
"\nyearOfRelease:" +
car.yearOfRelease+
"\naverageSpeed:"+ 
car.averageSpeed
);
},
};

function needTime(distance) {
  return distance / this.averageSpeed;
}

car.showInfo();
var hours = car.needTime(270);
alert("Необходимое время: " + hours);*/




/*let value = {
  numerator: 2,
  denominator: 3,
  summation: function calcFormula(numerator,denominator){
    let sum = numerator / denominator + numerator / denominator;
    alert("Сумма: " + sum);
  },
  
subtracting: function calcFormula(numerator,denominator){
  let sub = numerator / denominator - numerator / denominator;
  alert("Разность: " + sub);
},
multiply: function calcFormula(numerator,denominator){
  let multi = (numerator / denominator) * (numerator / denominator);
  alert("Умножение: " + multi);
},
dividing: function calcFormula(numerator,denominator){
  let div = (numerator / denominator) / (numerator / denominator);
  alert("Деление:" + div);
},
decrease: function calcFormula(numerator,denominator){
let M = numerator;
let N = denominator;
  for (let i = 2; i<=numerator; i++){
  if (numerator % i === 0 && denominator % i === 0)
M = numerator / i;
N = denominator / i;
  };
  alert("Сокращенная дробь:" + M / N);
}
};
 let numerator = prompt ("Введите числитель:",0);
 let denominator = prompt ("Введите знаменатель:",0);
 
 value.summation(numerator,denominator);
 value.subtracting(numerator,denominator);
 value.multiply(numerator,denominator);
 value.dividing(numerator,denominator);
 value.decrease(numerator,denominator);*/



 /*let time = {
  hours: 17,
  minutes: 10,
  seconds: 35,
  showTime: function() {
    alert(`${hours}:${minutes}:${seconds}`);
  },
  addSeconds: function(seconds) {
    if (seconds <= 0) {
      alert("Вы передали неправильное время");
    } else if (seconds + this.seconds >= 60) {
      let differenceMin = Math.floor((this.seconds + seconds) / 60);
      this.seconds = (this.seconds + seconds) % 60;
      this.addMinutes(differenceMin);
    } else {
      this.seconds += seconds;
    }
  },
  addMinutes: function(minutes) {
    if (minutes <= 0) {
      alert("Вы передали неправильное время");
    } else if (this.minutes + minutes >= 60) {
      let differenceHours = Math.floor((this.minutes + minutes) / 60);
      this.minutes = (this.minutes + minutes) % 60;
      this.addHours(differenceHours);
    } else {
      this.minutes += minutes;
    }
  },
  addHours: function(hours) {
    if (hours <= 0) {
      alert("Вы ввели неправильное время");
    } else if (hours + this.hours >= 24) {
      this.hours = (this.hours + hours) % 24;
    } else {
      this.hours += hours;
    }
  }
};

time.showTime();
time.addHours(14);
time.showTime();
time.addMinutes(180);
time.showTime();
time.addSeconds(350);
time.showTime();*/


  