function openPDF(url) {
    document.getElementById('pdf-frame').src = url;
    document.getElementById('pdf-modal').style.display = 'flex';
}
function closePDF() {
    document.getElementById('pdf-modal').style.display = 'none';
    document.getElementById('pdf-frame').src = '';
}
document.getElementById('pdf-modal').addEventListener('click', function(e) {
    if (e.target === this) closePDF();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePDF();
});
