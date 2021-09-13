import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart13 = () => {
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
  const divRef = useRef(null);
  const myChart = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const random = Math.random()*(0.25-0.02) + 0.02;
      const newData = [
        {value: 0.08, name: '东岗路'},
        {value: 0.06, name: '段家滩'},
        {value: random-0.01, name: '雁北'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: random+0.02, name: '庆阳路'},
        {value: 0.21, name: '武都路'},
        {value: 0.07, name: '酒泉路'},
        {value: random+0.01, name: '天水路'}
      ];
      updateData(newData);
    }, 3000)
  }, []);
  const updateData = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          interval:0,
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
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    updateData(data);
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};
