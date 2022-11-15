const header = document.getElementById("header");

let worker = html2pdf().from(header).save();