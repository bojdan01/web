function sendMessage() {
    var userInput = document.getElementById("user-message").value;
    // Logika pro odeslání zprávy
    var chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += "<p><strong>Vy: </strong>" + userInput + "</p>";
    document.getElementById("user-message").value = "";
}
