import axios from 'axios';
 
const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';
//const messages=[];
const messages=new FormData();
export default {
  async getResponse(message,messages) {
    console.log(message)
    //this.messages.append({"role": "assistant", "content": message})
    const response = await axios.post(`${API_URL}`, {
      "model": "gpt-3.5-turbo",
      //"messages": [{"role": "user", "content": message}],
      "messages": messages,
      "temperature": 1,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "max_tokens": 4000,
      "stop": "\n"
    }
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
    });
    //messages.append(response['choices'][0]['message']['content'])
    console.log(response.data)
    return response.data;
  },
};