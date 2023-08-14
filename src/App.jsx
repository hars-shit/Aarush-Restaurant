
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Routing/About'
import Blog from './Routing/Blog'
import Contacts from './Routing/Contacts'
import Services from './Routing/Services'
import Shop from './Routing/Shop'
import Coffee from './components/Category/Coffee'
import Breakfast from './components/Category/Breakfast'
import Delivery from './components/Category/Delivery'
import Dining from './components/Category/Dining'
import Dinner from './components/Category/Dinner'
import Drinks from './components/Category/Drinks'
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
    <Route path='/coffee' element={<Coffee />} />
    <Route path='/breakfast' element={<Breakfast />} />
    <Route path='/delivery' element={<Delivery />} />
    <Route path='/diningtable' element={<Dining/>} />
    <Route path='/dinner' element={<Dinner />} />
    <Route path='/drinks' element={<Drinks />} />
  </Routes>
  </BrowserRouter>
  {/* <MainPage /> */}
  
  </>
 )
}

export default App
