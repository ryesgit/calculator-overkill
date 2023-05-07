import React from 'react'
import '../calculator.css'
const Input = () => {

  return (
    <>
        <div className="buttons aspect-square">
            <div className="operator" id="+"><p>+</p></div>
            <div className="operator" id="-"><p>-</p></div>
            <div className="operator" id="/"><p>/</p></div>
            <div className="operator" id="*"><p>*</p></div>
            <div className="numeral" id="1"><p>1</p></div>
            <div className="numeral" id="2"><p>2</p></div>
            <div className="numeral" id="3"><p>3</p></div>
            <div className="numeral" id="4"><p>4</p></div>
            <div className="numeral" id="5"><p>5</p></div>
            <div className="numeral" id="6"><p>6</p></div>
            <div className="numeral" id="7"><p>7</p></div>
            <div className="numeral" id="8"><p>8</p></div>
            <div className="numeral" id="9"><p>9</p></div>
            <div className="others" id="clear"><p>CLEAR</p></div>
            <div className="others" id="dot"><p>.</p></div>
            <div className="others" id="equal"><p>=</p></div>
            <div className="numeral" id="0"><p>0</p></div>
        </div>
    </>
  )
}

export default Input