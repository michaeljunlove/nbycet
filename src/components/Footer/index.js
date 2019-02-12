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
                    <li>地址：宁波市海曙区石碶镇东杨村新时代工业园区</li>
                    <li>邮箱：chengfei@nb-yancheng.com</li>
                    <li>电话：0574-8386631，135-86913950</li>
                </ul>
                </div>
                <div className='right'>
                这里放微信图片
                </div>
            </div>
            <div className='copyright'>Copyright © 2019 Form Ningbo Yancheng Eletronic Technology All rights reserved.</div>
        </div>
    )
  }
}

export default Footer
