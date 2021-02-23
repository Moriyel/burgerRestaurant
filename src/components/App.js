import React, { useState } from 'react'
import restaurants from '../sample-restaurants'

function App(props) {
  const [display, setDisplay] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const selectedRestaurant = (rest) => {
    const {title, url} = rest;
    setDisplay(false)
    setTitle(title)
    setUrl(url)
  }
  console.log(display, title, url)
  return (
    <div className = 'restaurant_select'>
      <div className = 'restaurant_select_top'>
        <div className = 'restaurant_select_top-header font-effect-outline' onClick ={() => setDisplay(!display)}>{title ? title : 'Выбери ресторан'}</div>

        <div className = 'arrow_picker'>
          <div className = 'arrow_picker-up'></div>
          <div className = 'arrow_picker-down'></div>
        </div>
      </div>

      {display ? (<div className='restaurant_select_bottom'>
        <ul>
          {restaurants.map(rest=> <li onClick={() => selectedRestaurant(rest)} key = {rest.id}> {rest.title}</li>)}
        </ul>
      </div>) : null}
      {title && !display ? <button onClick={()=> props.history.push(`/restaurant/${url}`)}>Перейти в ресторан</button>: null}  
    </div>
      
  );
}

export default App;
