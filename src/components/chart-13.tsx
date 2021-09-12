import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.14, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.17, name: '庆阳路'},
    {value: 0.21, name: '武都路'},
    {value: 0.07, name: '酒泉路'},
    {value: 0.06, name: '天水路'}
  ];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
        interval:0,
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
        }
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          margin: px(4),
          formatter(val) {
            return (val * 100).toFixed(0) + '%';
          }
        }
      },
      series: [
        {
          type: 'bar',
          data: data.map(i => i.value),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0a97fb'
          }, {
            offset: 1,
            color: '#1e35fa'
          }]),
        },
      ],

    }));
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};
