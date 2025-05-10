import React from "react";

function SearchSection() {
  return (
    <section>
      <div className="section">
        <div id="opposite" className="content">
          <div className="reverse content-box">
            <p>Search</p>
            <div className="text-box">
              <h3 className="title reverse">구매를 원하는 <span>상품을 검색하세요</span></h3>
              <p id="find" className="info">
                구매하고 싶은 물품은 검색해서<br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <img className="img section-img" src="/images/main2.png" alt="Search Items" width="579" height="444" />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;