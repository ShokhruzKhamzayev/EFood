import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import comment_content from '../assets/comment-content.png'


import { Autoplay, Scrollbar, Pagination } from 'swiper/modules';


export default function Comment() {
  return (
    <div className="comment">
        <div className="header-section">
              <h1>What Our Client Are <span>Saying</span></h1>
        </div>
        <div className="comment-blog">
                 <div className="till-tablet">
                  <Swiper
                      slidesPerView={2}
                      centeredSlides={false}
                      slidesPerGroupSkip={0}
                      grabCursor={true}
                      keyboard={{
                          enabled: true,
                      }}
                      breakpoints={{
                          769: {
                              slidesPerView: 2,
                              slidesPerGroup: 2,
                          },
                      }}
                      autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                      }}
                      scrollbar={true}
                      pagination={{
                          clickable: true,
                      }}
                      modules={[Autoplay, Scrollbar, Pagination]}
                      className="mySwiper"
                  >
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                  </Swiper>
                 </div>
              <div className='for-phone'>
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      pagination={{
                          clickable: true,
                      }}
                      autoplay={{
                        delay: 2500,
                          disableOnInteraction: false,
                      }}
                      breakpoints={{
                          '@0.00': {
                              slidesPerView: 1,
                              spaceBetween: 10,
                          },
                          '@0.75': {
                              slidesPerView: 2,
                              spaceBetween: 20,
                          },
                          '@1.00': {
                              slidesPerView: 3,
                              spaceBetween: 40,
                          },
                          '@1.50': {
                              slidesPerView: 4,
                              spaceBetween: 50,
                          },
                      }}
                      modules={[Pagination, Autoplay]}
                      className="mySwiper"
                  >
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className='img-commentor'>
                          <img src={comment_content} alt="photo of commentor" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="comment-item">
                              <p>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                              <div className="author">
                                  <h3>Anglina Jole</h3>
                              </div>
                          </div>
                      </SwiperSlide>
                  </Swiper>
              </div>
        </div>
    </div>
  )
}
