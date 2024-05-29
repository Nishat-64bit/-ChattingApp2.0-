import React from 'react'
import LoginRightImg from '../../../assets/LoginRightImg.png'
const LoginRight = () => {
  return (
    <>
      <div className='w-[45%] h-[100vh]'>
      <picture>
        <img src={LoginRightImg} alt={LoginRightImg} className=' min-w-full h-screen' />
      </picture>
      </div>
    </>
  )
}

export default LoginRight
