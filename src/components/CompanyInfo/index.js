import React from 'react'
import './index.less'
import Header from '../Header'
class Company extends React.PureComponent {
  render () {
    return (
        <div className='Company-wrap'>
           <Header />
           <div>
            <header>宁波言成电子科技有限公司</header>
            <div className='eng-header'>（Ningbo Yancheng Electronic Technology Co.,Ltd.）</div>
           
            <div className='licheng'>
              <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E5%8F%91%E5%B1%95%E5%8E%86%E7%A8%8B.png" />
            </div>
            
            <div className='content'>宁波言成电子科技有限公司成立于2012年，是一家专业生产高精度碳膜电阻、陶瓷电阻和电位器的高科技企业。公司位于宁波市海曙区区石碶镇东杨村新时代工业园。
            我们以 "精益求精、开拓创新、强化质量、持续改进"为的质量方针，建立并实施IATF16949质量管理体系。自成立以来，坚持以客户需求为中心，以多维创新为驱动，不断突破相关产品的技术瓶颈，
            不断响应客户地个性需求，赢得了广大客户的好评和信任。
            </div>
            
            <div className='content'>Ningbo Yancheng Electronic Technology Co.,Ltd.is founded in 2012，
              in the production of high-precision carbon film resistors, ceramic 
              resistors and potentiometers.Our company is located New ERA Industrial 
              Park , No.5, Chuangqing Road, Haishu District , Ningbo City, Zhejiang 
              Province, China.We implement IATF16949 quality management system .
              Since Our company inception, adhere to customer demand as the center.
            </div>
            
            <div className='content'>
            截至2019年，公司汇聚员工30人，其中博士专家1人，硕士专家2人。拥有2条高精度的碳膜电阻印刷线、4条全自动电位器自动生产线、多种自动化检测设备，并自主研发了电阻线性测试仪、耐久性测试仪等，确保了产品生产效率和品质。目前，我们所生产的印刷电阻和电位器，已经广泛应用在大众、马自达、吉利、长城、比亚迪、博世等品牌产品上，建立了长期稳定、持续的合作。2018年，公司销售额已经突破1500万元（人民币）。
            </div>
            <div className='content'>
            In 2019 our company has 30 employees, including 1 doctor and 2 master .and  has two high-precision carbon film resistance printing lines, four automatic potentiometer automatic production lines, a variety of automatic testing equipment, and independently developed resistance linear tester, durability tester, to ensure the production efficiency and quality of products.At present, our company’s resistance and potentiometer have been widely used in Volkswagen, Mazda, geely, Great Wall, byd, Bosch and other brand products, and have established long-term stable and continuous cooperation.In 2018, our company's sales volume has exceeded 15 million yuan (RMB).
            </div>
            <div className='content'>
            我们的文化：用言成电子的产品，促进世界变得更有效率和美好（使命）；到2025年，成为中国最受客户信任的领军型基础电子技术生产企业（愿景）；基于“言出必行，行之必果”的核心文化，推进诚之信、诚之真、诚之善、诚之美、诚之法的价值理念，让以客户为中心的信念融于每个行动和每道工序，从而与客户共同可持续发展。
            </div>
            <div className='content'>
            Our mission:to promote a more efficient and better world with our electronic products;
            Our vision :By 2025, we will become the most trusted leading manufacturer of basic electronic technology in China ;
            </div>
            <div className='content'>Our value:Based on the core culture of "doing what you say ".</div>
            
            {/* <div className='content'>公司的产品:</div>

            <div className='content'>Our company’s products:</div>
            
            <div className='content'>1、碳膜电阻（印刷电阻）resistor+carbon pcb</div>

            <div className='product1'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/product1.png' /></div>

            <div className='content'>2、电位器 potentiometer resistance</div>

            <div className='product2'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/product2.png' /></div>

            <header>购买浆料的使用说明</header>
            <div className='eng-header'>paste application</div>

            <div className='content'>1.用途 application</div>

            <div className='content'>
            本公司产品的主要原材料为浆料和各种基材。本次采购日本公司的浆料，是为了研发出电阻线性更优、寿命更长、稳定性更好的印刷电阻，以提高产品的市场竞争力。

            </div>

            <div className='content'>
            Paste and various substrates is our company product’s main raw materials.so,we need the high quality paste to  develop better linear resistance, longer service life and better stability resistor.

            </div>

            <div className='content'>2.今后的规划和需求 plan and need</div>

            <div className='content'>目前，仅购买一瓶进行研发，若通过测试，可进入批量采购。
            </div>

            <div className='content'>We need a bottle of Copper paste for research and development.than will be purchased in bulk when passes the test.
            </div> */}

            {/* <div className='product3'>
              <img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/product3.png' />
            </div> */}

            {/* <div className='content'>营业执照：</div>
            <div className='product4'>
              <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7.png" />
            </div> */}


            {/* <header>言成电子企业IATF16949证书 （IATF16949 certificate）</header>
            <div className='product4'>
              <img src="https://nbycet.oss-cn-shanghai.aliyuncs.com/%E8%AF%81%E4%B9%A6.png" />
            </div> */}





           </div>
        </div>
    )
  }
}

export default Company
