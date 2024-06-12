
import './App.css'

import Header from './components/header'
import Footer from './components/footer'
import Jobs from './components/jobs'


function App() {
  return (
    <>
      <Header title={"The Job Board"}/> 

      <main>
        <div class="container">
           <Jobs/> 
        </div>
      </main>

      <Footer/>     
    </>
  )
}




export default App;