import React from 'react'

export default function Footer() {
    return (
        <footer>
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
                    <div className="links-footer">

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
