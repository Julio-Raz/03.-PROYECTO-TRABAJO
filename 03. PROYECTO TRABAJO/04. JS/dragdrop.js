// script.js

const dropZone = document.getElementById('drop-zone');
const uploadedImage = document.getElementById('uploaded-image');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragging');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragging');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragging');

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // Muestra la imagen
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, suelta un archivo de imagen.');
    }
});

