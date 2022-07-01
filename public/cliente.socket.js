const socket = io()
const messageForm = document.querySelector('#messageForm')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

function sendMessage(messageInfo){
    socket.emit('client:message', messageInfo)
}

messageForm.addEventListener('submit', event =>{
    event.preventDefault()
    const messageInfo = {username:usernameInput.value, message:messageInput.value}
    sendMessage(messageInfo)
})