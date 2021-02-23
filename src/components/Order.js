import React from 'react'
import Shipment from './Shipment'
import {TransitionGroup, CSSTransition} from 'react-transition-group'


const Order = (props)=>{
  const orderIds = Object.keys(props.order)
  const total = orderIds.reduce((prevTotal, key) =>{
    const burger = props.burgers[key]
    const count = props.order[key]

    const isAvailable = burger && burger.status === 'available'

    if (isAvailable) {
      return prevTotal + burger.price * count
    }
    return prevTotal
  }, 0)

  const renderOrder = key => {
    const burger = props.burgers[key]
    const count = props.order[key]

    const isAvailable = burger && burger.status === 'available'
    if(!burger) return null
    if (!isAvailable) {
      return (
        <CSSTransition 
          classNames='order' 
          key={key} 
          timeout={{enter: 500, exit: 500}}
        >
          <li className='unavailable' key={key}>
            Извените, {burger ? burger.name : 'бургер'} временно недоступен
          </li>
        </CSSTransition>
      )  
    }

    return (
      <CSSTransition 
        classNames='order' 
        key={key} 
        timeout={{enter: 500, exit: 500}}
      >
      <li key={key}>
        <span>
          <TransitionGroup component='span' className='count'>
            <CSSTransition 
              classNames='count' 
              key={count} 
              timeout={{enter: 500, exit: 500}}
            >
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>
          шт. {burger.name}
          <span> {count * burger.price} ₽</span>
          <button 
            onClick={()=>props.deleteFromOrder(key)}
            className='cancellItem'>
              &times;
          </button>
        </span>
      </li>
      </CSSTransition>
    ) 
  }

  return (
    <div className='order-wrap'>
      <h2>Ваш заказ</h2>
      <TransitionGroup component='ul' className='order'>
        {orderIds.map(renderOrder)}
      </TransitionGroup>

      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className='nothingSelected'>
          Выберите блюда и добавьте к заказу
        </div>
      )}     
    </div>
  );
}

export default Order