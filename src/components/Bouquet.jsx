import React, { useState } from 'react'
import '../css/bouquet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faBacon, faFish, faHamburger, faCheese } from '@fortawesome/free-solid-svg-icons';
import item1 from '../assets/meat4.jpg'
import item2 from '../assets/meat5.jpg'
import item3 from '../assets/meat6.jpg'
import item4 from '../assets/meat7.jpg'
import item5 from '../assets/meat3.jpg'

const Bouquet = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabClickHandler = (index) => {
      setActiveTab(index);
    };
  
    const dishes = [
        item1,item2,item3,item4,item5
    ];
  return (
    <>

    <div className='bouquetContainer'>
        <div className='bouquetHeading'>
            <p className='bouquetHeading1'>Our Product Bouquet</p>
            <p className='bouquetHeading2'>Have a look our speciialy designed menu</p>
        </div>
    <div className="menu-container">
      <div className="tabs">
        <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => tabClickHandler(0)}>
          <FontAwesomeIcon icon={faDrumstickBite} className='bouquet-icon'/>
          <span>Chicken</span>
        </div>
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => tabClickHandler(1)}>
          <FontAwesomeIcon icon={faBacon} className='bouquet-icon'  />
          <span>Mutton</span>
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => tabClickHandler(2)}>
          <FontAwesomeIcon icon={faCheese} className='bouquet-icon'/>
          <span>Cheese</span>
        </div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => tabClickHandler(3)}>
          <FontAwesomeIcon icon={faFish}  className='bouquet-icon'/>
          <span>Fish</span>
        </div>
        <div className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => tabClickHandler(4)}>
          <FontAwesomeIcon icon={faHamburger} className='bouquet-icon'/>
          <span>Snacks</span>
        </div>
      </div>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div className={`dish ${activeTab === index ? 'active' : ''}`} key={index}>
            <img src={dish} alt={`Dish ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Bouquet