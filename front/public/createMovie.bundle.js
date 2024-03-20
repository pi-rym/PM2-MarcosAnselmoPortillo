/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/createMovie.js":
/*!********************************!*\
  !*** ./scripts/createMovie.js ***!
  \********************************/
/***/ (() => {

eval("function limpiarFormulario() {\r\n  document.getElementById(\"movieForm\").reset();\r\n}\r\nfunction enviarFormulario(event) {\r\n  event.preventDefault();\r\n\r\n  const title = document.getElementById(\"title\").value;\r\n  const year = document.getElementById(\"year\").value;\r\n  const director = document.getElementById(\"director\").value;\r\n  const duration = document.getElementById(\"duration\").value;\r\n  const genres = Array.from(document.getElementById(\"genre\").selectedOptions).map(option => option.value);\r\n  const rate = document.getElementById(\"rate\").value;\r\n  const poster = document.getElementById(\"poster\").value;\r\n\r\n  if (title && year && director && duration && genres && rate && poster) {\r\n    //console.log(title, year, director, duration, genre, rate, poster);\r\n    //\r\n    alert(\"Formulario enviado correctamente\");\r\n    limpiarFormulario();\r\n  } else {\r\n    alert(\"Por favor completa todos los campos\");\r\n  }\r\n}\r\n\r\ndocument\r\n  .getElementById(\"movieForm\")\r\n  .addEventListener(\"submit\", enviarFormulario);\r\ndocument\r\n  .getElementById(\"limpiarBtn\")\r\n  .addEventListener(\"click\", limpiarFormulario);\r\n\n\n//# sourceURL=webpack://front/./scripts/createMovie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/createMovie.js"]();
/******/ 	
/******/ })()
;