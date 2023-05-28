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
      this.getSubjectData();
    },
    // created(){
    //   this.getSubjectData();
    // },
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
            data: [this.data.MathNum, 2, 3, 4, 5]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      async getSubjectData(){
        const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "math"
        });
        if(res.code === 400)
          this.data.MathNum = 0;
        else
          this.data.MathNum = res.resource_info_list.length;
        console.log(this.data.MathNum)
        const { data: res1 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "Chinese"
        });
        if (res1.code === 400)
          this.data.ChineseNum = 0;
        else
          this.data.ChineseNum = res1.resource_info_list.length;
        const { data: res2 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "English"
        });
        if(res2.code === 400)
          this.data.EnglishNum = 0;
        else
        this.data.EnglishNum = res2.resource_info_list.length;
        const { data: res3 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "OS"
        });
        if(res3.code === 400)
          this.data.OSNum = 0;
        else
          this.data.OSNum = res3.resource_info_list.length;
        const { data: res4 } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
          "subject": "Others"
        });
        if(res4.code === 400)
          this.data.OthersNum = 0;
        else
          this.data.OthersNum = res4.resource_info_list.length;
        this.myEcharts();
      } 
    },
  };
  </script>