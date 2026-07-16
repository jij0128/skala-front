var userPw = document.getElementById("userPw");
var userPwConfirm = document.getElementById("userPwConfirm");
var pwMatchMsg = document.getElementById("pwMatchMsg");
var submitBtn = document.getElementById("submitBtn");
var togglePw = document.getElementById("togglePw");
var togglePwConfirm = document.getElementById("togglePwConfirm");

var eyeIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';

var eyeOffIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.86 21.86 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.86 21.86 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"/>' +
    '<line x1="1" y1="1" x2="23" y2="23"/></svg>';

togglePw.innerHTML = eyeIcon;
togglePwConfirm.innerHTML = eyeIcon;

function checkPasswordMatch() {
    if (userPwConfirm.value === "") {
        pwMatchMsg.textContent = "";
        submitBtn.disabled = false;
        return;
    }

    if (userPw.value === userPwConfirm.value) {
        pwMatchMsg.textContent = "비밀번호가 일치합니다.";
        pwMatchMsg.style.color = "#27ae60";
        submitBtn.disabled = false;
    } else {
        pwMatchMsg.textContent = "비밀번호가 일치하지 않습니다.";
        pwMatchMsg.style.color = "#e74c3c";
        submitBtn.disabled = true;
    }
}

userPw.addEventListener("input", checkPasswordMatch);
userPwConfirm.addEventListener("input", checkPasswordMatch);

function togglePasswordVisibility(input, button) {
    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = eyeOffIcon;
    } else {
        input.type = "password";
        button.innerHTML = eyeIcon;
    }
}

togglePw.addEventListener("click", function () {
    togglePasswordVisibility(userPw, togglePw);
});

togglePwConfirm.addEventListener("click", function () {
    togglePasswordVisibility(userPwConfirm, togglePwConfirm);
});

var emailDomainSelect = document.getElementById("emailDomainSelect");
var emailDomainCustom = document.getElementById("emailDomainCustom");

emailDomainSelect.addEventListener("change", function () {
    if (emailDomainSelect.value === "") {
        emailDomainCustom.value = "";
        emailDomainCustom.readOnly = false;
        emailDomainCustom.focus();
    } else {
        emailDomainCustom.value = emailDomainSelect.value;
        emailDomainCustom.readOnly = true;
    }
});
