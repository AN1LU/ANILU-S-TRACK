document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.getElementById('burger-btn');
    const menu = document.getElementById('menu');
  
    burgerBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  
  let boton = document.getElementById("miBoton");
boton.addEventListener("click", funcionClick);

function funcionClick(){
  console.log("El boton ha sido presionado");
}

function initMap(){
  var myLatLng = {lat: 20.67401185, lng: -103.4178002};
    
  // Opciones del mapa
  var mapOptions = {
      center: myLatLng, // Centro del mapa
      zoom: 8 // Zoom inicial
  };
  
  // Crear el mapa
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  // Agregar un marcador en el centro del mapa
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '¡¡Registra tus RUTAS!!' // Título del marcador
  });
}
  