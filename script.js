// login.js

document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Mengambil nilai input username dan password
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Menentukan tipe pengguna (admin/dokter) berdasarkan input pengguna
        var userType = document.querySelector('input[name="user-type"]:checked').value;

        // Memanggil fungsi untuk memvalidasi login
        validateLogin(username, password, userType);
    });

    function validateLogin(username, password, userType) {
        // Mengirim permintaan otentikasi ke server
        // Pastikan untuk menyesuaikan ini dengan logika otentikasi server Anda
        // Contoh: Menggunakan metode Fetch API atau XMLHttpRequest
        fetch('/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                userType: userType,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Memeriksa hasil otentikasi dari server
            if (data.success) {
                // Jika login berhasil, redirect ke halaman sesuai dengan tipe pengguna
                window.location.href = getRedirectPage(userType);
            } else {
                alert('Login failed. Please check your username and password.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during login.');
        });
    }

    function getRedirectPage(userType) {
        // Tentukan halaman yang sesuai dengan tipe pengguna
        if (userType === 'admin') {
            return 'admin.html';
        } else if (userType === 'dokter') {
            return 'dokter.html';
        } else {
            return 'index.html';
        }
    }
});
