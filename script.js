$(document).ready(function () {
  // Botón para ocultar imagen
  $('#btnOcultar').click(function () {
    $('#imagen').hide();
    $('#titulo').text('¡No tenemos ninguna imagen!');
  });

  // Botón para mostrar imagen
  $('#btnMostrar').click(function () {
    $('#imagen').show();
    $('#titulo').text('¡Mirá la siguiente imagen!');
  });
});
