<template>
    <div>
      <input v-model="message" @keyup.enter="sendMessage" />
      <div v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </div>
    </div>
  </template>
   
  <script>
  import chatgptAPI from '../../../api/chatgpt.js';
   
  export default {
    data() {
      return {
        message: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        try {
        console.log(this.message);
        const response = await chatgptAPI.getResponse(this.message);
        const content = response['choices'][0]['message']['content'];
        console.log(content)
        this.messages.push(content);
        this.message = '';
        console.log(this.messages);
        }
        catch (error){
          console.error(error);
        }
      },
    },
  };
  </script>