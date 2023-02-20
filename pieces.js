// Récupération des pièces depuis le fichier JSON
console.log("heu");
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//pointer chaque element
const article = pieces[3];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€"
})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerHTML = article.description ?? "(aucune description)";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);

article.prix < 35 ? "€" : "€€€";
