import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
  const data = [40, 30, 25, 16, 23, 13, 18, 27, 32];
  const divRef = useRef(null);
  const myChart = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = Array(9).fill(1).map(i => Math.random()*100);
      updateData(newData);
    }, 3000)
  }, []);
  const updateData = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          margin: px(8),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          margin: px(8)
        }
      },
      series: [{
        type: 'bar',
        data: data,
      }]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    updateData(data);
  }, []);


  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
