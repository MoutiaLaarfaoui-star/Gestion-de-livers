const ajouterLiver = document.getElementById('ajouter-liver');
const titre = document.getElementById('titre');
const auteur = document.getElementById('auteur');
const date = document.getElementById('date');
const genre = document.getElementById('genre');
const description = document.getElementById('description');
const titreErour = document.getElementById('titer-errour');
const auteurErour = document.getElementById('auteur-errour');
const genreErour = document.getElementById('genre-errour');
const descriptionErour = document.getElementById('description-errour');


titre.addEventListener('input', ()=>{
    if (titre.value.trim() === "" || titre.value.length > 40 || titre.value.length < 3) {
        titreErour.textContent = "errour !!!!!"
        titreErour.classList.remove('hidden')
    } else {
        titreErour.classList.add('hidden');
    }
});


auteur.addEventListener('input', ()=>{
    if (auteur.value.trim() === "" || auteur.value.length > 40 || auteur.value.length < 3) {
        auteurErour.textContent = "errour !!!!!"
        auteurErour.classList.remove('hidden')
    } else {
        auteurErour.classList.add('hidden');
    }
});



genre.addEventListener('input', ()=>{
    if (genre.value.trim() === "" || genre.value.length > 40 || genre.value.length < 3) {
        genreErour.textContent = "errour !!!!!"
        genreErour.classList.remove('hidden')
    } else {
        genreErour.classList.add('hidden');
    }
});



description.addEventListener('input', ()=>{
    if (description.value.trim() === "" || description.value.length > 40 || description.value.length < 3) {
        descriptionErour.textContent = "errour !!!!!"
        descriptionErour.classList.remove('hidden')
    } else {
        descriptionErour.classList.add('hidden');
    }
});

function ajouterLivers(livers) {
    const div = document.createElement('div')

    const h1 = document.createElement('h1')

    const h2 = document.createElement('h2')

    const date =
}