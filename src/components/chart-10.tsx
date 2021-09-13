import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
  const data = [40, 24, 22, 19, 32];
  const divRef = useRef(null);
  const myChart = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = Array(5).fill(1).map(i => Math.random()*(50 - 10) + 10);
      updateData(newData);
    }, 3000)
  }, []);
  const updateData = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: ['入室抢劫', '当街盗窃', '团伙诈骗', '刑事案件', '民事案件'],
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
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#2034f9'
            }, {
              offset: 1,
              color: '#04a1ff'
            }]),
          }
        }
      }]
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
