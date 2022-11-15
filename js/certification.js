const elementToPdf = document.getElementById("root");

let opt = {
    margin:       0,
    filename:     'certification.pdf',
    image:        { type: 'png' },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
};

let worker = html2pdf().set(opt).from(elementToPdf).save();