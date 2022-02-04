import React from 'react'
import './styles.css'

export default function UserCard({ user: { login, avatar_url }, onClick }) {
    return (
        <div className="user-card" onClick={onClick}>
            <img src={avatar_url} alt={login + 'avatar'} className="user-image" />
            <label className="username">{login}</label>
        </div>
    )
}
