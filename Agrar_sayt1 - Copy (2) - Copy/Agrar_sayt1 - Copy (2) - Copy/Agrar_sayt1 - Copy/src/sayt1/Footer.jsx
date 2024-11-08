import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
<footer>
  <div className="footer-container">
    <div className="footer-section about">
      <h3>Toshkent davlat agrar universiteti</h3>
      <p>Bizning universitet haqida qisqacha ma'lumot. TDAU O'zbekiston agrar sohasining yetakchi ta'lim muassasalaridan biridir.</p>
    </div>
    <div className="footer-section links">
      <h3>Foydali havolalar</h3>
      <ul>
        <li><a href="#">Biz haqimizda</a></li>
        <li><a href="#">Xizmatlar</a></li>
        <li><a href="#">Bog'lanish</a></li>
        <li><a href="#">Yangiliklar</a></li>
      </ul>
    </div>
    <div className="footer-section contact">
      <h3>Aloqa</h3>
      <p><i className="fas fa-map-marker-alt" /> Toshkent, O'zbekiston</p>
      <p><i className="fas fa-phone" /> +998 71 123 45 67</p>
      <p><i className="fas fa-envelope" /> info@tdau.uz</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2024 Toshkent davlat agrar universiteti. Barcha huquqlar himoyalangan.</p>
  </div>
</footer>


    </>
  )
}

export default Footer