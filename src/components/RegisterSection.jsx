import React from "react";

function RegisterSection() {
  return (
    <section>
      <div className="section register">
        <div className="content">
          <img className="section-img" src="/images/main3.png" alt="Register Items" width="579" height="444" />
          <div className="bottom content-box">
            <p>Register</p>
            <div className="text-box">
              <h3 className="title">판매를 원하는 <span>상품을 등록하세요</span></h3>
              <p id="recommend" className="info">
                어떤 물건이든 판매하고 싶은 상품을<br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;