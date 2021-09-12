import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          type: 'pie',
          radius: ['65%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            textStyle: {
              color:'white',
              fontSize: px(20)
            },
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show:false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.20, name: '女'},
            {value: 0.80, name: '男'}
          ]
        }
      ]
    }));
  }, []);


  return (
    <div className="年龄段分布-图一">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male"/>男
        <span className="female"/>女
      </div>
    </div>
  );
};
