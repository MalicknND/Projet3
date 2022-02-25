// création d'un tableau multidimensionnel c'est à dire un tableau qui est constitué d'autres tableaux
const quotes = [
  [
    "Le voyage est une fuite contre la routine, la monotonie, la familiarité, la soumission à la régulation du gouvernement collectif.",
    "Sylvain Tesson",
    "Artiste, Aventurier, écrivain (1972 - 2014)",
  ],
  [
    "Comme les rêves sont cruels, qui nous laissent entrevoir des merveilles pour mieux nous en priver !",
    "Amélie Nothomb",
    "Artiste, écrivain (1966 - 2020)",
  ],
  [
    "On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.",
    "Victor Hugo",
    "Artiste, écrivain, Poète, Romancier (1802 - 1885)",
  ],
  [
    "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
    "Confucius",
    "Philosophe",
  ],
  [
    "Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
    "Coluche",
    "Artiste, Comique (1944 - 1986)",
  ],
  [
    "Si je devais recommencer ma vie, je n'y voudrais rien changer, seulement j'ouvrirais un peu plus grand les yeux.",
    "Jules Renard",
    "Artiste, écrivain (1864 - 1910)",
  ],
  [
    "Le seul moyen de se délivrer d'une tentation, c'est d'y céder. Résistez et votre âme se rend malade à force de languir ce qu'elle s'interdit.",
    "Oscar Wilde",
    "Artiste, écrivain (1854 - 1900)",
  ],
  [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    "Gandhi",
    "Homme politique, Philosophe, Révolutionnaire (1869 - 1948)",
  ],
  [
    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    "Albert Einstein",
    "Mathématicien, Physicien, Scientifique (1879 - 1955)",
  ],
  [
    "Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
    "Abbé Pierre",
    "Abbé, Prêtre, Religieux (1912 - 2007)",
  ],
];

const quote = document.querySelector(".quote"); //
const author = document.querySelector(".author");
const infos = document.querySelector(".infos");

//math.random(); permet de générer un chiffre aleatoire compris entre 0 et 1
//math.round() permet d'arrondir un nombre décimal
//floor permet d'arrondir à l'entier inférieur
let random = Math.floor(Math.random() * quotes.length); //j'utilise ici let pour pouvour le réutiliser sur la fonction newQuote

quote.innerHTML = quotes[random][0];
author.innerHTML = quotes[random][1];
infos.innerHTML = "- " + quotes[random][2];

//généreation d'une citation aléatoire au clic du button

const btnQuote = document.querySelector(".new-citation");

//maintenant j'essaye d'ecouter l'évenement click
btnQuote.addEventListener("click", newQuote);

//je crée une fonction qui me permettre de générer une citation aléatoire à un click
function newQuote() {
  random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random][0];
  author.innerHTML = quotes[random][1];
  infos.innerHTML = "- " + quotes[random][2];
}
//On crée une fonction qui nous permet de twitter

const btnTwitter = document.querySelector(".share-twitter");

function shareQuote() {
  const hashtag = quotes[random][1].replace(/ /g, ""); //le g veut dire cibler de maniere generale
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quotes[random][0] +
      "&hashtags=" +
      hashtag
  );
}

btnTwitter.addEventListener("click", shareQuote);
