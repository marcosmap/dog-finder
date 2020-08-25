class UI {
  constructor() {
    this.sectionDog = document.getElementById('dogs');
    this.alerta = document.querySelector('.alerta');
  }

  showDog(dog) {
    //console.log(dog.message);
    this.sectionDog.innerHTML = `
      <img src="${dog.message}" class="img-fluid">
    `;
  }
 
  showMessage(message, type) {
    const div = document.createElement('div');
    div.className = `alert alert-${type} mt-3`;
    div.innerHTML = `
      ${message}
    `;
    this.alerta.appendChild(div);
    setTimeout(function() {
      div.remove();
    }, 3000);
  }

}