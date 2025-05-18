module.exports = async function (context, req) {
  const userMessage = req.body?.message || "";

  // Replace this with your actual AI/chatbot logic, scraping, or GraphRAG calls
  const botReply = `You said: "${userMessage}". This is a placeholder response from Azure Function.`;

  context.res = {
    status: 200,
    body: { response: botReply },
    headers: { "Content-Type": "application/json" }
  };
};
