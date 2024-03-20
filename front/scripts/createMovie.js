function limpiarFormulario() {
  document.getElementById("movieForm").reset();
}
function enviarFormulario(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genres = Array.from(document.getElementById("genre").selectedOptions).map(option => option.value);
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  if (title && year && director && duration && genres && rate && poster) {
    //console.log(title, year, director, duration, genre, rate, poster);
    //
    alert("Formulario enviado correctamente");
    limpiarFormulario();
  } else {
    alert("Por favor completa todos los campos");
  }
}

document
  .getElementById("movieForm")
  .addEventListener("submit", enviarFormulario);
document
  .getElementById("limpiarBtn")
  .addEventListener("click", limpiarFormulario);
