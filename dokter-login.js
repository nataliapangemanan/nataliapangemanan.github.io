// dokter-login.js

document.addEventListener("DOMContentLoaded", function () {
    var dokterLoginForm = document.getElementById('dokter-login-form');

    dokterLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var dokterUsername = document.getElementById('dokter-username').value;
        var dokterPassword = document.getElementById('dokter-password').value;

        // Mengubah password yang valid menjadi "dokter123"
        if (dokterUsername === 'dokter' && dokterPassword === 'dokter123') {
            // Redirect ke halaman dokter.html setelah login berhasil
            window.location.href = 'dokter.html';
        } else {
            alert('Login failed. Please check your username and password.');
        }
    });
});
