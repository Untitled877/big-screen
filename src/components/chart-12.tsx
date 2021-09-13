import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart12 = () => {
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
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {
          color: '#588ac7'
        },
        itemWidth: px(10),
        itemHeight: px(10),
        itemGap: px(10),
        formatter(name) {
          const value = data.filter(i => i.name === name)[0]?.value;
          return name + ' ' + (value*100).toFixed(0) + '%';
        }
      },
      series: [
        {
          type: 'pie',
          radius: '75%',
          label:{show:false},
          center:['60%', '50%'],
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>

  );
};
