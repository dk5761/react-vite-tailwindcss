import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Offers from './components/Offers/Offers'
import Plan from './components/Plan/Plan'
import Rooms from './components/Rooms/Rooms'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />

      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default App
