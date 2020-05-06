function solve() {
   document.getElementById('send').addEventListener('click', sendMessage);
   
   function sendMessage() {
       let text = document.getElementById('chat_input');
       let divElement = document.createElement('div');
       divElement.textContent = text.value;
       divElement.className = 'message my-message';
       document.getElementById('chat_messages').appendChild(divElement);
       text.value = '';
   }
}


