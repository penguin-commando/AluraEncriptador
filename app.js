// Selección de elementos del DOM
const inputText = document.getElementById('inputText');
const resultText = document.getElementById('resultText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const noTextImg = document.getElementById('noTextImg');
const encryptImg = document.getElementById('encryptImg');
const decryptImg = document.getElementById('decryptImg');

// Función de cifrado César
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) { // Si es una letra minúscula
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

// Manejador de clic para el botón "Encriptar"
encryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    if (text) {
        resultText.value = caesarCipher(text, 7);
        noTextImg.style.display = 'none';
        encryptImg.style.display = 'block';
        decryptImg.style.display = 'none';
    } else {
        resultText.value = 'No se ha encontrado texto';
        noTextImg.style.display = 'block';
        encryptImg.style.display = 'none';
        decryptImg.style.display = 'none';
    }
});

// Manejador de clic para el botón "Desencriptar"
decryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    if (text) {
        resultText.value = caesarCipher(text, -7);
        noTextImg.style.display = 'none';
        encryptImg.style.display = 'none';
        decryptImg.style.display = 'block';
    } else {
        resultText.value = 'No se ha encontrado texto';
        noTextImg.style.display = 'block';
        encryptImg.style.display = 'none';
        decryptImg.style.display = 'none';
    }
});

// Manejador de clic para el botón "Copiar"
copyBtn.addEventListener('click', () => {
    resultText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
