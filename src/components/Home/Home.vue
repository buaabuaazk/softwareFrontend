<template>
    <div class="home">
      <!--  头部   -->
      <header class="header" >
        <!--  轮播图   -->
        <div class="carousel-container">
          <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === activeIndex }">
            <img :src="item.url" alt="">
            <div class="carousel-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        <!--  轮播图按钮   -->
          <div class="carousel-buttons">
            <button v-for="(item, index) in carouselItems" :key="index" @click="activeIndex = index" :class="{ active: index === activeIndex }"></button>
          </div>
        </div>

        <div class="content">
          <h1>Welcome to the Learning Life Platform</h1>
        </div>
      </header>
      <main>
        <section class="section">
          <h2>Latest Courses</h2>
          <div class="course-list">
            <div v-for="course in courses" :key="course.id" class="course-card">
              <img :src="course.image" alt="Course Image" class="img1"/>
              <h3>{{ course.title }}</h3>
              <p>{{ course.description }}</p>
              <router-link :to="`/courses/${course.id}`" class="btn">Enroll</router-link>
            </div>
          </div>
        </section>
        <section class="section">
          <h2>Upcoming Events</h2>
          <div class="event-list">
            <div v-for="event in events" :key="event.id" class="event-card">
              <img :src="event.image" alt="Event Image" />
              <h3>{{ event.title }}</h3>
              <p>{{ event.date }}</p>
              <router-link :to="`/events/${event.id}`" class="btn">Learn More</router-link>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <p>&copy; 2023 Learning Life Platform. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        MainBackgroundImage: require("../../assets/images/course1.jpg"),
        courses: [
          {
            id: 1,
            title: 'Introduction to Programming',
            description: 'Learn the basics of programming in this comprehensive course.',
            image: require('../../assets/images/course1.jpg')
          },
          {
            id: 2,
            title: 'Web Development Fundamentals',
            description: 'Get started with web development and build your own websites.',
            image: require('../../assets/images/course2.jpg')
          },
          // Add more courses here
        ],
        events: [
          {
            id: 1,
            title: 'Panel Discussion: Career Opportunities in Tech',
            date: 'May 25, 2023',
            image: require('../../assets/images/course1.jpg')
          },
          {
            id: 2,
            title: 'Workshop: Introduction to Machine Learning',
            date: 'June 5, 2023',
            image: require('../../assets/images/course2.jpg')
          },
          // Add more events here
        ],
        carouselItems: [
        { url: require('../../assets/images/main.png'), title: 'Image 1', description: 'Description 1' },
        { url: require('../../assets/images/R.jpg'), title: 'Image 2', description: 'Description 2' },
        { url: require('../../assets/images/main3.jpg'), title: 'Image 3', description: 'Description 3' },
      ],
      activeIndex: 0,
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
        startCarousel() {
          setInterval(() => {
            this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
          }, 3000);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        settings() {
          this.$router.push('/account');
        },
        gotoHome: function () {
          this.$router.push('/');
        },
        logout(){
          this.$router.push('/account');
        }
      }
  };
  </script>
  
  <style scoped>
  .header {
    padding: 10px;
    background-color: #f2f2f2;
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../../assets/images/B.jpg);
  }
  .carousel-container {
    position: relative;
    margin-right: 150px;
    width: 400px;
    height: 400px; /* 轮播图容器的高度 */
    overflow: hidden;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #222;
  }
  
  .carousel-buttons {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .carousel-buttons button {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: gray;
    border: none;
    cursor: pointer;
  }
  
  .carousel-buttons button.active {
    background-color: white;
  }

  .content {
    margin-bottom: 200px;
    padding: 20px;
    text-align: center;
  }
  
  .section {
    padding: 20px;
  }
  
  .course-list,
  .event-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .course-card,
  .event-card {
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .course-card img,
  .event-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .footer {
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
    margin-top: 20px;
  }
  
  .img1 {
    width: 300px;
    height: 168.75px;
  }
  </style>
  