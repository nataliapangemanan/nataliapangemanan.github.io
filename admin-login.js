// admin-login.js

document.addEventListener("DOMContentLoaded", function () {
    var adminLoginForm = document.getElementById('admin-login-form');

    adminLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var adminUsername = document.getElementById('admin-username').value;
        var adminPassword = document.getElementById('admin-password').value;

        // Mengubah password yang valid menjadi "admin123"
        if (adminUsername === 'admin' && adminPassword === 'admin123') {
            // Redirect ke halaman admin.html setelah login berhasil
            window.location.href = 'admin.html';
        } else {
            alert('Login failed. Please check your username and password.');
        }
    });
});
