// 이메일 유효성 검사 함수
function emailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 요소 가져오기
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const loginButton = document.querySelector(".btn");

// 이메일 검증 함수
function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        emailErr.textContent = "이메일을 입력해주세요.";
        emailInput.classList.add("error-input");
    } else if (!emailValidation(emailValue)) {
        emailErr.textContent = "잘못된 이메일 형식입니다.";
        emailInput.classList.add("error-input");
    } else {
        emailErr.textContent = "";
        emailInput.classList.remove("error-input");
    }
    toggleLoginButton();
}

// 비밀번호 검증 함수
function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
        passwordErr.textContent = "비밀번호를 입력해주세요.";
        passwordInput.classList.add("error-input");
    } else if (passwordValue.length < 8) {
        passwordErr.textContent = "비밀번호를 8자 이상 입력해주세요.";
        passwordInput.classList.add("error-input");
    } else {
        passwordErr.textContent = "";
    }
    toggleLoginButton();
}

// 로그인 버튼 활성화 함수
function toggleLoginButton() {
    if (emailErr.textContent === "" && passwordErr.textContent === "" &&
        emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.disabled = false;
        loginButton.classList.add("active");
    } else {
        loginButton.disabled = true;
        loginButton.classList.remove("active");
    }
}

// 비밀번호 보이기/숨기기 기능
function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// 이벤트 리스너 추가
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

// 로그인 폼 제출 이벤트
document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!loginButton.disabled) {
        window.location.href = "/items"; // 로그인 성공 시 이동
    }
});

