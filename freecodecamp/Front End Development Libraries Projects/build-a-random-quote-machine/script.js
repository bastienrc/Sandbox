const projectName = "random-quote-machine";

const quotes = [
  {
    text: "La folie est de toujours se comporter de la même manière et de s'attendre à un résultat différent.",
    author: 'Albert Einsten'
  },
  {
    text: "Toute vérité franchit trois étapes : d'abord elle est ridiculisée, ensuite elle subit une forte opposition, enfin elle est considérée comme ayant toujours été une évidence.",
    author: "Arthur Schopenhauer"
  },
  {
    text: "En Science, la phrase la plus excitante que l'on peut entendre, celle qui annonce de nouvelles découvertes, ce n'est pas « Eurêka » mais « C'est drôle ».",
    author: "Isaac Asimov"
  },
  {
    text: 'Soyez le changement que vous voulez voir dans le monde.',
    author: "Gandhi"
  },
  {
    text: 'Qui triomphe de lui-même possède la force',
    author: "Lao-Tseu"
  },
  {
    text: 'La simplicité est la sophistication suprême',
    author: "Léonard de Vinci"
  },
  {
    text: 'On a deux vies, la deuxième commence quand on découvre que l’on en a qu’une seule.',
    author: "Confucius"
  },
  {
    text: 'Ils ne savaient pas que c’était impossible, alors ils l’ont fait.',
    author: "Mark Twain"
  },
  {
    text: 'Entre ce que je pense, ce que je veux dire, ce que je crois dire, ce que je dis, ce que vous voulez entendre, ce que vous entendez, ce que vous croyez comprendre, ce que vous voulez comprendre, et ce que vous comprenez, Il y a au moins dix possibilités (mais en réflexion pour la dizième...) de ne pas se comprendre. Mais, essayons quand même.',
    author: "Bernard Werber"
  },
  {
    text: "J’entends, j’oublie. Je vois, je me souviens. Je fais, je comprends.",
    author: 'Confucius'
   }
];

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomQuote = () => {
  const randomInt = getRandomIntInclusive(0, quotes.length);
  text.textContent = quotes[randomInt].text;
  author.textContent = quotes[randomInt].author;
  const tweetQuote = document.getElementById('tweet-quote')
  tweetQuote.href = 'https://twitter.com/intent/tweet';
  tweetQuote.href += "?hashtags=citation";
  tweetQuote.href += `&text=${quotes[randomInt].text} - ${quotes[randomInt].author}`;
}

randomQuote()
