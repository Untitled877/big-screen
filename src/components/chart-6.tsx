import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';
// @ts-ignore
import china from '../geo/china.json';

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'青海省': '#1cedd8', '甘肃省': '#bb2ff5', '新疆维吾尔自治区': '#17b1fd'};
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      geo: {
        map:'CN',
        itemStyle: {
          color: '#010D3D',
          borderColor: '#01A7F7',
        },
        emphasis: {
          label: {color: 'white', fontSize: px(22)},
          itemStyle: {
            areaColor: '#5470C6',
          }
        },
      },
      xAxis: {show:false},
      yAxis: {show:false},
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          color: colors['新疆维吾尔自治区'],
          data:[
            {
              name: '新疆',
              value: [84.9023,42.148]
            }
          ]
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          color: colors['甘肃省'],
          data:[
            {
              name: '甘肃',
              value: [103.73,36.03],
            }
          ]
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          color: colors['青海省'],
          data:[
            {
              name: '青海',
              value: [95.2402,35.4199]
            },
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="bordered 分布地">
      <h2>全兰州市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
          <span className="icon" style={{background: colors['新疆维吾尔自治区']}}/>新疆籍
          <span className="icon" style={{background: colors['青海省']}}/>青海籍
        </div>
        <div className="notes">此地图仅显示中国部分区域</div>
      </div>
    </div>
  );
};
