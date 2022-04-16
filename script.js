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

input.change(() => {
  figure.css("background-color", input.val());

});

select.change(() => {
  switch (select.val()) {
    case "square": {
      figure.width("300px");
      figure.height("300px");
      figure.css("border-radius", "0");
      break;
    }
    case "rect": {
      figure.width("200px");
      figure.height("300px");
      figure.css("border-radius", "0");
      break;
    }
    default: {
      figure.width("300px");
      figure.height("300px");
      figure.css("border-radius", "50%");
      break;
    }
  }
});
