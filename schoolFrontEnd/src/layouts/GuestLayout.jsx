import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { STUDENT_DASHBORD_ROUTE } from '../router'
import { useStudentContext } from '../context/StudentContext'

export default function GuestLayout() {
  const context = useStudentContext()
  const navigate = useNavigate(); 
  useEffect(() =>{
    if(context.authenticated){
      navigate(STUDENT_DASHBORD_ROUTE)
    }
  },[])
  return (
    <>
    <NavBar/>
    <main className='container'>
        <Outlet/>
    </main>
    </>
  )
}
