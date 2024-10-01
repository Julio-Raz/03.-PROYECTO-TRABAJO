function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'cm',
        format: 'letter'
    });
    const pages = document.querySelectorAll('.page');

    let promises = [];

    pages.forEach((page, index) => {
        promises.push(
            html2canvas(page, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                if (index > 0) {
                    doc.addPage();
                }
                doc.addImage(imgData, 'PNG', 0, 0, 21.59, 27.94); // Ajustar tamaño de la imagen al tamaño de la página carta
            }).catch(error => {
                console.error('Error al generar la imagen de la página:', error);
            })
        );
    });

    Promise.all(promises).then(() => {
        doc.save('reporte.pdf');
    }).catch(error => {
        console.error('Error al generar el PDF:', error);
    });
}

