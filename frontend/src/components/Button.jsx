import { useContext, useState } from "react";
import NumberContext from "../context/numberContext.js";

const Button = ({className, content, children}) => {

    const { setNumbers, setNumber, number } = useContext(NumberContext);

    const handleButtonClick = (e) => {

        if(className == 'operator') {
            console.log(number);
            // Add this number to the numbers to do operations to.
            setNumbers(prev => prev.push(number))

            // Clear number for new number setting
            setNumber('');
        } else if (className == 'numeral') {
            setNumber(prev => prev + e.target.textContent);
            console.log(number);
        }
    }

  return (
    <div onClick={handleButtonClick} className={className} id={content}>{children}</div>
  )
}

export default Button;