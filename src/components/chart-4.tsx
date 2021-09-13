import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart4 = () => {
  const data = [0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.18, 0.24, 0.27, 0.26, 0.25, 0.21, 0.14];
  const divRef = useRef(null);
  const myChart = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = Array(13).fill(1).map(i => Math.random()*0.1);
      updateData(newData);
    }, 3000)
  }, []);
  const updateData = (data) => {
    myChart.current.setOption(createEchartsOptions({
      grid: {
        x: px(40),
        y: px(20),
        x2: px(20),
        y2: px(40),
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {
          show: true,
          lineStyle: {
            color: '#083970',
          }
        },
        axisLabel: {
          margin: px(8),
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#083970'
          }
        },
        axisLabel: {
          margin: px(4),
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          type: 'line',
          data: data,
          symbol: 'circle',
          symbolSize: px(10),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        },
      ],
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    updateData(data);
  }, []);

  return (
    <div className="bordered 时段分析">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
