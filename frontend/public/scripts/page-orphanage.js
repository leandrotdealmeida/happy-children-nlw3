const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map("mapid", options).setView([-22.3711082, -46.0987629], 15);

// create and add layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add marker
L.marker([-22.3711082, -46.0987629], { icon })
  .addTo(map);

  /* image gallery */

  function selectImage(event) {
      const button = event.currentTarget;

      // remover todas as classes .active
      const buttons = document.querySelectorAll(".images button")
      buttons.forEach((button) => {
          button.classList.remove("active")
      })
      //selecionar a imagem criada
      const image = button.children[0]
      const imageContainer = document.querySelector(".orphanage-details > img")

      // atualizar o container de imagem
      imageContainer.src = image.src

      // adcionar a classe .active para esse botão
      button.classList.add('active')
  }
  
