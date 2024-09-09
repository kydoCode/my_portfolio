import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NoNeHere from './pages/error';

export default function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoNeHere />} />
      </Routes>
    </Router>
    </>
  )
}