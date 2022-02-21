import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route,Routes} from 'react-router-dom'
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
