  <template>
    <div style="min-height: 100vh; height:auto; border: 1px ;hidden #121313 ;z-index: 0 ;margin-top: 10px;display: flex;">
      <div style="width: 250px; height: 100%; margin-left: 250px;">
        <!--引入自定义左侧菜单栏-->
        <!-- <router-view name="leftNav" style="opacity:0.7"></router-view> -->
        <LeftNav />
      </div>
      <div style="width: 600px; min-height: 100vh; height: auto;margin-left: 10px;background-color:#E9EEF3; display: flex; flex-direction: column">
        <div style="border-bottom: groove; justify-content: center; display: flex; align-items: center;height:60px">
          <h2>账号与密码</h2>
        </div>
        <el-collapse @change="handleChange" accordion>
          <!-- 修改用户名 -->
          <el-collapse-item title="修改昵称" name="1" style="background-color:#E9EEF3;">
        <div>
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改用户名</p></div>
        </div>
        <div style="display: flex;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="nickname1" placeholder="请输入新的用户名" class="input"
      clearable
      rows="1"
      show-word-limit
      maxlength="10"
      type="textarea"/>
        </div>
        <div style="width:200px ;margin-top: 10px;">
          <button class="button" @click="changeUsername">确认</button>
        </div>
        </el-collapse-item>
        <!-- 修改邮箱 -->
        <el-collapse-item title="修改邮箱" name="4" style="background-color:#E9EEF3;">
          <div>
            <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改邮箱</p></div>
          </div>
          <div style="display: flex;margin-top:20px;justify-content: center;">
            <el-icon style="font-size: 24px;"><Edit /></el-icon>
            <el-input v-model="email1" placeholder="请输入新的邮箱" class="input"
        clearable
        rows="1"
        show-word-limit
        maxlength="10"
        type="textarea"/>
          </div>
          <div style="width:200px ;margin-top: 10px;">
            <button class="button" @click="changeEmail">确认</button>
          </div>
          </el-collapse-item>
        <!-- 修改邮箱 -->
        <el-collapse-item title="修改签名" name="5" style="background-color:#E9EEF3;">
          <div>
            <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改签名</p></div>
          </div>
          <div style="display: flex;margin-top:20px;justify-content: center;">
            <el-icon style="font-size: 24px;"><Edit /></el-icon>
            <el-input v-model="signature1" placeholder="请输入新的签名" class="input"
            clearable
            rows="1"
            show-word-limit
            maxlength="10"
            type="textarea"/>
          </div>
          <div style="width:200px ;margin-top: 10px;">
            <button class="button" @click="changeSignature">确认</button>
          </div>
          </el-collapse-item>
        <!-- 修改密码 -->
        <el-collapse-item title="修改密码" name="2" style="background-color:#E9EEF3;">
        <div style="margin-bottom: 10px;">
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改密码</p></div>
        </div>
        <div>
          <div style="width: 400px;display:flex;margin-top:20px;justify-content: center;">
            <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="oldPassword" placeholder="请输入原来的密码" class="input"
          clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
          </div>
        </div>
        <div style="width: 400px; display:flex;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="newPassword" placeholder="请输入新的密码" class="input"
          clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
        </div>
        <div style="display: flex; width: 400px;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><check /></el-icon>
          <el-input v-model="IsNewPassword" placeholder="确认密码" class="input"
      clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
        </div>
        <div style="width:200px ;margin-top: 10px;">
          <button class="button" @click="changePassword">确认</button>
        </div>
        </el-collapse-item>

        <!-- 修改头像 -->
        <el-collapse-item title="修改头像" name="3" style="background-color:#E9EEF3;">
        <div>
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改头像</p></div>
        </div>
        <div style="width:200px">
        <el-upload
          ref="formData1"
          :auto-upload="true"
          :http-request="upload"
          accept="image/*"
        >
          <template #trigger>
            <button class="button">选择图像</button>
          </template>   
          <div style="width:200px ;margin-top: 10px;">
            <button class="button" @click="changeImage">确认</button>
          </div>
        </el-upload>
        </div>
        </el-collapse-item>

        </el-collapse>
      </div>
    </div>
  </template>
  
  <script>
  import LeftNav from './components/leftNav.vue';
  import { mapState, mapMutations } from 'vuex';
  import axios from 'axios';

  export default {
    data(){
      return{
        url: require('../../../assets/images/5.jpg'),
        username: "",
        oldPassword: "",
        newPassword: "",
        IsNewPassword: "",
        formData1: new FormData(),
        nickname1: '',
        nickname: '',
        email: '',
        email1:'',
        role: '', 
        experience: '',
        level: '',
        avatar: '', 
        signature: '',
        signature1: '',
      }
    },
    components:{
      LeftNav
    },
    computed: {
    ...mapState([
      'count',
       'username_glo',
       'token_glo'
     ])
    },
    methods:{
      ...mapMutations([
        'increment',
        'decrement'
      ]),
      getToken_glo(){
        return this.token_glo;
      },
      getUsername_glo(){
        return this.username_glo;
      },
      getInfo()
      {
          axios.get('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/info',{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              this.username = response.data.username
              const code = response.data.code
              this.nickname = response.data.data.nickname
              this.email = response.data.data.email
              this.signature = response.data.data.signature
              this.avatar = response.data.data.avatar
              console.log(response.data)
              const error = response.data.error
              console.log(error)
              console.log(code)
              console.log(this.nickname)
              console.log(this.email)
            })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
      changeUsername(){
        console.log(this.nickname)
        axios.put('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/change_info',{
          "nickname": this.nickname1,"email": this.email,"signature": this.signature
        },{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.nickname1)
              if(code === 200){
                return this.$message.success("修改成功");
              }
            })    
      },
      changeEmail(){
        console.log(this.nickname)
        axios.put('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/change_info',{
          "nickname": this.nickname,"email": this.email1,"signature": this.signature
        },{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.nickname1)
              if(code === 200){
                return this.$message.success("修改成功");
              }
            })    
      },
      changeSignature(){
        console.log(this.nickname)
        axios.put('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/change_info',{
          "nickname": this.nickname,"email": this.email,"signature": this.signature1
        },{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.nickname1)
              if(code === 200){
                return this.$message.success("修改成功");
              }
            })    
      },
      changePassword(){
        if(this.newPassword===this.IsNewPassword){
        axios.put('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/change_password',{
          "old_password": this.oldPassword,"new_password": this.newPassword
        },{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.newPassword)
              if(code === 200){
                return this.$message.success("修改成功");
              }
              else if(code === 10202){
                return this.$message.error("密码错误");
              }
              else if(code === 10200){
                return this.$message.error("请求方式错误");
              }
              else if(code === 10206){
                return this.$message.error("请登录");
              }
              else{
                return this.$message.error("用户被删除或异常");
              }
            })
          }
          else{
            return this.$message.error("确认密码错误");
          }    
      },
      changeImage(){
        axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/change_avatar',this.formData1 ,{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(code)
              if(code === 200){
                return this.$message.success("修改成功");
              }
              else if(code === 10206){
                return this.$message.error("请登录");
              }
              else{
                return this.$message.error("用户被删除或异常");
              }
            })    
      },
      async upload(params) {  
        this.formData1.append('avatar', params.file)
        // console.log(this.$root.globalData.token_global);
        console.log(this.formData1.get('avatar'))
      },
    },
    created() {
      this.getInfo();
    }
  };
  </script>

  <style lang="less" scoped>
  .el-menu-vertical-demo{
    height: 100vh
  }
  .button {
    /* 基础样式 */
  display: inline-block;
  padding: 12px 24px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: left;
  /* 背景色和文本颜色 */
  background-color: #222;
  color: #fff;
  
  /* 悬停效果 */
  &:hover {
  background-color: #0056b3;
  }
  
  /* 激活效果 */
  &:active {
  background-color: red;
  }
  
  /* 禁用效果 */
  &:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  }
  }
  </style>