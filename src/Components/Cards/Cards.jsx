import React from 'react'
import { AiFillDatabase } from "react-icons/ai";

const Cards = () => {
  return (
    <>
    <section>
  <h2>CZYM SIĘ ZAJMUJEMY</h2>
  <div className='service-container'>
  <div className='bluur2'></div>
  <div className='bluur'></div>
  <div className='service-card1'>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
        <h2>Projektowanie</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
        <h2>Wdrażanie</h2>
      </div>
    </div>
    </div>
    <div className='service-card1'>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
        <h2>Serwis</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
        <h2>Audyt</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
        <h2>Optymalizacja</h2>
      </div>
    </div>
    </div>
  </div>
  </section>
  </>
  )
}

export default Cards;