const axios = require("axios");

function limpiarFormulario() {
  document.getElementById("movieForm").reset();
}
function enviarFormulario(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genres = Array.from(
    document.getElementById("genre").selectedOptions
  ).map((option) => option.value);
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const requestBody = {
    title: title,
    year: parseInt(year),
    director: director,
    duration: duration,
    genre: genres,
    rate: parseFloat(rate),
    poster: poster,
  };
  
  if (title && year && director && duration && genres && rate && poster) {
    axios
      .post("http://localhost:3000/movies", requestBody)
      .then(() => {
        alert("Película agregada correctamente");
        limpiarFormulario();
      })
      .catch((error) => {
        console.log(error);
        alert("Error agregando película");
      });
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
