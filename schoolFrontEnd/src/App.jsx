import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import React from 'react';
import StudentContext from './context/StudentContext.jsx';
import { ThemeProvider } from './components/theme-provider.jsx';
import { Toaster } from "@/components/ui/toaster"
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <StudentContext>
        <RouterProvider router={router} />
      </StudentContext>
      <Toaster />
    </ThemeProvider>
    </>
  )
}

export default App
