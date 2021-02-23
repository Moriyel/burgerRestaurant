import React from 'react'
import AddBurgerForm from './AddBurgerForm'
import EditBurgerForm from './EditBurgerForm';


const MenuAdmin = (props)=>{
  const exit = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <div className='menu-admin'>
      <div className='login-header'>
        <div className='avatar'>
          <img src='/images/avatar.png' alt='avatar' />
        </div>
        <button className='buttonLogout' onClick={()=>exit()}>Выйти</button>
      </div>
      <h2>Управление Меню</h2>
      {Object.keys(props.burgers).map(key => {
        return (
           <EditBurgerForm 
            key={key}
            index={key}
            burger={props.burgers[key]}
            updateBurger={props.updateBurger}
            deleteBurger={props.deleteBurger} 
          />
        )
      })}
      <AddBurgerForm addBurger = {props.addBurger} />
      <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
    </div>
  );
}

export default MenuAdmin