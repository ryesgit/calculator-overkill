import { useState } from 'react'
import Calculator from './components/Calculator.jsx';
import './App.css'
import Heading from './components/Heading.jsx';
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=' bg-slate-900 h-screen w-screen m-0 p-0 flex flex-col'>
        <Heading />
        <Calculator />
      </main>
    </>
  )
}

export default App
