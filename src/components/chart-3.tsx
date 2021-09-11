import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(0),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16),
        itemGap:px(5)
      },
      grid: {
        x: px(40),
        y: px(20),
        x2: px(20),
        y2: px(90),
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
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
          name: '抢劫',
          type: 'line',
          data: [0.15, 0.23, 0.07, 0.36, 0.12, 0.07, 0.09, 0.10]
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.23, 0.07, 0.19, 0.20, 0.04, 0.15, 0.32, 0.12]
        },
        {
          name: '盗窃2',
          type: 'line',
          data: [0.04, 0.12, 0.32, 0.15, 0.07, 0.25, 0.14, 0.36]
        },
        {
          name: '盗窃3',
          type: 'line',
          data: [0.02, 0.13, 0.01, 0.15, 0.14, 0.21, 0.07, 0.19]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.03, 0.21, 0.45, 0.14, 0.07, 0.13, 0.05, 0.36]
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);


  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
