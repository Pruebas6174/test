// Selecciona los elementos necesarios
const catalogImages = document.querySelectorAll('.catalog-item img');
const largeImage = document.getElementById('large-image');
const purchaseDateText = document.getElementById('purchase-date');
const discountDateText = document.getElementById('discount-date');
const printButton = document.getElementById('print-button');

// Función para formatear la fecha en el formato deseado
function formatDate(date) {
    return date.toLocaleString('es-CO', { timeZone: 'America/Bogota' });
}

// Función para calcular las fechas y mostrarlas
function updateDates() {
    const now = new Date();
    const discountDate = new Date();
    discountDate.setDate(now.getDate() + 15);

    purchaseDateText.textContent = `Día de la compra: ${formatDate(now)}`;
    discountDateText.textContent = `Descuento válido hasta: ${formatDate(discountDate)}`;
}

// Evento para cambiar la imagen grande al hacer clic en una imagen del catálogo
catalogImages.forEach(img => {
    img.addEventListener('click', () => {
        largeImage.src = img.src; // Cambia la imagen grande
        largeImage.alt = img.alt; // Actualiza el texto alternativo
        updateDates(); // Actualiza las fechas
    });
});

// Evento para imprimir la página
printButton.addEventListener('click', () => {
    window.print();
});
