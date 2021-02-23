import React, { useEffect, useState } from 'react'
import Login from './Login'

const SignIn = (props)=>{

  const [user, setUser] = useState('')

  useEffect(()=>{
    const refer = localStorage.getItem('user')
    if(refer){setUser(refer)} 
  }, [])

  useEffect(()=>{
    const refUser = user
    localStorage.setItem('user', refUser) 
  }, [user])

  const authenticate = (name) => {
      if(!name){ alert('Введите имя')}
      setUser(name)
  }
  

  if(!user) {
    return <Login authenticate={authenticate} />
  }
  return (
    props.children
  )
}

export default SignIn