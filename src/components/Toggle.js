import React from 'react'

const Toggle = ({ filter }) => {
  return (
    <>
    <span className='ToggleName' style={{fontSize:'20px'}}>{filter}</span>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    </>
  )
}

export default Toggle