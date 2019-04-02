var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorPersonalizado.style.backgroundColor = colorActual;
  })
);




//tamano Grilla
const pixelPanelSize = 1750;
// Elemento Paleta del HTML
var valorPaletaColores;
// Elemento Grilla del HTML
var grillaPixels;
//Color elegido del panel de colores
var colorSeleccionado;




var indicadorDeColor = document.getElementById('indicador-de-color');


function paletaColores() {
  for (i = 0; i < nombreColores.length; i++) {
    let crearDiv = document.createElement("div");
    valorPaletaColores.appendChild(crearDiv);

    crearDiv.classList.add("color-paleta");
    crearDiv.style.backgroundColor = nombreColores[i];



    crearDiv.addEventListener("click",
      (function (e) {

        colorSeleccionado = window.getComputedStyle(this).getPropertyValue("background-color");
        indicadorDeColor.style.backgroundColor = colorSeleccionado;

      })
    );


    // $(valorPaletaColores).append("<div></div>").children().addClass("color-paleta").css('backgroundColor', 'color');
  }
};


function crearGrilla() {
  for (i = 0; i < pixelPanelSize; i++) {
    let newDiv = document.createElement('div');
    grillaPixels.appendChild(newDiv);
    newDiv.style.backgroundColor = 'white';


  };

  grillaPixels.addEventListener("mousemove",
    function (e) {
      if (e.buttons == 1) {

        e.target.style.backgroundColor = colorSeleccionado;
      }

    });

  grillaPixels.addEventListener("click",
    function (e) {
      e.target.style.backgroundColor = colorSeleccionado;

    });



  // $(grillaPixels).append("<div><img class= 'pixel' src ='./img/empty.gif' /></div>");

}



//funcion para boton borrar todo

var botonBorrar = document.getElementById("borrar");

botonBorrar.addEventListener("click", function (e) {
  var $listaNodosGrilla = $("#grilla-pixeles").children();

  for (i = 0; i < $listaNodosGrilla.length; i++) {
    var temporal = $listaNodosGrilla[i];
    $(temporal).animate({ backgroundColor: "white" }, 1000);
  
  }

});

var batman = document.getElementById("batman");


// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}







$(document).ready(function () {

  valorPaletaColores = document.getElementById("paleta");
  grillaPixels = document.getElementById('grilla-pixeles');

  paletaColores();
  crearGrilla();

});


