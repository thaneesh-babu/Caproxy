import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      CAPROXY
      </h1>
    </div>
  )
}

export default App
