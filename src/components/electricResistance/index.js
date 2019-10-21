import React from 'react'
import './index.less'
import Header from '../Header'
class ElectricResistance extends React.PureComponent {
  render () {
    return (
        <div className='electricResistance-wrap'>
           <Header />
           <div className="electricResistance-container">
             <h1 className="center">用于电动工具的碳膜电阻片/Carbon film resistor for power tools</h1>
             <h2 className="mgTop20">言成电子的碳膜电阻片在电动工具行业的应用已有10多年时间了，久经电动工具制造商的考验，以其高性能全面提升电动工具开关的品质。</h2>
             <h2 className="mgTop20">Our carbon film resistor in the power tool industry has been used for more than 10 years,with its high performance to comprehensively improve the quality of power tool switches.</h2>
             <div className="mgTop20" style={{'display':'flex','justifyContent':'center'}}>
               <img width="50%" src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E4%B8%9A%E5%8A%A1111.jpg" />
             </div>

             <div className="content mgTop20">
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
                        <h3 className="mgTop20">电阻值范围/Resistance range：1KΩ~2MΩ</h3>
                        <h3 className="mgTop20">电阻值偏差/Deviation：±10%</h3>
                        <h3 className="mgTop20">线性偏差/liner：±1%~±5%</h3>
                        <h3 className="mgTop20">耐久性/Durability ：20万-500万次</h3>
                    </div>
                </div>
                <div className="mgTop20">
                   <h1>产品应用/Application</h1>
                   <div className="mgLeft20">
                   <h3 className="mgTop20">电钻、 电动砂轮机、 电动扳手、电动螺丝刀、电锤和冲击电钻、混凝土振动器、电刨等。</h3>
                   <h3 className="mgTop20">Power tool speed control switch (electric drill, electric grinder, electric wrench and electric screwdriver, electric hammer and impact electric drill, concrete vibrator, electric planer.</h3>
                </div>
                <div style={{'display': 'flex','justify-content': 'space-around'}}>
                    <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E7%94%B5%E9%92%BB1.png" />
                    <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E7%94%B5%E9%92%BB2.png" />
                    <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E7%94%B5%E9%92%BB3.png" />
                </div>
            </div>
             
            </div>

           </div>
          
           
           



        </div>
    )
  }
}

export default ElectricResistance
