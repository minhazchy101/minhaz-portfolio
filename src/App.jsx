
import './App.css'
import TheNavbar from './components/TheNavbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Introduction from './sections/Introduction'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
 

  return (
    <>
    
    {/* navbar */}
    <TheNavbar></TheNavbar>

    {/* main */}
    <main>
    <Introduction></Introduction>

    <About></About>

    <Skills></Skills>

    <Projects></Projects>

    <Contact></Contact>

    </main>


    {/* footer */}
    
     
     
    </>
  )
}

export default App
