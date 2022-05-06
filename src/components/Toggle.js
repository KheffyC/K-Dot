import React from 'react'


const Toggle = ({ title, products, value, handleChange }) => {



  return (
    <>
    <span className='ToggleName' style={{fontSize:'20px'}}>{ title }</span>
        <label className="switch">
            <input type="checkbox"
                value={value} 
                onChange = {handleChange}           
            />
        </label>
    </>
  )
}

export default Toggle