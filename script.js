// index.html <-> script.js (client side server) (port:5500) <-> index.js (backend server) (port:8000)

const socket = io('http://localhost:3000');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
