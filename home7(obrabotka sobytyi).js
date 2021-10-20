/*Задание 1
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.
Задание 2
Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает. 
2
Домашнее задание №1
Задание 3
Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100
пикселей.
Сделать так, чтобы при клике мышкой по полю, мяч плавно
перемещался на место клика. Учтите: необходимо, чтобы центр
мяча останавливался именно там, где был совершен клик мышкой.
Также предусмотрите, чтобы мяч не выходил за границы поля.
Задание 4
Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет.
Домашнее задание №1
3
Задание 5
Создать html-страницу со списком книг.
При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей –
необходимо возвращать прежний цвет.
Задание 6
Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу.
Домашнее задание №1 Домашнее задание №1
4
Задание 7
Создать html-страницу с деревом вложенных директорий.
При клике на элемент списка, он должен сворачиваться или
разворачиваться. При наведении на элемент, шрифт должен становится жирным (с помощью CSS).
Задание 8
Создать html-страницу с блоком текста в рамочке.
Реализовать возможность изменять размер блока, если зажать
мышку в правом нижнем углу и тянуть ее дальше.*/



/*let input = document.querySelector(".input1");
input.addEventListener("input", checkInput, false);
document.body.style.backgroundColor = "#FBF2E9";

console.log(input);

function checkInput(ev) {
  if (
    ev.data === "1" ||
    ev.data === "2" ||
    ev.data === "3" ||
    ev.data === "4" ||
    ev.data === "5" ||
    ev.data === "6" ||
    ev.data === "7" ||
    ev.data === "8" ||
    ev.data === "9" ||
    ev.data === "0"
  ) {
    let arr = Array.from(input.value).slice(0, -1);
    input.value = arr.join("");
  } else {
    console.log(ev.data);
  }
}*/



/*let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/



/*field.onclick = function(event) {

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};*/



/*const trafficLights = document.querySelector("div.traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function() {
  if (redlight.classList.contains("traffic__red")) {
    redlight.classList.remove("traffic__red");
    yellowlight.classList.add("traffic__yellow");
  } else if (yellowlight.classList.contains("traffic__yellow")) {
    yellowlight.classList.remove("traffic__yellow");
    greenlight.classList.add("traffic__green");
  } else if (greenlight.classList.contains("traffic__green")) {
    greenlight.classList.remove("traffic__green");
    redlight.classList.add("traffic__red");
  }
});*/



/*let list = document.querySelectorAll('.bookList li'); 
 
function setSelected() {
  document.querySelectorAll('.bookList li.selected').forEach(function (el) {
    el.classList.remove('selected');
  });
  this.classList.add('selected'); 
}
 
list.forEach(function(li) {
   li.onclick = setSelected;
});*/



/*let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;


      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }
    };*/



 
    /*for (let li of tree.querySelectorAll('li')) {
      let span = document.createElement('span');
      li.prepend(span);
      span.append(span.nextSibling); 
    }

    
    tree.onclick = function(event) {

      if (event.target.tagName != 'SPAN') {
        return;
      }

      let childrenContainer = event.target.parentNode.querySelector('ul');
      if (!childrenContainer) return; 

      childrenContainer.hidden = !childrenContainer.hidden;
    }*/



    /*const resDiv = document.getElementById("content__textarea");
    const resizer = document.querySelector("div.content__textarea--resizer");
    
    const initResize = e => {
      e.preventDefault;
      window.addEventListener("mousemove", startResize);
      window.addEventListener("mouseup", stopResize);
    };
    
    const startResize = e => {
      resDiv.style.width = (e.clientX - resDiv.offsetLeft) + "px";
    };
    const stopResize = e => {
      window.removeEventListener('mousemove', startResize);
      window.removeEventListener('mouseup', stopResize);
    };
    
    resizer.addEventListener("mousedown", initResize);*/



    /*let ie = 0;
    let op = 0;
    let ff = 0;
    let block; 
    let block_r; 
    let delta_w = 0; 
    let delta_h = 0; 
  
  onload = function () {
    
    let browser = navigator.userAgent;
    if (browser.indexOf("Opera") != -1) op = 1;
    else {
      if (browser.indexOf("MSIE") != -1) ie = 1;
      else {
        if (browser.indexOf("Firefox") != -1) ff = 1;
      }
    }
    block = document.getElementById("block"); 
    block_r = document.getElementById("block_resize"); 
    document.onmouseup = clearXY; 
    block_r.onmousedown = saveWH; 
  }
  
  function getXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    return new Array(x, y);
  }
  function saveWH(obj_event) {
    let point = getXY(obj_event);
    w_block = block.clientWidth;
    h_block = block.clientHeight; 
    delta_w = w_block - point[0]; 
    delta_h = h_block - point[1]; 
    
    document.onmousemove = resizeBlock;
    if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
    return false; 
  }
  
  function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
  }
  
  function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  
  function clearXY() {
    document.onmousemove = null;
  }
  function resizeBlock(obj_event) {
    let point = getXY(obj_event);
    new_w = delta_w + point[0]; 
    new_h = delta_h + point[1]; 
    block.style.width = new_w + "px"; 
    block.style.height = new_h + "px"; 
    
    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
  }*/
