"use client"

import React, { useState } from 'react';
import { User } from '../../interface/user';


export const Login = () => {
  const [user, setUser] = useState<User>({ 
    name: {firstName: '', lastName: ''},
    email: '', 
    password: '', 
    role: ''
   });

   const validateUser = (user: User) => {
    if (user.email && user.password) {
      return true;
    }
    if (user.email === '' && user.password === '') {
      alert('Please login with a valid email and password...');
    }
    if (user.email === '') {
      alert('Email is required');
    }
    if (user.password === '') {
      alert('Password is required');
    }
   };

   return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={user.email} 
            onChange={e => setUser({...user, email: e.target.value})} 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={user.password} 
            onChange={e => setUser({...user, password: e.target.value})} 
          />
        </div>
        <button 
          type="submit" 
          onClick={e => {
            e.preventDefault();
            if (validateUser(user)) {
              alert('User is valid');
            }
          }}
        >
          Login
        </button>
      </form>
    </div>
   );
};