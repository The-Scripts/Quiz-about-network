const elementToPdf = document.getElementById("root");

let opt = {
    margin:       0,
    filename:     'certification.pdf',
    image:        { type: 'jpeg', quality: 0.99 },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
};

let worker = html2pdf().set(opt).from(elementToPdf).save();