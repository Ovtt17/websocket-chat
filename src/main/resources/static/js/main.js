'use strict';

const usernamePage = document.querySelector('#username-page');
const chatPage = document.querySelector('#chat-page');
const usernameForm = document.querySelector('#usernameForm');
const messageForm = document.querySelector('#messageForm');
const messageInput = document.querySelector('#message');
const messageArea = document.querySelector('#messageArea');
const connectingElement = document.querySelector('.connecting');

let stompClient = null;
let username = null;

const colors = [
  '#2196F3', '#32c787', '#00BCD4', '#ff5652',
  '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

function connect(event) {
  username = document.querySelector('#name').value.trim();
  if (username) {
    usernamePage.classList.add('hidden');
    chatPage.classList.remove('hidden');

    const socket = new SocketJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
  }
  event.preventDefault();
}

usernameForm.addEventListener('submit', connect, true);