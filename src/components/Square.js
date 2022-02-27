import React from 'react'

const Square = ({value, onClick}) => {
   const clas= value ? `squares $(value)`: `square`;
  return (
    
    <button className={clas} onClick={onClick}>
        {value}
    </button>
    
  )
}

export default Square