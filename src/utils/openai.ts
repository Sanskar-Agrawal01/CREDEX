const OPENAI_API_KEY = 'sk-1234uvwx5678abcd1234uvwx5678abcd1234uvwx';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const getAIResponse = async (message: string): Promise<string> => {
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for a software license reselling platform. You help users understand how to sell their unused software licenses, explain the process, and answer questions about the service. Keep responses concise and professional."
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error getting AI response:', error);
    return "I apologize, but I'm having trouble connecting to the AI service right now. Please try again later.";
  }
}; 