import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="section3">
          <Chart5/>
        </section>
        <section className="section4">
          <Chart6/>
          <div className="bordered">
            <h2>兰州市犯罪人员年龄段分布</h2>
            <Chart7/>
          </div>
        </section>
        <section className="bordered section5"/>
      </main>
      <footer>
        大屏数据平台利用大数据技术采集犯罪作案信息是一套实时监控的数据系统Copyright&copy2017兰州市公安局
      </footer>
    </div>
  );
};
