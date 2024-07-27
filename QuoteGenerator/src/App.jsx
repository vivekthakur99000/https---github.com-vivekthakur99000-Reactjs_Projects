import { useState } from 'react'
import './App.css'
import RandomQuotes from './components/RandomQuotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RandomQuotes/>
    </>
  )
}

export default App
