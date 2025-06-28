
import './App.css'
import TheNavbar from './components/TheNavbar'
import About from './sections/About'
import Introduction from './sections/Introduction'

function App() {
 

  return (
    <>
    
    {/* navbar */}
    <TheNavbar></TheNavbar>

    {/* main */}
    <main>
    <Introduction></Introduction>

    <About></About>

    </main>


    {/* footer */}
    
     
     
    </>
  )
}

export default App
