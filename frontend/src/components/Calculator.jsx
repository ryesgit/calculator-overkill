import React from 'react'
import Input from './Input.jsx'
import Output from './Output.jsx'
const Calculator = () => {
  return (
    <div className=' aspect-square w-1/2 md:w-auto md:h-1/2 mx-auto my-auto'>
        <Output />
        <Input />
    </div>
  )
}

export default Calculator