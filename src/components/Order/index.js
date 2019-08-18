import React from 'react'
import { Timeline, Input,Button } from 'antd';
import 'antd/dist/antd.css';
import './index.less'
import Header from '../Header'
class Order extends React.PureComponent {
    construction(){
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit (){

    }
  render () {

    return (
        <div className='order-wrap'>
           <Header />
           <div className="container">
              <div className="input-wrap">
                <div className="left"><Input placeholder="请输入订单编号" /></div>
                <div className="right"><Button size="large" type="primary" icon="search">搜索</Button></div>
              </div>
        

             
           </div>
           <div className="center">

           <Timeline>
                <Timeline.Item>2019-07-01 配件准备中</Timeline.Item>
                <Timeline.Item>2019-07-02 生产中</Timeline.Item>
                <Timeline.Item>2019-08-01 生产完成</Timeline.Item>
            </Timeline>
           </div>

          
          
           
           



        </div>
    )
  }
}

export default Order
