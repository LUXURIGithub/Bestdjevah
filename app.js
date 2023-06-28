console.log('Ey, why are u in the console? Geddautta here!!!')

function Dothethings() {
    element = document.getElementById('h1')
    element.innerHTML = "IT'S DJ MARKY!"
    element.style.color = "lime"

    placeToTakeP = document.getElementById('p')
    newp = document.createElement('p')
    
    newp.innerHTML = "DJ Marky, also known as Marco Antonio Silva, is a legendary figure in the world of drum and bass music. Hailing from Brazil, DJ Marky has established himself as one of the finest Brazilian drum and bass artists to grace the music scene. With his unparalleled skills on the turntables and an innate ability to captivate audiences, he has become synonymous with high-energy performances and infectious beats. In simple terms, HE IS THE GOAT!"

    placeToTakeP.appendChild(newp)

    element = document.getElementById('img1')
    element.style.display = "none";

    element = document.getElementById('h2')
    element.innerHTML = "Click on dem links:"

    element = document.getElementById('h3')
    element.innerHTML = '<a href="https://soundcloud.com/user-69780869">SoundCloud</a>' +
  '<br>' +
  '<a href="https://open.spotify.com/artist/1rd51IrbtX9DqoU0Zxu4TV?si=ke_rfoNYQj2esLcSqTcNAw">Spotify</a>' +
  '<br>' +
  '<a href="https://tidal.com/browse/artist/3583630">Tidal</a>' +
  '<br>' +
  '<a href="https://www.youtube.com/@djmarkym1">YouTube</a>';

  element = document.getElementById('b')
  element.style.display = "none";
}
