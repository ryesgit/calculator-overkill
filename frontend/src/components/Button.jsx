const Button = ({className, content, children}) => {

    const handleButtonClick = (e) => {
        console.log(e.target.textContent);
    }

  return (
    <div onClick={handleButtonClick} className={className} id={content}>{children}</div>
  )
}

export default Button