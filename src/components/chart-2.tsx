import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import value from '*.png';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {
          show: false,
        },

      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红谷区公安局',
          '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
        axisLabel: {
          margin: px(8),
          interval: '0',
          formatter(val) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '破案排名',
          type: 'bar',
          data: [9, 7, 9, 5, 7, 6, 6, 5, 2],
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
        },
        {
          name: '破案排名',
          type: 'bar',
          data: [10, 9, 8, 5, 7, 5, 7, 3, 2],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }));
  }, []);


  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
        <div className="legend">
          <span className="first" />破案排名1
          <span className="second" />破案排名2
        </div>
    </div>
  );
};
