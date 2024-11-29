import React from 'react'

const Modal = () => {
  return (
    <div>
        <div className='absolute inset-0 bg-gray-600 opacity-80'></div>
        <div className='absolute inset-40  bg-white p-10'>
            I'm a Modal
        </div>
    </div>
  )
}

export default Modal