// Inisialisasi Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "localhost",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Mendapatkan referensi database
const database = firebase.database();

document.addEventListener('DOMContentLoaded', function () {
  const formKonsultasi = document.getElementById('formKonsultasi');
  const namaInput = document.getElementById('nama');
  const pesanInput = document.getElementById('pesan');

  formKonsultasi.addEventListener('submit', function (event) {
    event.preventDefault();

    const namaPasien = namaInput.value;
    const pesan = pesanInput.value;

    // Kirim pesan ke Firebase Realtime Database
    database.ref('konsultasi').push({
      namaPasien: namaPasien,
      pesan: pesan
    });

    // Bersihkan formulir setelah pesan terkirim
    formKonsultasi.reset();
  });
});
