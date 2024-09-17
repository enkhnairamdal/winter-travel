import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        모험 뉴스레터에 가입하고 저희 최고의 휴가 제안을 받아보세요.
        </p>
        <p className='footer-subscription-text'>
        Та хэзээ ч захиалгаа цуцалж болно.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Таны имэйл'
            />
            <Button buttonStyle='btn--outline'>Бүртгүүлэх</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Бидний тухай</h2>
            <Link to='/sign-up'>Яаж ажилладаг вэ</Link>
            <Link to='/'>Туршлага</Link>
            <Link to='/'>Ажлын байр</Link>
            <Link to='/'>Хөрөнгө оруулагчид</Link>
            <Link to='/'>Үйлчилгээний нөхцөл</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Бидэнтэй холбогдох</h2>
            <Link to='/'>Холбоо барих</Link>
            <Link to='/'>Тусламж</Link>
            <Link to='/'>Зорьж буй газрууд</Link>
            <Link to='/'>Ивээн тэтгэх</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Видеонууд</h2>
            <Link to='/'>Видеог илгээх</Link>
            <Link to='/'>Төлөөлөгчид</Link>
            <Link to='/'>Агентлаг</Link>
            <Link to='/'>Нөлөөлөгч</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Нийгмийн сүлжээ</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
