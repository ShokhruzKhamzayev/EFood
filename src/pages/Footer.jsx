import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const el = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(el.current, {y: -200, opacity: 0, duration: 1, ease: 'power1', scrollTrigger: {
                trigger: '.footer-nav',
                start: 'top center'
            }})
        })
    }, [])
    return (
        <footer ref={el} id='contract'>
            <div className="footer-nav">
                <div className="list-footer">
                    <h2>EFood</h2>
                    <ul>
                        <li>
                            <div className="info-footer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </li>
                        <li>
                            <div className="info-footer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.353 5.04297C15.124 5.38697 16.508 6.77197 16.853 8.54297" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>0943833399</p>
                            </div>
                        </li>
                        <li>
                            <div className="info-footer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M16.9026 6.85107L12.4593 10.4641C11.6198 11.1301 10.4387 11.1301 9.59919 10.4641L5.11841 6.85107" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>support@efood.com</p>
                            </div>
                        </li>
                    </ul>
                    <div className="links-footer flex-align-center">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="list-footer">
                    <h3>Service</h3>
                    <ul>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Home delivery</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Menu</a></li>
                    </ul>
                </div>
                <div className="list-footer">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Our trusted partners</a></li>
                        <li><a href="#">New user FAQ</a></li>
                    </ul>
                </div>
                <div className="list-footer">
                    <h3>Supports</h3>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Terms condition</a></li>
                    </ul>
                </div>
                <div className="list-footer">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Dowload app</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">What's new</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer flex-align-center">
                <div className="copyright-terms">
                    <a href="#">© 2021 EFood - All rights reserved.</a>
                </div>
                <div className="links-bottom-footer flex-align-center">
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    )
}
