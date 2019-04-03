let nombreColores = ['White', 'LightYellow',
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

// letiable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.



//tamano Grilla
const pixelPanelSize = 1750;
// Elemento Paleta del HTML
let valorPaletaColores;
// Elemento Grilla del HTML
let grillaPixels;
//Color elegido del panel de colores
let colorSeleccionado;
//Tomar Elemento paleta
let indicadorDeColor = document.getElementById('indicador-de-color');
//Tomer Elemento Indicador Personalizado
let colorPersonalizado = document.getElementById('color-personalizado');



colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorPersonalizado.style.backgroundColor = colorActual;
  })
);


//Crea Paleta Colores
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

  }
};


//Crea Grilla de Pixels
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

      } else if (e.buttons == 2) {
        e.target.style.backgroundColor = colorActual;
      }

    });

  grillaPixels.addEventListener("click",
    function (e) {
      e.target.style.backgroundColor = colorSeleccionado;
    });

  grillaPixels.oncontextmenu = function (e) {
    e.target.style.backgroundColor = colorActual;
    return false;
  }

};


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png

let botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener("click", function(e){
  guardarPixelArt();
});



function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}




//funcion para boton Borrar todo
let botonBorrar = document.getElementById("borrar");

botonBorrar.addEventListener("click", function (e) {
  let $listaNodosGrilla = $("#grilla-pixeles").children();

  for (i = 0; i < $listaNodosGrilla.length; i++) {
    let temporal = $listaNodosGrilla[i];
    $(temporal).animate({ backgroundColor: "white" }, 1000);

  }

});






// Carga a un superheroe predefinido en pantalla clikeando sobre su imagen
function cargarSuperheroe(superheroe) {
  let $pixeles = $("#grilla-pixeles div");
  for (let i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}


let idBatman = document.getElementById('batman');

idBatman.addEventListener('click', function(e){
 cargarSuperheroe(batman);
});



let idFlash = document.getElementById('flash');

idFlash.addEventListener('click', function(e){
 cargarSuperheroe(flash);
});



let idWonder = document.getElementById('wonder');

idWonder.addEventListener('click', function(e){
 cargarSuperheroe(wonder);
});


let idInvisible = document.getElementById('invisible');

idInvisible.addEventListener('click', function(e){
 cargarSuperheroe(invisible);
});




//Document Ready

$(document).ready(function () {

  valorPaletaColores = document.getElementById("paleta");
  grillaPixels = document.getElementById('grilla-pixeles');

  paletaColores();
  crearGrilla();

});


