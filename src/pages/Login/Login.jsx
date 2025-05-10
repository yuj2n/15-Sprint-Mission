import React from "react";
import "../styles/base.css";
import "../styles/reset.css";
import "../styles/auth.css";
import { useAuth } from "../../utils/useAuth"; 

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    handleEmailBlur,
    handlePasswordBlur,
    isPasswordVisible,
    togglePasswordVisibility,
    isFormValid,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 로그인 로직은 여기에 작성
    console.log("로그인 시도:", { email, password });
  };

  return (
    <main>
      <a className="logo-box" href="/">
        <img className="logo" src="images/logo.png" alt="로고" />
        <img className="pandamarket" src="images/pandamarket.png" alt="판다마켓" />
      </a>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className={emailError ? "error-input" : email ? "correct-input" : ""}
          />
          <p id="emailErr" className="errMsg">{emailError}</p>
        </div>
        <div className="login-input">
          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
              className={passwordError ? "error-input" : password ? "correct-input" : ""}
            />
            <button type="button" id="passwordVisibility" onClick={togglePasswordVisibility}>
              <img
                src={
                  isPasswordVisible
                    ? "images/eye-icon.png"
                    : "images/invisible-eye-icon.png"
                }
                className="eye-icon"
                alt="비밀번호 보기 버튼"
              />
            </button>
          </div>
          <p id="passwordErr" className="errMsg">{passwordError}</p>
        </div>
        <button id="btn" className="login" type="submit" disabled={!isFormValid}>
          로그인
        </button>
      </form>
      <div className="easy-login">
        <div className="easy-login-box">
          <p>간편 로그인하기</p>
          <div className="easy-login-icons">
            <a href="https://www.google.com/"><img src="images/google.png" width="40" height="40" alt="구글 로그인" /></a>
            <a href="https://www.kakaocorp.com/page/"><img src="images/kakao.png" width="40" height="40" alt="카카오 로그인" /></a>
          </div>
        </div>
      </div>
      <p className="question">
        판다마켓이 처음이신가요?&nbsp;
        <a className="signup" href="/signup.html">회원가입</a>
      </p>
    </main>
  );
};

export default Login;
