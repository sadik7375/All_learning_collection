import { useState } from 'react'
import Registration from './Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'




import './App.css'
import Login from './Login'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/registration' element={<Registration></Registration>} ></Route>
     <Route path='/login' element={<Login></Login>}></Route>


   </Routes>
   
   
   
   
   </BrowserRouter>
    </>
  )
}

export default App
