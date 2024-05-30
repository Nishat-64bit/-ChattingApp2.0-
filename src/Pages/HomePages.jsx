import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const HomePages = () => {
  //  fire base hook for authentication
const auth = getAuth();
// ? ====================== useEffect Hook start =========================== 
// useEffect Hook : reload hoawwar age se verified registerd user ke home page dokabe 
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      // currentuser je matro registration ba direct google theke log in korte cie tar info jante
      // console.log(user.emailVerified); aeta use koren 
    })
  },[])
// ? ====================== useEffect Hook End =========================== 
  return (
    <div>
      This is Home pages
    </div>
  )
}

export default HomePages
