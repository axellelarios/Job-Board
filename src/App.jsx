import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Jobs from './components/jobs'

import './App.css'

function App() {
  return (
    <>
      <Header title={"The Job Board"}/> 

      <main>
        <Jobs/> 
      </main>

      <Footer/>     
    </>
  )
}

export default App
