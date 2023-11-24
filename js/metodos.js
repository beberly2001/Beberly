function Cotizar() {
  // para cotizar el lavado de techos
  var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
  var metrosTechos = parseFloat(document.getElementById('metrosTechos').value);

  // Asegúrate de ajustar los precios según tus requisitos específicos
  var precioPorMetro;
  if (opcionSeleccionada && !isNaN(metrosTechos) && metrosTechos >= 0) {
      if (opcionSeleccionada.value === 'opcion1') {
          precioPorMetro = 500;
      } else if (opcionSeleccionada.value === 'opcion2') {
          precioPorMetro = 500;
      }

      var totalTechos = metrosTechos * precioPorMetro;

      // Formatea el resultado con comas para separar los miles
      var totalTechosFormateado = totalTechos.toLocaleString('es-ES', { style: 'currency', currency: 'CRC' });

      // Actualiza el campo de total para los techos con el resultado formateado
      document.getElementById('totalTechos').value = totalTechosFormateado;
  } else {
      alert('Por favor, seleccione una opción y proporcione una cantidad de metros válida.');
  }




//para cotizar pintura de techos
var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
var metrosTechos = parseFloat(document.getElementById('metrosPinturaTechos').value);

// Asegúrate de ajustar los precios según tus requisitos específicos
var precioPorMetro;
if (opcionSeleccionada && !isNaN(metrosTechos) && metrosTechos >= 0) {
  if (opcionSeleccionada.value === 'opcion1') {
    precioPorMetro = 3000;
  } else if (opcionSeleccionada.value === 'opcion2') {
    precioPorMetro = 1500;
  }

  var totalTechos = metrosTechos * precioPorMetro;
  var totalTechosFormateado = totalTechos.toLocaleString('es-ES', { style: 'currency', currency: 'CRC' });

  // Actualiza el campo de total para los techos
  document.getElementById('totalPinturaTechos').value = totalTechosFormateado;
} else {
  alert('Por favor, seleccione una opción y proporcione una cantidad de metros válida.');
}


//para cotizar pintura de interior
var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
var metrosTechos = parseFloat(document.getElementById('metrosInterior').value);

// Asegúrate de ajustar los precios según tus requisitos específicos
var precioPorMetro;
if (opcionSeleccionada && !isNaN(metrosTechos) && metrosTechos >= 0) {
  if (opcionSeleccionada.value === 'opcion1') {
    precioPorMetro = 4000;
  } else if (opcionSeleccionada.value === 'opcion2') {
    precioPorMetro = 2000;
  }

  var totalTechos = metrosTechos * precioPorMetro;
  var totalTechosFormateado = totalTechos.toLocaleString('es-ES', { style: 'currency', currency: 'CRC' });

  // Actualiza el campo de total para los techos
  document.getElementById('totalInterior').value = totalTechosFormateado;
} else {
  alert('Por favor, seleccione una opción y proporcione una cantidad de metros válida.');
}



//para cotizar el lavado de exterior
var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
var metrosTechos = parseFloat(document.getElementById('metrosExterior').value);

// Asegúrate de ajustar los precios según tus requisitos específicos
var precioPorMetro;
if (opcionSeleccionada && !isNaN(metrosTechos) && metrosTechos >= 0) {
  if (opcionSeleccionada.value === 'opcion1') {
    precioPorMetro = 3000;
  } else if (opcionSeleccionada.value === 'opcion2') {
    precioPorMetro = 1500;
  }

  var totalTechos = metrosTechos * precioPorMetro;
  var totalTechosFormateado = totalTechos.toLocaleString('es-ES', { style: 'currency', currency: 'CRC' });

  // Actualiza el campo de total para los techos
  document.getElementById('totalExterior').value = totalTechosFormateado;
} else {
  alert('Por favor, seleccione una opción y proporcione una cantidad de metros válida.');
}




var totalTechos = parseFloat(document.getElementById('totalTechos').value) || 0;
var totalPinturaTechos = parseFloat(document.getElementById('totalPinturaTechos').value) || 0;
var totalInterior = parseFloat(document.getElementById('totalInterior').value) || 0;
var totalExterior = parseFloat(document.getElementById('totalExterior').value) || 0;

// Sumar los totales
var totalGeneral = totalTechos + totalPinturaTechos + totalInterior + totalExterior;

// Formatear el total general como moneda en CRC
var totalGeneralFormateado = totalGeneral.toLocaleString('es-ES', { style: 'currency', currency: 'CRC' });

// Actualizar el campo de total general con el resultado formateado
document.getElementById('total').value = totalGeneralFormateado;


}































