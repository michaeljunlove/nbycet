import React from 'react'
import ReactSwipe from 'react-swipe'
import './index.less'

class SwiperContainer extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
        datalist:[
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '这里放图片对应的描述说明1'},
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '这里放图片对应的描述说明2'},
          {'imageUrl':'http://nbycet.oss-cn-shanghai.aliyuncs.com/s3.jpg','des': '这里放图片对应的描述说明3'}
        ]
    }
  }

  render () {
    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous:false,auto:3000}} key={this.state.datalist.length}>
      {
          this.state.datalist.map((item)=>
              <div key={item.id}>
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
