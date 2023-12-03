document.addEventListener("DOMContentLoaded", function () {
    // Ambil data pasien dari Local Storage
    var dataPasien = JSON.parse(localStorage.getItem('dataPasien')) || [];
    var jadwalDokter = JSON.parse(localStorage.getItem('jadwalDokter')) || [];

    // Tampilkan data pasien di bagian "Data Pasien" pada halaman admin
    var dataPasienSection = document.getElementById('data-pasien');
    if (dataPasienSection) {
        var dataPasienList = document.createElement('ul');

        dataPasien.forEach(function (pasien) {
            var listItem = document.createElement('li');
            listItem.textContent = pasien.nama + ' - No. Rekam Medis: ' + generateRekamMedisNumber();
            dataPasienList.appendChild(listItem);
        });

        dataPasienSection.appendChild(dataPasienList);
    }

    // Tampilkan data pasien di bagian "Konfirmasi Pendaftaran Pasien" pada halaman admin
    var konfirmasiPendaftaranSection = document.getElementById('konfirmasi-pendaftaran');
    if (konfirmasiPendaftaranSection) {
        var konfirmasiPendaftaranList = document.createElement('ul');

        dataPasien.forEach(function (pasien, index) {
            var listItem = document.createElement('li');
            listItem.textContent = pasien.nama + ' - Konfirmasi Pendaftaran pada tanggal ' + getCurrentDate();

            // Tambahkan tombol detail untuk setiap pasien
            var detailButton = document.createElement('button');
            detailButton.textContent = 'Detail';
            detailButton.addEventListener('click', function() {
                showDetailPasien(pasien); // Fungsi untuk menampilkan detail pasien
            });

            // Tambahkan tombol konfirmasi untuk setiap pasien
            var konfirmasiButton = document.createElement('button');
            konfirmasiButton.textContent = 'Konfirmasi';
            konfirmasiButton.addEventListener('click', function() {
                konfirmasiPendaftaranPasien(pasien); // Fungsi untuk mengkonfirmasi pendaftaran pasien
            });

            // Tambahkan tombol detail dan konfirmasi ke dalam elemen list
            listItem.appendChild(detailButton);
            listItem.appendChild(konfirmasiButton);

            konfirmasiPendaftaranList.appendChild(listItem);
        });

        konfirmasiPendaftaranSection.appendChild(konfirmasiPendaftaranList);
    }
});

// Fungsi untuk menampilkan detail pasien
function showDetailPasien(pasien) {
    // Implementasikan cara menampilkan detail pasien sesuai kebutuhan
    alert('Detail Pasien:\nNama: ' + pasien.nama + '\nUmur: ' + pasien.umur + '\nAlamat: ' + pasien.alamat);
}

// Fungsi untuk mengkonfirmasi pendaftaran pasien
function konfirmasiPendaftaranPasien(pasien) {
    // Tambahkan data pasien ke bagian "Data Pasien" pada halaman admin
    var dataPasienSection = document.getElementById('data-pasien');
    if (dataPasienSection) {
        var dataPasienList = dataPasienSection.querySelector('ul');

        if (dataPasienList) {
            var listItem = document.createElement('li');
            listItem.textContent = pasien.nama + ' - No. Rekam Medis: ' + generateRekamMedisNumber();
            dataPasienList.appendChild(listItem);
        }
    }
}

// Fungsi untuk membuat nomor rekam medis
function generateRekamMedisNumber() {
    // Implementasikan logika pembuatan nomor rekam medis sesuai kebutuhan
    // Contoh: Menggunakan timestamp sebagai nomor unik
    return Date.now().toString();
}

// Fungsi untuk mendapatkan tanggal saat ini
function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return day + '-' + month + '-' + year;
}
