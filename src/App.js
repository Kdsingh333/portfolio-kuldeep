import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from "./Pages/ProjectDisplay"
function App() {
  return (
    <div className='App'>
  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path='/project/:id' element={<ProjectDisplay/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
