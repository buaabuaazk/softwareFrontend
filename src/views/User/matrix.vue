<template>
    <div class="container">
      <div class="bubble" v-for="(bubble, index) in bubbles" :key="index" :style="getBubbleStyle(bubble.bbColor)">
        <div class="title">{{ bubble.title }}</div>
        <div v-html="bubble.content"></div>
      </div>
  
      <div class="middle">
        <h1>Speech<br>Bubbles</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bubbles: [
          {
            title: 'Bottom Right',
            content: '资源1',
            bbColor: '#af2d58',
          },
          {
            title: 'Bottom Center',
            content: '资源2',
            bbColor: '#a9528d',
          },
          {
            title: 'Bottom Left',
            content: '资源3',
            bbColor: '#744b9f',
          },
          {
            title: 'Left Bottom',
            content: '资源4',
            bbColor: '#484a9b',
          },
          {
            title: 'Left Center',
            content: '资源5',
            bbColor: '#086899',
          },
          {
            title: 'Left Top',
            content: '资源6',
            bbColor: '#45c5e0',
          },
          {
            title: 'Top Left',
            content: '资源7',
            bbColor: '#51bfae',
          },
          {
            title: 'Top Center',
            content: '资源8',
            bbColor: '#63c08c',
          },
          {
            title: 'Top Right',
            content: '资源9',
            bbColor: '#c5d863',
          },
          {
            title: 'Right Top',
            content: '资源10',
            bbColor: '#fdbb3c',
          },
          {
            title: 'Right Center',
            content: '资源11',
            bbColor: '#f5882f',
          },
          {
            title: 'Right Bottom',
            content: '资源12',
            bbColor: '#f05142',
          },
        ],
      };
    },
    methods: {
      getBubbleStyle(color) {
        return {
          '--bbColor': color,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin-inline: auto;
    font-family: sans-serif;
    display: grid;
    grid-template-areas:
      'br bc bl'
      'rb cc lb'
      'rc cc lc'
      'rt cc lt'
      'tr tc tl';
    padding: 2rem;
    gap: 2rem;
  }
  
   .bubble {
    --bbArrowSize: 1.5rem;
    --bbBorderRadius: 1rem;
    --bbPadding: 1rem;
    background: var(--bbColor);
    border-radius: var(--bbBorderRadius);
    padding: var(--bbPadding);
    position: relative;
  } 
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  
  .middle {
    grid-area: cc;
    align-self: center;
    justify-self: center;
    text-align: center;
    color: #222;
  }
  </style>
  