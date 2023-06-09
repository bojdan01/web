// Odeslání zprávy na OpenAI API pomocí fetch
async function sendMessage() {
  const userInput = document.getElementById("user-message").value;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Nahraďte YOUR_API_KEY svým vlastním klíčem API
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'user' },
          { role: 'user', content: userInput }
        ],
        model: 'gpt-3.5-turbo',
        chat: {
          messages: chatState ? chatState.messages : []
        }
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      const responseMessage = data.choices[0].message.content;
      chatState = data;
      displayMessage('Vy', userInput);
      displayMessage('AI', responseMessage);
      document.getElementById("user-message").value = "";
    }
  } catch (e) {
    console.error(e)
  }
}
