import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import NewsContainer from './components/NewsContainer'

function App() {

  const[searchQuery, setSearchQuery] = useState("")

  return (
    <>
     <div>
      <NavBar setSearchQuery= {setSearchQuery} />
      <NewsContainer searchQuery = {searchQuery} />
     </div>
       
    </>
  )
}

export default App
