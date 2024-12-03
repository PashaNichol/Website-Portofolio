var loginTry = parseInt(localStorage.getItem("LoginTry")) || 0;

function validateForm() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Email dan password belum terisi");
        return false;
    }

    if (email === "calystaputri@gmail.com" && password === "1234") {
        alert("BERHASIL LOGIN");
        localStorage.setItem("loginemail", email);
        location.href = "login_berhasil.html";
        return false;
    }

    alert("Email atau password salah");
    return false;
}

function logout() {
    localStorage.removeItem("loginemail");
    alert("Berhasil logout");
    location.href = "Home1.html";
}

