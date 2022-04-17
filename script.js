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
const DELAY = 500;

input.change(() => {
  figure.fadeOut(DELAY);
      setTimeout (() => {
        figure.css("background-color", input.val());
      }, DELAY);
      figure.fadeIn(DELAY);
  

});

select.change(() => {
  switch (select.val()) {
    case "square": {
      figure.fadeOut(DELAY);
      setTimeout (() => {
        figure.width("300px");
        figure.height("300px");
        figure.css("border-radius", "0");
      }, DELAY);
      figure.fadeIn(DELAY);
      break;
    }
    case "rect": {
      figure.fadeOut(DELAY);
      setTimeout (() => {
        figure.width("200px");
        figure.height("300px");
        figure.css("border-radius", "0");
      }, DELAY);
      figure.fadeIn(DELAY);
      break;
    }
    default: {
      figure.fadeOut(DELAY);
      setTimeout (() => {
        figure.width("300px");
        figure.height("300px");
        figure.css("border-radius", "50%");
      }, DELAY);
      figure.fadeIn(DELAY);
      break;
    }
  }
});
