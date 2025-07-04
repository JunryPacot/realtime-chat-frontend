
const socket = io("https://chat-backend-dbyq.onrender.com");

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg) {
    addMessage(msg, true); // show locally
    socket.emit("chat message", msg);
    messageInput.value = "";
  }
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

socket.on("chat message", (msg) => {
  addMessage(msg, false);
});

function addMessage(msg, isUser) {
  const div = document.createElement("div");
  div.textContent = msg;
  div.classList.add("message", isUser ? "user" : "other");
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}