import React from 'react'
import './index.less'
import Header from '../Header'
class Potentiometer extends React.PureComponent {
  render () {
    return (
        <div>
            <Header />
            <div className='Potentiometer-wrap'>
                <div className="center">
                  <h1>高精密电位器/High precision potentiometer</h1>
                </div>
                <h2 className="mgTop20">言成电子的高精密电位器的原材料为进口碳浆材料和高性能基板，通过全自动生产线进行制造，产品批量一次性好，品质稳定、可靠。</h2>
                <h2 className="mgTop20">Our potentiometer raw materials for the import of carbon pulp materials and high-performance substrate, through the automatic production line for manufacturing, product batch good, stable quality, reliable.</h2>


                <div className="center mgTop20">
                 <img width="80%" src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E4%B8%9A%E5%8A%A122.jpg" />
                </div>

                <div className="mgTop20">
                    <h1>产品优势/product superiority:</h1>
                    <div className="mgLeft20">
                        <h3 className="mgTop20">1.一致性高、线性稳定、耐久性长等。</h3>
                        <h3 className="mgTop20">High resistance value consistency, linear stability and long durability.</h3>

                        <h3 className="mgTop20">2.产品符合Rosh、3C、CE、TUV、SQ mark等相关标准。</h3>
                        <h3 className="mgTop20">The products comply with Rosh, 3C, CE, TUV, SQ mark and other relevant standards</h3>

                        <h3 className="mgTop20">3.言成电子的专家团队可随时为你提供系统、专业的整体方案服务。</h3>
                        <h3 className="mgTop20">Our expert team can provide you with systematic and professional overall solution service at any time.</h3>
                    </div>
                </div>

                <div className="mgTop20">
                <h1>主要技术性能/Parameter ：</h1>
                <div className="mgLeft20">
                                <h3 className="mgTop20">全阻值(Total resistance): 10 KΩ ±20%</h3>
                                <h3 className="mgTop20">噪声（Sliding noise）：小于300mV（Less than 300 mV）</h3>
                                <h3 className="mgTop20">绝缘阻（Insulation resistance）：100MΩ以上（More than 100MΩ）</h3>
                                <h3 className="mgTop20">滑动行程（Total Sliding Travel）：8mm±0.5mm</h3>
                                <h3 className="mgTop20">使用温度范围（Operating temperature range）：-40℃ ~ +125℃</h3>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Potentiometer
