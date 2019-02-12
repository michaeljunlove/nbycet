import React from 'react'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Footer from './components/Footer'

class App extends React.PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Swiper />
        <Footer />
      </div>
    )
  }
}

export default App
