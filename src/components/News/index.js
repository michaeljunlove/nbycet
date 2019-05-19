import React from 'react'
import './index.less'
class News extends React.PureComponent {
  render () {
    return (
        <div className='news'>
          <div className='title'>News</div>
          <div className='sub-title'>行业资讯</div>
          <div className='sub-title'>了解最新行业新闻动态</div>
          <div className='news-detail'>
            <a className='news-detail-href' href='http://www.sohu.com/a/228606138_445189' target="_blank">
              <div className='news-item'>
                <div className='left'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/new1.jpeg' /></div>
                <div className='right'>
                  <div className='news-item-title'>【速递】华东电路板展5/16登场 建构绿色PCB 安全生产周 </div>
                  <div className='news-item-content'>华东电路板暨表面贴装展览会(CTEX 2018)为华东地区最具指针性，专注电路板智能制造领域的专业展会，设备商展示面积接近八成，更有高新材料于现场展示，每年吸引超过3万名的专业观众、逾30家板厂组团进场参观。</div>
                </div>
              </div>
            </a>

            <a className='news-detail-href' href='http://www.npc.gov.cn/npc/xinwen/2018-11/05/content_2065669.htm' target="_blank">
              <div className='news-item'>
                <div className='left'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/news2.jpg' /></div>
                <div className='right'>
                  <div className='news-item-title'>中华人民共和国循环经济促进法 </div>
                  <div className='news-item-content'>2008年8月29日第十一届全国人民代表大会常务委员会第四次会议通过　根据2018年10月26日第十三届全国人民代表大会常务委员会第六次会议《关于修改〈中华人民共和国野生动物保护法〉等十五部法律的决定》修正</div>
                </div>
              </div>
            </a>

            
          </div>

          <div className='news-detail'>

            <a className='news-detail-href' href='http://www.sohu.com/a/252657388_99899550' target="_blank">
              <div className='news-item'>
                <div className='left'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/new3.jpg' /></div>
                <div className='right'>
                  <div className='news-item-title'>2018年PCB上市公司业绩综述</div>
                  <div className='news-item-content'>至2018年8月31日，中国PCB上市公司2018年上半年业绩已公告完。本文收集了在国内A股和港交所上市的33家从事PCB相关业务的公司2018年上半年业绩的主要经营数据。</div>
                </div>
              </div>
            </a>

            <a className='news-detail-href' href='http://resistor.ic-ceca.org.cn/page7?article_id=69' target="_blank">
              <div className='news-item'>
                <div className='left'><img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/news4.jpg' /></div>
                <div className='right'>
                  <div className='news-item-title'>《电阻电位器商情》2019年第二期</div>
                  <div className='news-item-content'>转载于：中国电子元器件行业协会电阻电位器分会 作者：pmo536ee3</div>
                </div>
              </div>
            </a>

          </div>
        </div>
    )
  }
}

export default News
