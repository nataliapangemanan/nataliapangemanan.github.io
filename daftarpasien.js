function submitForm() {
    var nama = document.getElementById('nama').value;
    var umur = document.getElementById('umur').value;
    var alamat = document.getElementById('alamat').value;

    // Simpan data ke Local Storage
    var dataPasien = {
        nama: nama,
        umur: umur,
        alamat: alamat
    };

    // Dapatkan data yang sudah ada di Local Storage
    var existingData = JSON.parse(localStorage.getItem('dataPasien')) || [];

    // Tambahkan data baru ke array
    existingData.push(dataPasien);

    // Simpan array yang sudah diperbarui ke Local Storage
    localStorage.setItem('dataPasien', JSON.stringify(existingData));

    // Reset formulir setelah penyimpanan
    document.getElementById('daftarPasienForm').reset();
    
    // Pindahkan pengguna ke halaman login setelah mendaftar
    window.location.href = 'login.html'; // Ganti dengan halaman login yang sesuai
}
