import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=' bg-slate-900 h-screen w-screen m-0 p-0'>
        <Heading></Heading>
      </main>
    </>
  )
}

export default App
