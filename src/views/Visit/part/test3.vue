<template>
    <!--  -->
    <div class="onboarding onboarding--loading">
        <div class="onboarding__item onboarding__item--active">
          <h1>Design System Principles</h1>
          <p>An iterative set of 8 standards for building and maintaining empowering design systems.
          </p>
          <a href="https://uxdesign.cc/defining-design-system-principles-69e4790b95b0" target="_blank">Original source<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg></a>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/RoundCube-White-Matte-2.png" />
          <h2>Tools over rules</h2>
          <p>Think of the system as a toolbox, not an instruction manual. Support the community, don’t block them. Design systems are about empowering others with tools and information to improve upon what has already been built — not police against it.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/Cone-White-Matte.png" />
          <h2>Lead by example, not by explanation</h2>
          <p>Show best practices with real examples, not instructions on how to recreate them. Writing an instruction manual on design patterns is laborious to write and read. It’s significantly easier to adopt, understand, update, maintain and implement from live examples.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/Cylinder-White-Matte.png" />
          <h2>The goal is efficiency, not consistency</h2>
          <p>There are a lot of goals of a design system: consistency, usability, coherence, consolidation, accessibility, efficiency… the list goes on. The point of this principle is to remember the primary driver for a design system is not to enforce consistency.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/RoundCube-White-Matte-1.png" />
          <h2>Remove what’s not absolutely necessary and perfect what remains</h2>
          <p>It’s very easy to add. It’s almost impossible to remove. Every addition should fight to be included. This is a difficult line to draw but complexities that creep into the foundation of a design system propagate out and become much harder to amend if users get accustomed to it.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/Sphere-White-Matte.png" />
          <h2>Think inclusively</h2>
          <p>Accessibility is an integrated part of design system development, not a box to check at the end. Inclusivity is imperative for building successful, ethical products that scale. Not to mention, accessibility is hard and design systems are in the unique position to champion it as a fundamental standard for design, development and content strategy.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/RoundCube-White-Matte-3.png" />
          <h2>Design systems speak in tokens</h2>
          <p>How a system defines, references, talks about, and curates its design tokens is very important. They are the soul of your system’s aesthetic, the most fundamental visual building block, and the glue that holds the system together in a way no other part can. It’s also frequently the code most likely to be leveraged across code bases.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/SuperToroid-White-Matte.png" />
          <h2>The system succeeds when it can be used independent of its creators</h2>
          <p>This is more of a north star than a principle but I find it to be a particularly useful periodic gut check. The system succeeds when it equips others with the principles, knowledge, and tools to solve problems without the design systems team.</p>
        </div>
        <div class="onboarding__item">
          <img src="https://assets.codepen.io/344846/RoundCube-White-Matte.png" />
          <h2>Flexible enough for different scenarios, specific enough to be useful</h2>
          <p>Modularity is important (especially to encourage adoption) but too much and it starts to feel like a puzzle, too little and it doesn’t leave enough room for flexibility. Finding the sweet spot depends on the team, business, product, and component.</p>
        </div>
        <div class="onboarding__tracker">
          <div class="onboarding__overlay"></div>
          <div class="onboarding__nav">
            <button class="onboarding__nav-button onboarding__prev" data-type="prev">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg></button>
            <button class="onboarding__nav-button onboarding__next" data-type="next"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg></button>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      isLoading: true,
      items: [],
      activeItemIndex: 0,
      navs: []
    };
  },
  mounted() {
    this.items = this.$el.querySelectorAll('.onboarding__item');
    this.activeItem = this.items[this.activeItemIndex];
    this.tracker = this.$el.querySelector('.onboarding__tracker');
    this.navs = this.$el.querySelectorAll('.onboarding__nav-button');

    this.setActiveItemWithItemClick();
    this.setNavActions();
    this.stopTransition();
    this.handleWindowResize();

    const timeout = setTimeout(() => {
      this.isLoading = false;
      clearTimeout(timeout);
    }, 640);
  },
  methods: {
    handleTrackerPosition(top, left, height, width) {
    this.tracker.style.top = `${top}px`;
    this.tracker.style.left = `${left}px`;
    this.tracker.style.height = `${height}px`;
    this.tracker.style.width = `${width}px`;
  },

  getNewActiveIndex(type) {
    let index = 0;
    if (type === "prev") {
      index = this.activeItemIndex - 1 >= 0 ? this.activeItemIndex - 1 : 0;
    } else {
      index =
        this.activeItemIndex + 1 <= this.items.length - 1
          ? this.activeItemIndex + 1
          : this.items.length - 1;
    }

    return index;
  },

  setTrackerPosition() {
    const {
      offsetTop,
      offsetLeft,
      clientHeight,
      clientWidth
    } = this.activeItem;
    this.handleTrackerPosition(
      offsetTop,
      offsetLeft,
      clientHeight,
      clientWidth
    );

    const block = innerHeight < clientHeight ? "start" : "center";
    this.activeItem.scrollIntoView({ block, behavior: "smooth" });
  },

  setActiveItemIndex() {
    this.items.forEach((item, index) => {
      if (item.classList.contains("onboarding__item--active")) {
        this.activeItemIndex = index;
      }
    });
  },

  select(el) {
    const node = document.querySelector(el);
    if (node) {
      return node;
    } else {
      console.error("[Onboarding] - Element is not found");
    }
  },

  selectAll(el) {
    const nodes = document.querySelectorAll(el);
    if (nodes && nodes.length > 0) {
      return nodes;
    } else {
      console.error("[Onboarding] - Elements are not found");
    }
  },

  setActiveItem(index) {
    const newActiveItem = this.items[index];
    this.activeItemIndex = index;
    this.activeItem.classList.remove("onboarding__item--active");
    this.activeItem = newActiveItem;
    this.activeItem.classList.add("onboarding__item--active");
    this.setTrackerPosition(this.activeItem);
  },

  setActiveItemWithItemClick() {
    this.items.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.setActiveItem(index);
      });
    });
  },

  setNavActions() {
    this.navs.forEach((nav) =>
      nav.addEventListener("click", (e) => {
        const index = this.getNewActiveIndex(
          e.currentTarget.getAttribute("data-type")
        );
        this.setActiveItem(index);
      })
    );
  },

  stopTransition() {
    this.tracker.classList.add("onboarding__tracker--stop-t");
    const resizeTimer = setTimeout(() => {
      this.tracker.classList.remove("onboarding__tracker--stop-t");
      clearTimeout(resizeTimer);
    }, 400);
  },

  handleWindowResize() {
    window.addEventListener("resize", () => {
      this.setTrackerPosition();
      this.stopTransition();
    });
  }
  }
};
  </script>
  
  <style scoped>
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  
    font-weight: 400;
    font-size: 15px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
  }
  
  .onboarding {
    overflow: auto;
    margin: auto;
    display: grid;
    color: #fff;
    place-items: center;
    position: relative;
    padding: 40px 80px;
    background: linear-gradient(
      327deg,
      #1869b7,
      #8e50d5,
      #3d888c,
      #3b85b7,
      #8458a7,
      #31836e
    );
    background-size: 1200% 1200%;
    animation: gradientAnimation 20s ease infinite;
  }
  
  .onboarding:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
    opacity: 0.58;
    background-size: cover;
    background-attachment: fixed;
  }
  
  @keyframes gradientAnimation {
    0% {
      background-position: 36% 0%;
    }
    50% {
      background-position: 65% 100%;
    }
    100% {
      background-position: 36% 0%;
    }
  }
  
  .onboarding__item {
    max-width: calc(60ch + 30px);
    width: 100%;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    opacity: 0.2;
    margin: 40px 0;
    position: relative;
    z-index: 1;
    transition: 0.3s;
    border-radius: 20px;
    border: 1px solid transparent;
  }
  
  .onboarding__item h1,
  .onboarding__item h2 {
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    font-weight: 700;
    line-height: 1.4;
  }
  
  .onboarding__item h1 {
    margin: 0 0 16px 0;
  }
  
  .onboarding__item h2 {
    margin: 30px 0 20px;
  }
  
  .onboarding__item p {
    margin: 0;
    line-height: 1.4;
  }
  
  .onboarding__item a {
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    padding: 4px 8px;
    margin-top: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
  }
  
  .onboarding__item a > svg {
    margin-left: 4px;
  }
  
  .onboarding__item img {
    filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.12));
  }
  
  
  .onboarding__item img {
    max-width: 100px;
    display: block;
  }
  
  .onboarding__item:not(.onboarding__item--active) * {
    user-select: none;
  }
  
  .onboarding__item:not(.onboarding__item--active):hover {
    opacity: 0.5;
    border-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  
  .onboarding__item--active {
    opacity: 1;
  }
  
  .onboarding__tracker {
    position: absolute;
    max-width: 100%;
    left: 0;
    top: 0;
    transition: all 0.32s ease-in-out;
  }
  
  .onboarding__overlay {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(30px);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
  }
  
  .onboarding__tracker--stop-t {
    transition: none;
  }
  
  .onboarding__nav {
    position: absolute;
    left: calc(100% + 16px);
    top: 50%;
    transform: translateY(-50%);
  }
  
  .onboarding__nav-button {
    width: 36px;
    height: 36px;
    backdrop-filter: blur(30px);
    border: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    outline: 0;
    cursor: pointer;
    transition: 0.2s;
    background-color: transparent;
    position: relative;
  }
  
  .onboarding__nav-button + .onboarding__nav-button {
    margin-top: 10px;
  }
  
  .onboarding__nav-button:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: 0.3s;
  }
  
  .onboarding__nav-button:active {
    box-shadow: 0 -0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
      0 6px 8px rgba(0, 0, 0, 0.12) inset;
  }
  
  .onboarding__nav-button:hover:before {
    opacity: 0.3;
  }
  
  .onboarding__nav-button:active:before {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .onboarding {
      padding-left: 40px;
    }
  }
  
.onboarding--loading > *:not(.onboarding__tracker) {
  opacity: 0 !important;
}

.onboarding--loading 
.onboarding__overlay {
  border-radius: 20px;
}

.onboarding--loading 
.onboarding__tracker {
  top: calc(50vh - 30px) !important;
  width: 60px !important;
  height: 60px !important;
  left: calc(50% - 30px) !important;
  border-radius: 20px;
  overflow: hidden;
  transition: 3s;
  opacity: 1;
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.08);
}

.onboarding--loading 
.onboarding__tracker:after {
  content: "";
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  background-size: cover;
  background-image: url("data:image/svg+xml, %3Csvg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='40px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cpath opacity='0.2' fill='%23fff' d='M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z'/%3E%3Cpath fill='%23fff' d='M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 20 20' to='360 20 20' dur='0.5s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
}

  .onboarding--loading  
  .onboarding__nav {
      opacity: 0;
    }
  
  </style>
  