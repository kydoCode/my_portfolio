import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Home from './pages/home';
import NoNeHere from './pages/error';
import Blog from './pages/blog'; 
import Education from './pages/education';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Socials from './pages/socials';
import Testimonials from './pages/testimonials';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/socials' element={<Socials />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='*' element={<NoNeHere />} />
          </Routes>
      </Router>
    </div>
  );
}