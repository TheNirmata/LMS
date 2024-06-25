'use client';
import React, { useEffect, useState } from 'react';
import { User } from '../../../interface/user.d';



export default function SignInPage(): JSX.Element {
  const [user, setUser] = useState<User>({ 
    firstName: '',
    lastName: '',
    email: '', 
    password: '', 
    role: ''
   });


   const validateUser = async () => {
      try { 
        const response = await fetch('http://127.0.0.1:8000/api/test/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        if (data.status === 200){
          alert('Successfully connected to server');
        }
      }catch(error) {
        console.error(error);
      }
   };
   
    useEffect(() => {
      validateUser();
    }, []);
    
   return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
