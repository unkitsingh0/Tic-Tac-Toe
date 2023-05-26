import React from 'react'

function Square({value,onclick}) {
  return (
    <div onClick={onclick} className='square' >
        <h1>{value}</h1>
    </div>
  )
}

export default Square