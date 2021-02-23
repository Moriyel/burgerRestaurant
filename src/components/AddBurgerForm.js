import React, { useRef } from 'react'


const AddBurgerForm = (props)=>{
  const nameRef = useRef()
  const priceRef = useRef()
  const statusRef = useRef()
  const descRef = useRef()
  const imageRef = useRef()


  const createBurger = event=> {
    event.preventDefault()
    const burger = {
          name: nameRef.current.value,
          price: +(priceRef.current.value || 0),
          status: statusRef.current.value,
          desc: descRef.current.value,
          image: imageRef.current.value
          }
          props.addBurger(burger)
          event.currentTarget.reset()
  }
  return (
    <form className='burger-edit' onSubmit={createBurger}>
      <input ref={nameRef} name='name' type='text' placeholder ='Name' autoComplete='off'/>
      <input ref={priceRef} name='price' type='text' placeholder ='Price' autoComplete='off'/>
      <select ref={statusRef} name='status' className='status'>
        <option value='available'>Доступно</option>
        <option value='unavailable'>Убрать из меню</option>
      </select>
      <textarea ref={descRef} name='desc' placeholder='Desc'/>
      <input ref={imageRef} name='image' type='text' placeholder ='Image' autoComplete='off'/>
      <button type='submit'>Добавить в Меню</button>
    </form>
  );
}

export default AddBurgerForm