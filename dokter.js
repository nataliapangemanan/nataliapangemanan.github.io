const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

document.addEventListener('DOMContentLoaded', function () {
  const listKonsultasiPasien = document.getElementById('list-konsultasi-pasien');

  // Mendengarkan perubahan di Firebase Realtime Database
  database.ref('konsultasi').on('child_added', function (snapshot) {
    const data = snapshot.val();
    tampilkanKonsultasi(data.namaPasien, data.pesan);
  });

  function tampilkanKonsultasi(namaPasien, pesan) {
    const listItem = document.createElement('li');
    listItem.textContent = `${namaPasien}: ${pesan}`;
    listKonsultasiPasien.appendChild(listItem);
  }
});
