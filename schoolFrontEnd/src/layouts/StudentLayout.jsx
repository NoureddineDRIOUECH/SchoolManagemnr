import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../router';
import { useEffect } from 'react';
import StudentNavBar from './StudentNavBar';
import { useStudentContext } from '../context/StudentContext';
import { StudentSideBar } from './StudentSideBar';

export default function StudentLayout() {
  const navigate = useNavigate(); 
  const context = useStudentContext()
  useEffect(() =>{
    if(!context.authenticated){
        navigate(LOGIN_ROUTE)
    }
  },[])
  return (
    <>    
    <StudentNavBar />
    <main className='mx-auto px-10 mt-5'>
      <div className="flex">
        <div className='w-100 md:w-1/4'>
          <StudentSideBar />
        </div>
        <div className='continer mx-auto w-100'>
          <Outlet/>
        </div>
      </div>
    </main>
    </>
  )
}
