import React, { useLayoutEffect, useRef } from 'react'
import '../css/style.css'
import main_content from '../assets/Scooter Guy.png'

import gsap from 'gsap'


export default function Home() {
    const tl = useRef(), 
        el = useRef()
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current =
                gsap.timeline()
                .from('header', { y: -200, duration: .7, ease: 'back' })
                .from('header li', { x: -200, ease: 'back', opacity: 0, stagger: .2 })
                .from('.right-main', { x: 200, duration: .5, ease: 'back', opacity: 0, ease: 'back' })
                .from('.left-main', { x: -200, duration: .5, ease: 'back', opacity: 0, ease: 'elastic'})
        }, el.current)
    }, [])
   
  return (
    <div className='home' ref={el}>
        <header className='flex-align-center'>
            <div className="logo">
                <h1>EFood</h1>
            </div>
            <div className="nav-and-btns flex-align-center">
                <nav className='for-pc' >
                      <ul className='flex-align-center'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Top Cities</a></li>
                        <li><a href="#">Contract</a></li>
                    </ul>
                </nav>
                <div className="btns-menu flex-align-center">
                    <label htmlFor="search">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                              <ellipse cx="9.7666" cy="9.84078" rx="8.98856" ry="8.88424" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M16.0183 16.4814L19.5423 19.9555" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                    </label>
                      <svg className='for-pc' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M1 1.17578L3.08 1.5316L4.04301 12.8715C4.12001 13.7976 4.90301 14.5082 5.84301 14.5053H16.752C17.649 14.5072 18.41 13.8549 18.537 12.9772L19.486 6.49532C19.592 5.77083 19.083 5.09872 18.351 4.99395C18.287 4.98505 3.414 4.98011 3.414 4.98011" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12.375 8.63337H15.1479" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4043 17.9316C5.70527 17.9316 5.94824 18.1729 5.94824 18.4696C5.94824 18.7673 5.70527 19.0085 5.4043 19.0085C5.10333 19.0085 4.86035 18.7673 4.86035 18.4696C4.86035 18.1729 5.10333 17.9316 5.4043 17.9316Z" fill="#363853" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6846 17.9316C16.9856 17.9316 17.2296 18.1729 17.2296 18.4696C17.2296 18.7673 16.9856 19.0085 16.6846 19.0085C16.3836 19.0085 16.1406 18.7673 16.1406 18.4696C16.1406 18.1729 16.3836 17.9316 16.6846 17.9316Z" fill="#363853" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <button className='flex-align-center for-pc'>Sign Up</button>
                </div>
            </div>
        </header>
        <main className='flex-align-center main-section'>
            <div className="left-main">
                  <h1>super fast <span>Food delivery</span> service</h1>
                  <p>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
                  <div className="btns-main">
                      <a href="#">Explore Food</a>
                      <a href="#">Download App</a>
                  </div>
            </div>
            <div className="right-main">
                <img src={main_content} alt="scooter guy" />
            </div>
        </main>
    </div>
  )
}
