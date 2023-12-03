document.addEventListener('DOMContentLoaded', function () {
    function updateJadwalDokter(jadwalDokter) {
        var dokterUmumSchedule = document.getElementById('dokterUmumSchedule');
        var dokterGigiSchedule = document.getElementById('dokterGigiSchedule');

        dokterUmumSchedule.innerHTML = '';
        dokterGigiSchedule.innerHTML = '';

        jadwalDokter.forEach(function (dokter) {
            var listItem = document.createElement('li');
            listItem.textContent = dokter.nama + ': ' + dokter.hari + ' ' + dokter.jam;

            if (dokter.nama === 'Dokter Umum') {
                dokterUmumSchedule.appendChild(listItem);
            } else if (dokter.nama === 'Dokter Gigi') {
                dokterGigiSchedule.appendChild(listItem);
            }
        });
    }

    var jadwalDokter = [
        { nama: 'Dokter Umum', hari: 'Senin', jam: '08:00 - 16:00' },
        { nama: 'Dokter Umum', hari: 'Selasa', jam: '08:00 - 16:00' },
        { nama: 'Dokter Gigi', hari: 'Rabu', jam: '09:00 - 17:00' },
        { nama: 'Dokter Gigi', hari: 'Kamis', jam: '09:00 - 17:00' },
        // ... (tambahkan jadwal dokter lainnya sesuai kebutuhan)
    ];

    updateJadwalDokter(jadwalDokter);

    document.addEventListener('jadwalDokterUpdated', function () {
        var updatedJadwalDokter = JSON.parse(localStorage.getItem('jadwalDokter')) || [];
        updateJadwalDokter(updatedJadwalDokter);
    });
});

// Fungsi untuk menyinkronkan jadwal dokter ke Doctor Schedule
function sinkronkanJadwalDokter(jadwalDokter) {
    // Kirim pesan atau sinyal ke halaman Doctor Schedule
    // untuk memberitahu bahwa jadwal dokter telah diperbarui
    var event = new Event('jadwalDokterUpdated');
    document.dispatchEvent(event);
}
