const toggleBtn = document.getElementById("chatbot-toggle");
const chatBox = document.getElementById("chatbox");
const closeBtn = document.getElementById("close-chat");
const chatLog = document.getElementById("chatlog");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// Show chat window
toggleBtn.addEventListener("click", () => {
  chatBox.classList.remove("hidden");
});

// Hide chat window
closeBtn.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

// Handle form submission
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("You", message);
  userInput.value = "";

  try {
    const response = await fetch("https://your-api-url/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    appendMessage("Bot", data.response || "Sorry, I didn't understand that.");
  } catch (error) {
    appendMessage("Bot", "⚠️ Error reaching the server.");
  }
});

// Append message to chat log
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message");

  if (sender === "You") {
    msg.classList.add("user-message");
  } else {
    msg.classList.add("bot-message");
  }

  msg.textContent = `${sender}: ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}
