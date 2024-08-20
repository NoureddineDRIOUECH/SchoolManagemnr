import React, { createContext, useContext, useState } from 'react'
import StudentApi from '../services/api/students/StudentApi'
export const StudentStateContext = createContext({
    user: {},
    authenticated : false,
    setUser: () => {},
    logout: () => {},
    login: (values) => {},
    setAuthenticated: () => {},
    setToken: () => {}
}

)
export default function StudentContext({children}) {
    const [user,setUser]= useState({
        name: 'Noureddine xxxx',
        email: 'johndoe@gmail.com',
        created_at: 'io32oi'
    })
    const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem("AUTHENTICATED"))
    const logout = async () => {
        setUser({})
        setAuthenticated(false)
    }
    const login = async (values) => {
        // await StudentApi.getCsrfToken()
        return await StudentApi.login(values)
    }
    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED',isAuthenticated)
    }
    const setToken = (token) => {
        window.localStorage.setItem('token',token)
        
    }
  return (
    <>
        <StudentStateContext.Provider value={{
            user,
            login,
            authenticated,
            setUser,
            setToken,
            setAuthenticated,
            logout
        }
        }>
            {children}
        </StudentStateContext.Provider>
    </>
  )
}
export const useStudentContext = () => useContext(StudentStateContext)
