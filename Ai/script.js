function sendMessage() {
    var userInput = document.getElementById("user-message").value;
    // Logika pro odeslání zprávy
    var chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += "<p><strong>Vy: </strong>" + userInput + "</p>";
    document.getElementById("user-message").value = "";
}
let chatState;

// Odeslání zprávy na OpenAI API
async function sendMessage() {
  const userInput = document.getElementById("user-message").value;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Nahraďte YOUR_API_KEY svým vlastním klíčem API
    },
    body: JSON.stringify({
      "messages": [
        { "role": "system", "content": "user" },
        { "role": "user", "content": userInput }
      ],
      "model": "gpt-3.5-turbo",
      "chat_model": true,
      "temperature": 0.7,
      "max_tokens": 50,
      "n": 1,
      "stop": ["\n"]
    })
  });

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    const responseMessage = data.choices[0].message.content;
    displayMessage('Vy', userInput);
    displayMessage('AI', responseMessage);
    document.getElementById("user-message").value = "";
  }
}

// Zobrazení zprávy v chatovacím logu
function displayMessage(sender, message) {
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += "<p><strong>" + sender + ": </strong>" + message + "</p>";
}
