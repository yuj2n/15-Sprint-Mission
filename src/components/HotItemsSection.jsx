import React from "react";

function HotItemsSection() {
  return (
    <section>
      <div className="section top">
        <div className="content">
          <img className="section-img" src="/images/main1.png" alt="Hot Items" width="579" height="444" />
          <div className="content-box">
            <p>Hot item</p>
            <div className="text-box">
              <h3 className="hot">인기 상품을 확인해 보세요</h3>
              <p id="check" className="info">
                가장 HOT한 중고거래 물품을<br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotItemsSection;