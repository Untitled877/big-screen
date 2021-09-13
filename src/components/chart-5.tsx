import React from 'react';

export const Chart5 = () => {
  return (
    <div className="bordered 战果数对比">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
        <tr>
          <th>类型</th><th>破案数</th><th>抓获嫌疑人</th>
          <th>并串案件</th><th>现勘录入</th><th>视帧录入</th>
          <th>合成案件数</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2015</td><td>2</td><td>3</td><td>50</td>
          <td>22</td><td>400</td><td>600</td><td>1500</td>
        </tr>
        <tr>
          <td>2016</td><td>3</td><td>4</td><td>20</td>
          <td>100</td><td>500</td><td>800</td><td>2000</td>
        </tr>
        <tr>
          <td>2017</td><td>4</td><td>5</td><td>10</td>
          <td>50</td><td>550</td><td>750</td><td>1800</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
