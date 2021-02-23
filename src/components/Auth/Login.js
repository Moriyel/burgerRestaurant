import React, { useState } from 'react'

const Login = (props)=>{
  const [name, setName] = useState('')
  return (
    <div className='login-container'>
      <nav className='login'>
        <h2>Авторизация</h2>
        <input  type='text' placeholder = 'Введите имя' value = {name}
        onChange={(event) => setName(event.currentTarget.value) }/><br/><br/>
        
        <button className='github' onClick={() => props.authenticate(name)}>
          Войти
        </button>
      </nav>

    </div>
  )
}

export default Login