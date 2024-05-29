import React from 'react'
import RegestrationPages from './Pages/RegestrationPages'
import LoginPage from './Pages/LoginPage';
import HomePages from './Pages/HomePages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<RegestrationPages/>}/>  {/* add to root RegestrationPages */}
    <Route path='reg' element={<RegestrationPages/>}/>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='home' element={<HomePages/>}/>
    
    <Route path='*' element = {<h1>Error page</h1>}/> {/* suppose  jodi amr contact page na theke tar por navigate korle Erro page leka  dekabe  */}
    </>
  )
)


const App = () => {
  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default App
