import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-content">
          <a href="/" className="logo-box">
            <img className="logo" src="/images/logo.png" alt="Logo" width="45" height="45" />
            <img src="/images/pandamarket.png" alt="Panda Market" height="51" />
          </a>
          <a href="/login.html" className="login">로그인</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;