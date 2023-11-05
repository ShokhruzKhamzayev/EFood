import React, { useLayoutEffect, useRef } from 'react'
import google_play from '../assets/google-play.png'
import app_store from '../assets/app-store.png'
import dowload_content from '../assets/dowload-content.png'
import gsap from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default function Dowload() {
  const el = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.left-dowload', { x: -200, duration: .8, opacity: 0, ease: 'power2', scrollTrigger: {
        trigger: '.left-dowload',
        start: 'top 50%'
      } })
      gsap.from('.right-dowload', {
        x: 200, duration: .8, opacity: 0, ease: 'power2', scrollTrigger: {
          trigger: '.right-dowload',
          start: 'top 20%'
        }
      })
    }, el.current)
  }, [])
  return (
    <div className='dowload-section flex-align-center' ref={el}>
        <div className="left-dowload">
            <div className="header-section">
                  <h1>Download  Our <span>Mobile App</span></h1>
            </div>
            <p>It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</p>
            <div className="links-dowload flex-align-center">
                  <a href="#">
                    <img src={google_play} alt="google play link" />
                  </a>
                  <a href="#">
                    <img src={app_store} alt="app store link" />
                  </a>
            </div>
        </div>
        <div className="right-dowload">
            <img src={dowload_content} alt="screenshots from app" />
        </div>
    </div>
  )
}
