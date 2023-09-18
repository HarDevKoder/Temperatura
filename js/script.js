
// Creo referencias a los objetos del DOM
const txtTemperatura = document.getElementById("valorTemp");
const btnConvertir = document.getElementById("btnConvertir");
const cuadroResultado = document.getElementById("resultados");

// oculto cuadro de respuestas
cuadroResultado.style.display = 'none';

// asigno enter al boton convertir
document.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    btnConvertir.click();
  }
});

// Ejecuto instrucciones al hacer  click en el boton convertir
btnConvertir.addEventListener('click', () => {
  const gradosFahrenheit = txtTemperatura.value;
  if (gradosFahrenheit !== '') {
    const gradosCelsius = ((gradosFahrenheit - 32) * (5 / 9)).toFixed(2);
    cuadroResultado.innerHTML = `${gradosCelsius} ${String.fromCharCode(176)}C`;
    cuadroResultado.style.display = 'block';
    txtTemperatura.value = ' ';
  } else {
    alert('Ingresa un valor válido!');
  }
})




















