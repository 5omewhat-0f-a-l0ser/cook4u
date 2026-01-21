import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import Navbar from '../Navbar/Navbar'

import './App.css'

function App() {

  return (
    <div className="page">
      <div className="page__content">
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/> 
      </div>
    </div>
  )
}

export default App
