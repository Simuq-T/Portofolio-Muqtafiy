
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai dari formulir
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Memeriksa apakah semua kolom sudah diisi
    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Memeriksa format email
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Masukkan alamat email yang valid!");
        return;
    }

    // Menampilkan pesan jika formulir valid
    alert("Terima kasih, " + nama +
          "! Pesan kamu berhasil dikirim.");

    // Mengosongkan formulir setelah berhasil
    form.reset();
});


document.addEventListener("DOMContentLoaded", function () {
    const tombol = document.getElementById("dark-mode-toggle");

    if (!tombol) {
        console.log("Tombol Dark Mode tidak ditemukan!");
        return;
    }

    tombol.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            tombol.textContent = "☀️ Light Mode";
        } else {
            tombol.textContent = "🌙 Dark Mode";
        }
    });
});
