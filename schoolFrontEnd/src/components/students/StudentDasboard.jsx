import React, { useEffect, useState } from 'react'
import { useStudentContext } from '../../context/StudentContext'
import StudentApi from '../../services/api/students/StudentApi'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../router'

export default function StudentDasboard() {
  const {setAuthenticated, setUser,user, logout, authenticated} = useStudentContext()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    if(authenticated === true){
      StudentApi.getUser().then(({data})=>{
        setUser(data)
        setAuthenticated(true)
        setIsLoading(false)
      }).catch(
        () => {
          logout()
        }
      )
    }else{
      setIsLoading(true)
      navigate(LOGIN_ROUTE)
    }
  },[authenticated]) 
  if(isLoading){
    return <></>
  }
  return (
    
    <table className="table-auto ml-2">
      <thead>
        <tr>
          <th className="px-5 py-2">ID</th>
          <th className="px-5 py-2">Name</th>
          <th className="px-5 py-2">Email</th>
          <th className="px-5 py-2">Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-5 py-2">{user.id}</td>
          <td className="border px-5 py-2">{user.name}</td>
          <td className="border px-5 py-2">{user.email}</td>
          <td className="border px-5 py-2">{user.created_at}</td>
        </tr>
      </tbody>
    </table>
  )
}
