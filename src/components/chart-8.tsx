import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ['#33a4fa','#f46064','#856bed','#f38e1c', '#1cdb7c'];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            textStyle: {
              color:'white',
              fontSize: px(20)
            },
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show:false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.08, name: '10-20'},
            {value: 0.09, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.27, name: '40-50'},
            {value: 0.33, name: '50-60'},
          ]
        }
      ]
    }));
  }, []);


  return (
    <div className="年龄段分布-图二">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}}/>10-20
        <span style={{background: colors[1]}}/>20-30
        <span style={{background: colors[2]}}/>30-40
        <span style={{background: colors[3]}}/>40-50
        <span style={{background: colors[4]}}/>50-60
      </div>
    </div>
  );
};
