// index.html <-> script.js (client side server) (port:5500) <-> index.js (backend server) (port:3000)

// to sending event you emit() and handling event is done by using on()

const socket = io('http://localhost:3000');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name?');
appendMessage('You joined');
socket.emit('new-user', name);

socket.on('user-connected', name => {
    appendMessage(`${name} connected`);
})

socket.on('chat-message', data => {
    appendMessage(`${data.name} : ${data.message}`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e=> {
    e.preventDefault();
    const message = messageInput.value;
    if(message !== ''){
        appendMessage(`You : ${message}`);
        socket.emit('send-chat-message', message);
    }
    messageInput.value = '';
})

function appendMessage(message){
    const messageElement = document.createElement('div');  //<div></div>
    messageElement.innerText = message; //<div>message</div>
    messageContainer.append(messageElement);
}