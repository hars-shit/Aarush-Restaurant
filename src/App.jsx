
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Routing/About'
import Blog from './Routing/Blog'
import Contacts from './Routing/Contacts'
import Services from './Routing/Services'
import Shop from './Routing/Shop'
function App() {
 return(
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/about' element={<About />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='/services' element={<Services />} />
    <Route path='/shop' element={<Shop />} />
  </Routes>
  </BrowserRouter>
  {/* <MainPage /> */}
  
  </>
 )
}

export default App
