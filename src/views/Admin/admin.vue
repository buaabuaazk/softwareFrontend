<template>
 
	<div class="admin">
		<div class="admin-nav">
      		<adminNav />
    	</div>
  		<router-view></router-view>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height: 252px">
					<div class="user-info">
						<div class="user-info-cont">
							<div class="user-info-name">{{ name }}</div>
						</div>
					</div>
					<div class="user-info-list">
						<p>欢迎！我的管理员！</p>
						<el-icon size="80"><User /></el-icon>
					</div>
				</el-card>
				<el-card shadow="hover" style="height: 252px">
					<template #header>
						<div class="clearfix">
							<span>资源详情</span>
						</div>
					</template>
					语文
					<el-progress :percentage="79.4" color="#42b983"></el-progress>
					数学
					<el-progress :percentage="14" color="#f1e05a"></el-progress>
					英语
					<el-progress :percentage="5.6"></el-progress>
					OS
					<el-progress :percentage="1" color="#f56c6c"></el-progress>
				</el-card>
			</el-col>
			<el-col :span="16">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<el-icon class="grid-con-icon"><User /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">184</div>
									<div>用户访问量</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<el-icon class="grid-con-icon"><ChatDotRound /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">21</div>
									<div>系统消息</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<el-icon class="grid-con-icon"><Goods /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">62</div>
									<div>学习资源数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<div>
					<TodoList :todoList="todoList" />
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
import { reactive } from 'vue';
import adminNav from '../../components/adminHeader/adminNavbar.vue'
import time from '../../components/adminHeader/time.vue'
import TodoList from './todoList.vue';
	export default{
		components:{
			adminNav,
			TodoList,
			time
		},
		data() {
    return {
      todoList: [
        {
          title: '好好学习软件工程',
          status: false
        },
        {
          title: '今天要写100个bug',
          status: false
        },
        {
          title: '今天要改100个bug',
          status: false
        },
        {
          title: '接受小王的管理员申请',
          status: false
        },
        {
          title: '警告乱发学习资源的用户',
          status: true
        },
        {
          title: '处理异常评论',
          status: true
        }
      ]
    };
  }
};
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/admin-background.png") no-repeat;
  background-size: cover;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}
.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-top: 58px;
	margin-bottom: 20px;
}

.admin-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
