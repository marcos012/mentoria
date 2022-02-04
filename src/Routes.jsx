import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Counter from './pages/Counter/Counter'
import UserDetail from './pages/UserDatail/UserDetail'
import UsersList from './pages/UsersList/UsersList'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="/user/:username" element={<UserDetail />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    )
}
