import './App.css';

// import components
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  // URL should have your Heroku URL for your back end, make sure you include the trailing slash
  const URL = "https://iy-portfolio-project.herokuapp.com/"
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={URL}/>}/>
        <Route path='/about' element={<About URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
