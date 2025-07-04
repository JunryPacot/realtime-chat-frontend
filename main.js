// Replace this with your Render backend URL later!
const socket = io("https://chat-backend-dbyq.onrender.com");

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");

function sendMessage() {
  const msg = messageInput.value;
  if (msg.trim() !== "") {
    socket.emit("chat message", msg);
    messageInput.value = "";
  }
}

socket.on("chat message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  chatBox.appendChild(div);
});