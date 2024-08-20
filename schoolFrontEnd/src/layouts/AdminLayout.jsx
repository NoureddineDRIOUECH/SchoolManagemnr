import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'
import StudentNavBar from './StudentNavBar'
import { AdminSideBar } from './AdminSideBar'

export default function AdminLayout() {
  return (
    <>    
    <StudentNavBar />
    <main className='mx-auto px-10 mt-5'>
      <div className="flex">
        <div className='w-100 md:w-2/12 border rounded-l mr-2'>
          <AdminSideBar />
        </div>
        <div className='w-100 md:w-10/12 border rounded-l mr-2'>
          <Outlet/>
        </div>
      </div>
    </main>
    </>
  )
}
