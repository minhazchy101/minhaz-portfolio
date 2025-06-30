
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Components and Sections
import TheNavbar from './components/TheNavbar';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ProjectDetails from './Pages/ProjectDetails';
 

// Home page layout
function HomePage() {
  return (
    <>
      <TheNavbar />

      <main>
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
