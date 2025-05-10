import React from "react";
import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner";
import HotItemsSection from "../../components/HotItemsSection";
import SearchSection from "../../components/SearchSection";
import RegisterSection from "../../components/RegisterSection";
import Footer from "../../components/Footer";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import "../styles/base.css";
import "../styles/index.css";
import "../styles/reset.css";
import "../styles/unsupported.css";



function Home() {
  return (
    <div className="content-wrapper">
      <Header />
      <main>
        <MainBanner />
        <HotItemsSection />
        <SearchSection />
        <RegisterSection />
      </main>
      <Footer />
      <div className="unsupported-screen">
        <div className="unsupported-message">
          현재 기기에서는 지원하지 않습니다.
          <br />
          375px 이상의 화면에서 이용해 주세요.
        </div>
      </div>
    </div>
  );
}

export default Home;
