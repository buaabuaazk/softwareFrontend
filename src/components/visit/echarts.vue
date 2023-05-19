<template>
    <div>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'echarts',
    data() {
      return {};
    },
    mounted() {
      this.myEcharts()
    },
    methods: {
      myEcharts() {
        // 基于准备好的 dom，初始化 echarts 实例
        const myChart = this.$echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        const option = {
          title: {
            text: 'ECharts 统计图'
          },
          tooltip: {},
          // legend: {
          //   data: ['销量']
          // },
          xAxis: {
            data: ["类型1", "类型2", "类型3", "类型4", "类型5", "类型6"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
  };
  </script>