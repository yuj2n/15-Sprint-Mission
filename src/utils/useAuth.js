import { useState } from "react";

// 이메일 유효성 검사 함수
function emailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const useAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nicknameError, setNicknameError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);

    // 이메일 검증
    const handleEmailBlur = () => {
        if (!email.trim()) {
            setEmailError("이메일을 입력해주세요.");
        } else if (!emailValidation(email)) {
            setEmailError("잘못된 이메일 형식입니다.");
        } else {
            setEmailError("");
        }
    };

    // 비밀번호 검증
    const handlePasswordBlur = () => {
        if (!password.trim()) {
            setPasswordError("비밀번호를 입력해주세요.");
        } else if (password.length < 8) {
            setPasswordError("비밀번호를 8자 이상 입력해주세요.");
        } else {
            setPasswordError("");
        }
    };

    // 비밀번호 확인 검증
    const handlePasswordCheckBlur = () => {
        if (passwordCheck !== password) {
            setPasswordCheckError("비밀번호가 일치하지 않습니다.");
        } else {
            setPasswordCheckError("");
        }
    };

    // 비밀번호 보이기/숨기기
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const togglePasswordCheckVisibility = () => {
        setIsPasswordCheckVisible((prev) => !prev);
    };

    // 로그인 또는 회원가입 버튼 활성화 여부
    const isFormValid =
        !emailError &&
        !passwordError &&
        !passwordCheckError &&
        email.trim() &&
        password.trim() &&
        nickname.trim() &&
        passwordCheck.trim();

    return {
        email, setEmail,
        password, setPassword,
        nickname, setNickname,
        passwordCheck, setPasswordCheck,
        emailError, setEmailError,
        passwordError, setPasswordError,
        nicknameError, setNicknameError,
        passwordCheckError, setPasswordCheckError,
        isPasswordVisible, togglePasswordVisibility,
        isPasswordCheckVisible, togglePasswordCheckVisibility,
        handleEmailBlur, handlePasswordBlur, handlePasswordCheckBlur, isFormValid
    };
};
