import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';
// @ts-ignore
import china from '../geo/china.json';

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '新疆维吾尔自治区': '#06E1EE'};
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: {show:false},
      yAxis: {show:false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '新疆维吾尔自治区', value: 100},
          ],
          itemStyle: {
            color: colors['新疆维吾尔自治区'],
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            color: colors['青海省'],
          }
        },
      ],

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
