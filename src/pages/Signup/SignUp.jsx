import React from "react";
import "../styles/base.css";
import "../styles/reset.css";
import "../styles/auth.css";
import { useAuth } from "../../utils/useAuth"; 

const SignUp = () => {
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

  const [nickname, setNickname] = React.useState("");
  const [nicknameError, setNicknameError] = React.useState("");

  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [passwordCheckError, setPasswordCheckError] = React.useState("");
  const [isPasswordCheckVisible, setPasswordCheckVisible] = React.useState(false);

  const togglePasswordCheckVisibility = () => {
    setPasswordCheckVisible((prev) => !prev);
  };

  const handleNicknameBlur = () => {
    if (nickname.trim() === "") {
      setNicknameError("닉네임을 입력해주세요.");
    } else {
      setNicknameError("");
    }
  };

  const handlePasswordCheckBlur = () => {
    if (passwordCheck.trim() === "") {
      setPasswordCheckError("비밀번호를 다시 입력해주세요.");
    } else if (passwordCheck !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  };

  const isSignUpValid =
    isFormValid && nickname !== "" && passwordCheck === password;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 작성
    console.log("회원가입 시도:", { email, password, nickname });
  };

  return (
    <main>
      <a className="logo-box" href="/">
        <img className="logo" src="images/logo.png" alt="로고" />
        <img className="pandamarket" src="images/pandamarket.png" alt="판다마켓" />
      </a>
      <form className="signup-form" onSubmit={handleSubmit}>
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
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onBlur={handleNicknameBlur}
            className={nicknameError ? "error-input" : nickname ? "correct-input" : ""}
          />
          <p id="nicknameErr" className="errMsg">{nicknameError}</p>
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
                alt="비밀번호 보기"
              />
            </button>
          </div>
          <p id="passwordErr" className="errMsg">{passwordError}</p>
        </div>
        <div className="login-input">
          <label htmlFor="password-check">비밀번호 확인</label>
          <div className="password-container">
            <input
              type={isPasswordCheckVisible ? "text" : "password"}
              id="password-check"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              onBlur={handlePasswordCheckBlur}
              className={
                passwordCheckError ? "error-input" : passwordCheck ? "correct-input" : ""
              }
            />
            <button type="button" id="passwordCheckVisibility" onClick={togglePasswordCheckVisibility}>
              <img
                src={
                  isPasswordCheckVisible
                    ? "images/eye-icon.png"
                    : "images/invisible-eye-icon.png"
                }
                className="eye-icon"
                alt="비밀번호 확인 보기"
              />
            </button>
          </div>
          <p id="passwordCheckErr" className="errMsg">{passwordCheckError}</p>
        </div>
        <button id="btn" className="signup" type="submit" disabled={!isSignUpValid}>
          회원가입
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
        이미 회원이신가요?&nbsp;
        <a className="login" href="/login.html">로그인</a>
      </p>
    </main>
  );
};

export default SignUp;
