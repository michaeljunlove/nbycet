import React from 'react'
import './index.less'
class Footer extends React.PureComponent {
  render () {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='left'>
                <ul>
                    <li>联系方式：宁波市言成电子科技有限公司</li>
                    <li>地址：浙江省宁波市海曙区创青路5号新时代工业园区</li>
                    <li>邮箱：chengfei@nb-yancheng.com</li>
                    <li>电话：0574-8386631，18069031172</li>
                </ul>
                </div>
                <div className='right'>
                </div>
            </div>
            <div className='copyright'>Copyright © 2019 Form Ningbo Yancheng Eletronic Technology All rights reserved.</div>
        </div>
    )
  }
}

export default Footer
