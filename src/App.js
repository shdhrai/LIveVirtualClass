import './App.css';
import Navbar from './Component/Navbar.js'
import Body from './Component/Body.js'
import HeaderImage from './Component/HeaderImage';
import Footer from './Component/Footer';
import Blog from './Component/Blog'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Gallery from './Component/Gallery';

function App() {
  return (
    <Router>
        <HeaderImage/>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={ <Body/>}/>
          <Route path='/home' element={ <Body/>}/>
          <Route path='/blogs' element={<Blog/>} />
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>

        <Footer/>
    </Router>
  );
}

export default App;
