import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Banner = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['Najlepsze wyjście', 'Najlepsza kariera', 'Rodzinna atmosfera'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const modifiedWords = [...words];
    modifiedWords[0] = words[currentWordIndex];
  return (
    <section className="jm-banner-area banner-hieght bg-default">
        <div className="container">
            <div className="jm-banner-1 pt-150">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                        <div className="jm-banner-img">
                            <img className="jm-banner-bg-1" src="assets/img/banner/banner-img-bg-1.png" alt=""/>
                            <img className="jm-banner-img-1" src="assets/img/banner/banner-21.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="jm-banner-content ml-45">
                            <div className="jm-banner-content-head">
                            <h2 className="jm-banner-content-title cd-headline rotate-1">
                                Praca w AODC to: <br />
                                <span className="cd-words-wrapper">
                                {modifiedWords.map((word, index) => (
                                    <b
                                    key={index}
                                    className={index === 0 ? 'is-visible' : 'is-hidden'}
                                    >
                                    {word}
                                    </b>
                                ))}
                                </span>
                            </h2>
                                <p>There are many variations passages of Lorem Ipsum Fasts <br/>
                                    by injected humour, or randomised words which... </p>
                            </div>
                            <div className="jm-about-content-btn-2">
                            <Link to="/jobPage" className="jm-theme-btn">Przeglądaj oferty</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner