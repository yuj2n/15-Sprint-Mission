import React from "react";

function MainBanner() {
  return (
    <article>
      <div className="banner">
        <div className="container">
          <div className="container-box">
            <div className="text">
              <h3>일상의 모든 물건을</h3>
              <h3>거래해 보세요</h3>
            </div>
            <div className="main-btn">
              <a className="font" href="/items.html">구경하러 가기</a>
            </div>
          </div>
          <img className="panda" src="/images/panda1.png" alt="Panda" />
        </div>
      </div>
    </article>
  );
}

export default MainBanner;