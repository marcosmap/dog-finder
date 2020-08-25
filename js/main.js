// creamos una instancia de la clase DogApi
const apiDog = new DogApi;
// creamos instancia para mostrar mensajes o los perros en la ui
const ui = new UI;
// creamos una variable para agregarle un evento al buscador
const form = document.getElementById('form');

// evento para el buscador
form.addEventListener('submit', (e) => {
  // obtenemos el texto del buscador
  const dog = document.getElementById('dog').value;
  
  if(dog !== '') {
    // realizamos la llamada http
    apiDog.getDog(dog)
    .then((data) => {
      if(data.data.status === 'error') {
        // mostramos alerta de que el perro no existe
        ui.showMessage("Race doesn't exist, try other...",'danger');
        //console.log('no existe el perro');
      }
      else {
        // console.log(data.data);
        ui.showDog(data.data);
      }
    })
  }
  else {
    // limpiamos la foto del perro
    ui.showMessage('Enter a dog please...', 'info');
  }

  e.preventDefault();

});