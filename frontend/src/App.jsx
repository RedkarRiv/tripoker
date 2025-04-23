import { Link, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'  
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/contact">Contact</Link> 
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    </>
  )
}

export default App