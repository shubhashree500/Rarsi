import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Service from './Components/Service/Service.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Term_Condition from './Components/TermCondition/Term_Condition.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/termCondition' element={<Term_Condition />} />
    </Routes>
  </Router>
)
