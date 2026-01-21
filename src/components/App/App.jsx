import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import Navbar from '../Navbar/Navbar'

import CreateRecipeModal from '../CreateRecipeModal/CreateModal'


import './App.css'

function App() {

  return (
    <div className="page">
      <div className="page__content">
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/> 

        <CreateRecipeModal/>
      </div>
    </div>
  )
}

export default App
