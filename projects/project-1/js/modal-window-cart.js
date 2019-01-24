'use strict';

var mainNavOpen = document.querySelector('.add-to-cart');
var buttonCart = document.querySelector('.btn');

buttonCart.addEventListener('click', function () {
  mainNavOpen.classList.remove('add-to-cart--invisible');
  mainNavOpen.classList.add('add-to-cart--visible');
});


//кнопка меню

var buttonOpenMenu = document.querySelector('.main-nav-button--open');
var buttonCloseMenu = document.querySelector('.main-nav-button--close');
var menuListVisible = document.querySelector('.main-nav__list');


buttonOpenMenu.addEventListener('click', function(){
  menuListVisible.classList.remove('invisible');
  buttonCloseMenu.classList.remove('invisible');
  buttonOpenMenu.classList.add('invisible');
});

buttonCloseMenu.addEventListener('click', function(){
  buttonCloseMenu.classList.add('invisible');
  menuListVisible.classList.add('invisible');
  buttonOpenMenu.classList.remove('invisible');
});