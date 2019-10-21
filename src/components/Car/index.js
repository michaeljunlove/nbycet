import React from 'react'
import './index.less'
import Header from '../Header'
class Car extends React.PureComponent {
  render () {
    return (
        <div>
           <Header />
           <div className='car-wrap'>
            <h1 className="center">用于汽车行业的碳膜电阻片</h1>
            <h1 className="center">Carbon film resistor used in Automobile industry</h1>
            <div>
                <h1>产品优势/product superiority:</h1>
                <div className="mgLeft20">
                        <h3 className="mgTop20">1.言成电子的碳膜电阻片，严选PCB供应商，应用高品质进口碳浆材料，使得产品具有阻值一致性高、线性稳定、耐久性长等优点。</h3>
                        <h3 className="mgTop20">Applies high quality imported carbon paste material, so that the product has the advantages of high resistance value consistency, linear stability and long durability.</h3>

                        <h3 className="mgTop20">2.产品符合Rosh、3C、CE、TUV、SQ mark等相关标准。</h3>
                        <h3 className="mgTop20">The products comply with Rosh, 3C, CE, TUV, SQ mark and other relevant standards</h3>

                        <h3 className="mgTop20">3.言成电子的专家团队可随时为你提供系统、专业的整体方案服务。</h3>
                        <h3 className="mgTop20">Our expert team can provide you with systematic and professional overall solution service at any time.</h3>
                </div>
           </div>

           <div className="mgTop20">
        
                <h1>主要技术性能/Parameter:</h1>
                <div className="mgLeft20">
                <h3 className="mgTop20">电阻值偏差/Deviation：±10%</h3>
                <h3 className="mgTop20">线性偏差/liner：±1%~±5%</h3>
                <h3 className="mgTop20">耐久性/Durability ：20万-500万次</h3>
                <h3 className="mgTop20">电阻温度系数/TCR：±800PPM（temperature at -25℃~+80℃）</h3>   
                </div>
           </div>

           <div className="mgTop20">
                <h1>产品应用/Application:</h1>
                <div className="mgLeft20">

                    <h3 className="mgTop20">汽车行业零部件（汽车空调执行器、节气门角度传感器、汽车音量调节器、雨刮器开关、汽车座椅调节器、汽车天窗开关和后视镜调节开关等）</h3>
                    <h3 className="mgTop20">Auto parts (air conditioner actuator,throttle Angle sensor, volume regulator, wiper switch, seat regulator, sunroof switch and rearview mirror adjustment switch, etc.)</h3>
                </div>

                
           </div>

           </div>

           


        </div>
    )
  }
}

export default Car
