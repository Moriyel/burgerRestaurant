import React, { useEffect, useState } from 'react';
import Header from './Header';
import MenuAdmin from './MenuAdmin';
import Order from './Order';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import SignIn from './Auth/SignIn';



const Restaurant = (props)=>{
  const [burgers, setBurgers] = useState({})
  const [order, setOrder] = useState({})

  const restorLS = props.match.params.restaurantId

  useEffect(()=>{ 
    const ref = JSON.parse(localStorage.getItem(restorLS + 'Burgers'))
    const orders = JSON.parse(localStorage.getItem(restorLS))
    if(ref){setBurgers(ref)} 
    if(orders){setOrder(orders)} 
  }, [restorLS])

  useEffect(()=>{ 
    const ref = {...burgers}
    localStorage.setItem(restorLS + 'Burgers', JSON.stringify(ref)) 
  }, [burgers, restorLS])

  useEffect(()=>{ 
    const ref = {...order}
    localStorage.setItem(restorLS, JSON.stringify(ref)) 
  }, [order, restorLS])

  const addBurger = burger => {  
    const burgerS = {...burgers}
    burgerS[`burger${Date.now()}`]=burger
    setBurgers(burgerS)
       
  }

  const updateBurger = (key, updatedBurger)=> {
    const burgerS = {...burgers}
    //JОбновляем нужный бургер
    burgerS[key] = updatedBurger
    //Записать наш новый объект burgers в state
    setBurgers(burgerS)
  }

  const deleteBurger = key => {
    const prevBurgersDelet = { ...burgers}
    delete prevBurgersDelet[key]
    setBurgers(prevBurgersDelet)
  }

  const deleteFromOrder = key => {
    const orderDelet = { ...order}
    delete orderDelet[key]
    setOrder(orderDelet)
  }

  const loadSampleBurgers = () => {
    setBurgers(sampleBurgers)
  }

  const addToOrder = key => {
    const orders = {...order}
    orders[key] = orders[key] +1 || 1
    setOrder(orders)
  }

  return (
    <SignIn>
    <div className='burger-paradise'>
      <div className = 'menu'>
        <Header />
        <ul className='burgers'>
          {Object.keys(burgers).map(key => { 
            return (
                    <Burger 
                      key={key} 
                      index = {key}
                      addToOrder = {addToOrder}
                      details={burgers[key]}
                    />
            )
           })}
        </ul>

      </div>
      <Order 
        burgers = {burgers}
        order= {order}
        deleteFromOrder={deleteFromOrder} 
      />
      <MenuAdmin 
        addBurger={addBurger}
        loadSampleBurgers = {loadSampleBurgers}
        burgers = {burgers}
        updateBurger = {updateBurger}
        deleteBurger = {deleteBurger}
       />
    </div>
    </SignIn>
  );
}

export default Restaurant