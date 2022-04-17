"use strict"
// На странице находятся элементы:
// - div - фигура, которая может принимать какие-то формы
// - select - выбор типа фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура (в элементе div)
// - input для выбора цвета. При его изменении меняется цвет фигуры (в элементе div)
// Реализовать анимацию появления элемента при выборе нового цвета или типа фигуры.
// Для реализации используем библиотеки Bootstrap и jQuery.

const figure = $(".figure");
const input = $(".input");
const select = $(".select");
const DELAY = 150;

function transform(width, height, radius, color = "") {
  figure.fadeOut(DELAY);
  setTimeout (() => {
    figure.width(`${width}px`);
    figure.height(`${height}px`);
    figure.css("border-radius", `${radius}%`);
    if (color) figure.css("background-color", color);
  }, DELAY);
  figure.fadeIn(DELAY);
} 

input.change(() => {
  transform(300, 300, 0, input.val());
});

select.change(() => {
  switch (select.val()) {
    case "square": {
      transform(300, 300, 0);
      break;
    }
    case "rect": {
      transform(200, 300, 0);
      break;
    }
    default: {
      transform(300, 300, 50);
      break;
    }
  }
});

