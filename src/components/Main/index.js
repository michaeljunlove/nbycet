import React from 'react'
import './index.less'
class Main extends React.PureComponent {
  render () {
    return (
      <div className='main'>
         <div className='title'>Services</div>
         <div className='sub-title'>业务范围</div>
         <div className='main-product'>
            <a className='product'>
              <img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/%E4%B8%9A%E5%8A%A11.jpg' />
              <div className='product-name-wrap'>
                <div>高精密碳膜电阻</div>
                <div className='product-name'>了解详情</div>
              </div>
            </a>
            <a className='product'>
              <img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/%E4%B8%9A%E5%8A%A12.jpg' />
              <div className='product-name-wrap'>
                <div>电位器</div>
                <div className='product-name'>了解详情</div>
              </div>
            </a>
            <a className='product'>
              <img src='https://nbycet.oss-cn-shanghai.aliyuncs.com/%E4%B8%9A%E5%8A%A13.jpg' />
              <div className='product-name-wrap'>
                <div>其他</div>
                <div className='product-name'>了解详情</div>
              </div>
            </a>
         </div>
        </div>
    )
  }
}

export default Main
