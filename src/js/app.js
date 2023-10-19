// Descargar hoja de Vida
const downloadLink = document.querySelector('#downloadLink');
downloadLink.addEventListener('click',downloadResume);

function downloadResume(){
  downloadLink.href = './src/files/CV_Francisco-Soto-Flores.pdf';
  downloadLink.download = 'CV_Francisco-Soto-Flores.pdf';
}
