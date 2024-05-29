import React from 'react'
import LoginLeft from './LoginCompo/LoginLeft'
import LoginRight from './LoginCompo/LoginRight'
const Login = () => {
  return (
    <div className='flex justify-between items-center'>
      <LoginLeft/>
      <LoginRight/>
    </div>
  )
}

export default Login
