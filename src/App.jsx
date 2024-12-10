import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import Contact from './pages/Contact';
import Feature from './components/Feature';

function App() {
  
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Feature />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
     </Router>
    </>
  )
}

export default App
