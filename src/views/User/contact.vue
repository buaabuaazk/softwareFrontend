<template>
    <div class="container">
      <h1>联系我们</h1>
      <p class="contact-info">{{ contact }}</p>
      <form id="contact-form">
        <div class="form-row">
          <label for="name">您的姓名：</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-row">
          <label for="email">您的邮箱：</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="form-row">
          <label for="message">您的建议：</label>
          <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">提交</button>
      </form>
      <img src="../../assets/images/contact.jpg"  align="center" width="200px" alt="网络图片" title="图片示例"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'contact',
    data() {
      return {
        contact: '欢迎联系我们！如果您有任何问题、建议或合作意向，请随时与我们联系。我们的专业团队将竭诚为您服务，为您提供最优质的服务和解决方案。请致电：184-3515-6536，或者发邮件到20375091@buaa.edu.cn.您的反馈对我们非常重要，期待与您的沟通！',
      };
    },
    mounted() {
      this.myContact();
      this.setupFormSubmitHandler();
    },
    methods: {
      myContact() {
        // some code to retrieve contact information
      },
      setupFormSubmitHandler() {
        const form = document.getElementById('contact-form');
  
        form.addEventListener('submit', (event) => {
          event.preventDefault();
  
          const formData = new FormData(form);
  
          fetch('/submit-form', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            if (response.ok) {
              alert('表单提交成功！');
              form.reset();
            } else {
              alert('提交成功，非常感谢！');
            }
          })
          .catch(error => {
            alert('提交成功，非常感谢');
            console.error(error);
          });
        });
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
		h1{
		   font: 54px "微软雅黑"; /*设置字体和字体大小*/
		   margin:50px auto; /*设置元素外边距*/
		   font-weight: 500; /*设置字体粗细*/
		   text-align: center; /*设置文字居中*/
		   color: #5a7699; /*设置文字颜色*/
		   -webkit-animation:bounce 20s infinite;/*设置动画*/
       @-webkit-keyframes bounce{/*创建动画*/
		   0%,100%,20%,50%,80%{
		      -webkit-transform:translateY(0);
		   }40%{
		      -webkit-transform:translateY(-30px);
		   }60%{
		      -webkit-transform:translateY(-15px);
		   }
		}
		}
  p.contact-info {
    text-align: left;
    margin-bottom: 40px;
  }
  
  .form-row {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  textarea {
    min-height: 120px;
  }

  * {
    margin: 0;
    padding: 0
}

.from {
    overflow: hidden;
    position: relative;
}

.bgc {
    width: 100%;
}

.submit {
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-top: 150px;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
}

.form_title {
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
}

.form_input {
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    margin-top: 20px;
}

.inputs {
    height: 40px;
    width: 300px;
    border-radius: 5px;
    border: none;
    background-color: #eee;
    color: #666;
    padding-left: 20px;
}

.form_input span {
    width: 85px;
    align-self: center;
}

.btn_submit {
    align-self: center;
}

.btn {
    border: none;
    width: 80px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    background: #999;
    margin-top: 40px;
}

.btn:hover {
    background: #666;
}

.back {
    margin-left: 10px;
}

.home_href {
    border: none;
    width: 80px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    background: #FFD204;
}
</style>
