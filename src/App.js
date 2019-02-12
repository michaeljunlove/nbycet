import React from 'react'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends React.PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Swiper />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
