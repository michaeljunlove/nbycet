import React from 'react'
import ReactSwipe from 'react-swipe'
import './index.less'

class SwiperContainer extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
        datalist:[
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '精益求精、开拓创新、强化质量、持续改进'},
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '精益求精、开拓创新、强化质量、持续改进'},
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '精益求精、开拓创新、强化质量、持续改进'}
        ]
    }
  }

  render () {
    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous:false,auto:3000}} key={this.state.datalist.length}>
      {
          this.state.datalist.map((item,index)=>
              <div key={index}>
                   <img src={item.imageUrl} style={{width:'100%'}} />
                   <div className='carousel-des'>{item.des}</div>
              </div>
          )
      }
      </ReactSwipe>
    )
  }
}

export default SwiperContainer
