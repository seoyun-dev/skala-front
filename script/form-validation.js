(function () {
    document.addEventListener("DOMContentLoaded", function () {
        function watchField(inputId, msgId, pattern, validMessage, invalidMessage) {
            const input = document.getElementById(inputId);
            const msg = document.getElementById(msgId);
            if (!input || !msg) return;

            input.addEventListener("input", function () {
                if (input.value.length === 0) {
                    msg.textContent = "";
                    msg.classList.remove("field-valid", "field-invalid");
                    return;
                }

                if (pattern.test(input.value)) {
                    msg.textContent = validMessage;
                    msg.classList.add("field-valid");
                    msg.classList.remove("field-invalid");
                } else {
                    msg.textContent = invalidMessage;
                    msg.classList.add("field-invalid");
                    msg.classList.remove("field-valid");
                }
            });
        }

        watchField(
            "userId",
            "idValidationMsg",
            /^[A-Za-z0-9]{4,15}$/,
            "✅ 사용 가능한 아이디입니다",
            "❌ 영문/숫자 4~15자로 입력해주세요"
        );

        watchField(
            "userPw",
            "pwValidationMsg",
            /^(?=.*[A-Za-z])(?=.*\d).{8,15}$/,
            "✅ 사용 가능한 비밀번호입니다",
            "❌ 영문+숫자 조합 8~15자로 입력해주세요"
        );

        const emailLocal = document.getElementById("userEmailLocal");
        const emailDomainSelect = document.getElementById("emailDomain");
        const emailCustomDomain = document.getElementById("userEmailCustomDomain");
        const emailMsg = document.getElementById("emailValidationMsg");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function getEmailDomain() {
            if (!emailDomainSelect) return "";
            if (emailDomainSelect.value === "direct") {
                return emailCustomDomain ? emailCustomDomain.value : "";
            }
            return emailDomainSelect.value;
        }

        function checkEmail() {
            if (!emailLocal || !emailMsg) return;

            const domain = getEmailDomain();
            const fullEmail = emailLocal.value && domain ? emailLocal.value + "@" + domain : "";

            if (fullEmail.length === 0) {
                emailMsg.textContent = "";
                emailMsg.classList.remove("field-valid", "field-invalid");
                return;
            }

            if (emailPattern.test(fullEmail)) {
                emailMsg.textContent = "✅ 올바른 이메일 형식입니다";
                emailMsg.classList.add("field-valid");
                emailMsg.classList.remove("field-invalid");
            } else {
                emailMsg.textContent = "❌ 이메일 형식이 올바르지 않습니다";
                emailMsg.classList.add("field-invalid");
                emailMsg.classList.remove("field-valid");
            }
        }

        if (emailLocal) emailLocal.addEventListener("input", checkEmail);
        if (emailCustomDomain) emailCustomDomain.addEventListener("input", checkEmail);

        if (emailDomainSelect) {
            emailDomainSelect.addEventListener("change", function () {
                const isDirect = emailDomainSelect.value === "direct";
                if (emailCustomDomain) {
                    emailCustomDomain.classList.toggle("is-hidden", !isDirect);
                    if (isDirect) emailCustomDomain.focus();
                }
                checkEmail();
            });
        }

        const pw = document.getElementById("userPw");
        const pwToggle = document.getElementById("userPwToggle");
        const pwToggleIcon = document.getElementById("userPwToggleIcon");
        if (pwToggle && pw && pwToggleIcon) {
            pwToggle.addEventListener("click", function () {
                const isHidden = pw.type === "password";
                pw.type = isHidden ? "text" : "password";
                pwToggleIcon.src = isHidden ? "../media/eye.png" : "../media/noeye.png";
                pwToggleIcon.alt = isHidden ? "비밀번호 표시됨" : "비밀번호 숨김";
                pwToggleIcon.classList.toggle("icon-eye", isHidden);
                pwToggleIcon.classList.toggle("icon-noeye", !isHidden);
                pwToggle.setAttribute("aria-label", isHidden ? "비밀번호 숨기기" : "비밀번호 표시");
            });
        }
    });
})();
