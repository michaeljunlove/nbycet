import React from 'react'
import './index.less'
class Header extends React.PureComponent {
  render () {
    return (
        <div className='header'>
            <div className='left'>
                <a className='logo' href='index.html'></a>
            </div>
            <div className='right'>
              <ul>
                  <li><a href='index.html'>首页</a></li>
                  <li><a href="#main">产品</a></li>
                  <li><a href="order.html">订单服务</a></li>
                  <li><a>解决方案</a></li>
                  <li><a href='company.html'>企业介绍</a></li>
                  <li><a>关于我们</a></li>
              </ul>
            </div>
        </div>
    )
  }
}

export default Header
