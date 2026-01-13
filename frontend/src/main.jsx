import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import StudentsPage from './pages/studentspage.jsx'
import TeachersPages from './pages/TeachersPages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="student" element={<StudentsPage />} />
        <Route path="teacher" element={<TeachersPages/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
