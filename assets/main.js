console.log('hello!!!!!!!!!!!!!!!!!');
const socket = io();
const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const userName = prompt('Ваше имя:');
nameBlock.innerHTML = `${userName}`;

