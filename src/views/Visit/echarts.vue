<template>
    <div>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'echarts',
    data() {
      return {
        data:{
          MathNum: "",
          ChineseNum: "",
          OSNum: "",
          EnglishNum: "",
          OthersNum: "",
        }
      };
    },
    mounted() {
      this.myEcharts()
    },
    created(){
      this.getSubjectData();
    },
    methods: {
      myEcharts() {
        // 基于准备好的 dom，初始化 echarts 实例
        const myChart = this.$echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        const option = {
          title: {
            text: '资源统计图'
          },
          tooltip: {},
          // legend: {
          //   data: ['销量']
          // },
          xAxis: {
            data: ["math", "Chinese", "OS", "English", "Others"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [this.data.MathNum, this.data.ChineseNum, this.data.OSNum, this.data.EnglishNum, this.data.OthersNum]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      async getSubjectData(){
        const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "math"
        });
        this.data.MathNum = res.resource_info_list;
        const { data: res1 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "Chinese"
        });
        this.data.ChineseNum = res1.resource_info_list;
        const { data: res2 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "English"
        });
        this.data.EnglishNum = res2.resource_info_list;
        const { data: res3 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "OS"
        });
        this.data.OSNum = res3.resource_info_list;
        const { data: res4 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "Others"
        });
        this.data.OthersNum = res4.resource_info_list;
      } 
    },
  };
  </script>