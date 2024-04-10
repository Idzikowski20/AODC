import React from 'react'
import './style.css'

const Cards = () => {
  return (
    <section>
      <div className="recipe-container">
        <h1>Czym się zajmujemy</h1>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/defebc72-ea17-41c7-9bb6-70b3974a93b7"
                alt="recipe" />

              <div className="post-body">
                <div className="post-detail">
                  <p className="">Projektowanie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards;