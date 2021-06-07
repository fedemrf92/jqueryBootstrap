$("button").on("click", function () {
  var tituloIngresadoPorUsuario = $("#titulo").val();
  $("h1").text(tituloIngresadoPorUsuario);

  var parrafoIngresadoPorUsuario = $("#parrafo").val();
  $("p").text(parrafoIngresadoPorUsuario);

  var tamanoLetraTitulo = $("#tamanoTitulo").val();
  $("h1").css("font-size", tamanoLetraTitulo + "px");

  var colorIngresado = $("input[name=color]:checked").val();
  $("h1").css("color", colorIngresado);
});
