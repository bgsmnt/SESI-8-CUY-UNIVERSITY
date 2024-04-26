let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(length) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbols = "`!@#$%^&*()_+|}{:?></.,';\\][~";

    const data = lowerAlphabet + upperAlphabet + numeric + symbols;
    let generator = '';
    for (let index = 0; index < length; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    alert('Kata sandi telah dihasilkan!!');
}

function savePassword() {
    const newPassword = password.value.trim();

    if (newPassword === '') {
        alert('Kata sandi tidak boleh kosong.');
        return;
    }

    document.title = newPassword;

    // Membuat tautan untuk mengunduh kata sandi sebagai file teks
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${newPassword}`));
    downloadLink.setAttribute('download', 'MyPasswordGenerateLOG.txt');
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // Mengklik tautan unduh secara otomatis
    downloadLink.click();

    // Hapus tautan unduh dari DOM setelah selesai
    document.body.removeChild(downloadLink);

    alert('Kata sandi berhasil disimpan.');
}
