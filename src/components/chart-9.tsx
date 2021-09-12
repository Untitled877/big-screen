import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: '#f39f14',
      legend: {
        bottom: px(-10),
        textStyle: {color: '#7fa5c6'},
        itemWidth: px(30),
        itemHeight: px(16),
        itemGap:px(5)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', '28', '38', '48', '58', '68', '78'],
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
          name: '盗窃',
          type: 'line',
          data: [0.2, 0.22, 0.28, 0.36, 0.26, 0.19, 0.13, 0.11],
          symbol: 'circle',
          symbolSize: px(10),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#f39f14'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        },
      ],

    }));
  }, []);

  return (
  <div className="年龄段分布-图三">
    <h3>犯罪年龄趋势图</h3>
    <div ref={divRef} className="chart">

    </div>
  </div>
  );
};
