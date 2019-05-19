import React from 'react'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Footer from './components/Footer'
import Main from './components/Main'
import News from './components/News'
import './index.less'
class App extends React.PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Swiper />
        <Main />
        <News />
        <Footer />
      </div>
    )
  }
}

export default App
