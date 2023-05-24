import axios from 'axios';
 
const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';
export default {
  async getResponse(message) {
    console.log(message)
    const response = await axios.post(`${API_URL}`, {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": message}],
      "temperature": 0,
      "top_p": 1,
      "n": 2,
      "stream": false,
      "max_tokens": 700,
      "stop": "\n"
    }
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
    });
    console.log(response.data)
    return response.data;
  },
};