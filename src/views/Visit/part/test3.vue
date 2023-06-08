<template>
    <h1 style="padding: 15px;color:bisque">热门帖子</h1>
<ul class="post">
    <li style="--accent-color:#41516C">
        <div class="date">OS上机</div>
        <div class="title"><h2 style="color:aquamarine">提示</h2></div>
        <div class="descr">
          请同学们在实验课到达指定机房（周一中午在微信的实验群发布机房与座位表）。实验课内容如下：

            Lab5 第一次上机考试
            注意：初始化分支时，请选择正确的代码版本（commit）。系统将基于选择的代码版本来初始化课上考试的分支。若误选，可在 GitLab 的个人仓库中删除分支，然后返回系统重新初始化。</div>
          </li>
    <li style="--accent-color:#FBCA3E">
        <div class="date">软工大作业</div>
        <div class="title">学习和生活优质平台</div>
        <div class="descr">此需求规格说明书旨在描述“学习生活平台”Web系统的需求。该系统旨在为大学生提供在线的学习生
            活资源和交流平台。本文档通过对用户角色、系统功能和系统非功能性需求的描述，详细阐述了系统的
            需求特性。</div>
    </li>
    <li style="--accent-color:#E24A68">
        <div class="date">软工大作业</div>
        <div class="title">软工大作业</div>
        <div class="descr">软工大作业</div>
    </li>
    <li style="--accent-color:#1B5F8C">
        <div class="date">软工大作业</div>
        <div class="title">软工大作业</div>
        <div class="descr">软工大作业</div>
    </li>
    <li style="--accent-color:#4CADAD">
        <div class="date">软工大作业</div>
        <div class="title">软工大作业</div>
        <div class="descr">软工大作业</div>
    </li>
</ul>
<div>
    <p style="font-size: 23px;margin-top:20px">如果还想看更多精彩帖子，请登录吧</p>
</div>
</template>
  
<style scoped>

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
}

h1 {
  text-align: center;
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
  color:aliceblue
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

</style>
  