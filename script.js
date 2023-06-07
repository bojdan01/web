$("#terminal").terminal(async function (command, terminal) {
    try {
        const prompt = `you are a helpful, knowledge sharing chatbot. I say: ${command}. You reply:`;
        const response = await fetch(
            `https://api.openai.com/v1/completions`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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",
                },
                body: JSON.stringify({ "model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 256 })
            }
        );

        if (response.ok) {
            const json = await response.json();
            terminal.echo(json.choices[0].text.trim());
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }

        console.log("Completed!");
    } catch (err) {
        console.error(`Error: ${err}`);
    }
},
{
    greetings: 'GPT-3 Chatbot v0.1',
    name: 'gpt3_demo',
    height: 400,
    width: 800,
    prompt: '> '
});
