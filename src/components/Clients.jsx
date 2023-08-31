import React from 'react'
import "../css/clients.css"
import client1 from '../assets/brandBasha.webp'
import client2 from '../assets/DreamsEvents.webp'
import client3 from '../assets/justComfart.webp'
import client4 from '../assets/prakrit.webp'

const Clients = () => {
  return (
    <div className='clients'>
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
    </div>
  )
}

export default Clients