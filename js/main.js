const topBar = document.querySelector('.topbar')

//Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.classList.add('transparent');
    }
    else {
        topBar.classList.remove('transparent');
    }
});

//variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight;
//Se añade un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content')
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

//Boton Play de las cards

const containerConcentracion = document.querySelectorAll('.card-concentracion');
const containerSpotifyPlaylist = document.querySelectorAll('.card-spotify-playlist');

const createButton = card => {
    //Crear boton
	const button = document.createElement('button');
	button.innerHTML = '<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>';
    
    //'<i class="fa-solid fa-play"></i>';

    //Agregar el boton al elemento hijo

    card.appendChild(button);

    //Ocultar el boton inicialmente

	button.style.display = 'none';
	button.classList.add('btn-play');

    //Se agrega un evento hover a este elemento
    //Se oculta al mover el cursor

	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});
};

//se usa la funcion en las dos filas de contenedores

containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylist.forEach(card => {
	createButton(card);
});