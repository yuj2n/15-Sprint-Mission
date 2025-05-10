import React from "react";

function Footer() {
  return (
    <footer>
      <div className="nav-bottom">
        <div className="left">
          <p className="codeit">©codeit - 2024</p>
        </div>
        <div className="center">
          <span className="policy"><a href="/privacy.html">Privacy Policy</a></span>
          <span className="faq"><a href="faq.html">FAQ</a></span>
        </div>
        <ul className="icon">
          <li>
            <a href="https://www.facebook.com/?locale=ko_KR">
              <img className="icon-img" src="/images/facebook.png" alt="Facebook" width="18" height="18" />
            </a>
          </li>
          <li>
            <a href="https://x.com/?lang=ko">
              <img className="icon-img" src="/images/twitter.png" alt="Twitter" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop">
              <img className="icon-img" src="/images/youtube.png" alt="YouTube" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img className="icon-img" src="/images/instagram.png" alt="Instagram" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;