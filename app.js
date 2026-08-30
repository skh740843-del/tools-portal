function convertToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const text = document.getElementById('pdfText').value;
    if (!text.trim()) return alert('Please enter some text!');
    doc.text(text, 10, 10);
    doc.save('document.pdf');
}

function calcAge() {
    const dobVal = document.getElementById('dobInput').value;
    if (!dobVal) return alert('Select your Date of Birth!');
    const dob = new Date(dobVal);
    const diff = new Date(Date.now() - dob.getTime());
    const age = Math.abs(diff.getUTCFullYear() - 1970);
    document.getElementById('ageResult').innerText = `Your Age: ${age} years`;
}

function countWords() {
    const val = document.getElementById('wordText').value.trim();
    const words = val ? val.split(/\s+/).length : 0;
    const chars = val.length;
    document.getElementById('wordResult').innerText = `Words: ${words} | Characters: ${chars}`;
}
