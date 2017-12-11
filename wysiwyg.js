// Create an array of objects that represents famous people
let famousPpl = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "Politician",
    name: "Hojo Masako",
    bio: "A female political leader, and the eldest daughter of Hōjō Tokimasa by his wife Hōjō no Maki. She was the sister of Hōjō Yoshitoki, and was married to Minamoto no Yoritomo, the first shogun of the Kamakura period.",
    image: "https://en.wikipedia.org/wiki/H%C5%8Dj%C5%8D_Masako#/media/File:Hojo_Masako.jpg",
    lifespan: {
      birth: 1156,
      death: 1225
    }
  },
]
// target container div and input field
let output = document.getElementById("output");
let input = document.getElementById("input");


// loop thru array and make cards
function cardArray() {
  for(i = 0; i < famousPpl.length; i++) {
// create header node
    let header = document.createElement("header");
    output.appendChild(header);
    let personName = document.createTextNode(` ${famousPpl[i].name} `);
    let personTitle = document.createTextNode(` ${famousPpl[i].title} `);
    header.appendChild(personName);
    header.appendChild(personTitle);
// create section node
    let section = document.createElement("section");
    output.appendChild(section);
    let personBio = document.createTextNode(` ${famousPpl[i].bio} `);
    let personImg = document.createTextNode(` ${famousPpl[i].image} `);
    section.appendChild(personBio);
    section.appendChild(personImg);
// create footer node
    let footer = document.createElement("footer");
    output.appendChild(footer);
    let personBirth = document.createTextNode(` ${famousPpl[i].lifespan.birth} `);
    let personDeath = document.createTextNode(` ${famousPpl[i].lifespan.death} `);
    footer.appendChild(personBirth);  
    footer.appendChild(personDeath);
  }
}
cardArray();











/*function pplDiv() {
  let personDiv = document.createElement("div");
  let header = document.createElement("header");
  let section = document.createElement("section");
  let footer = document.createElement("footer");


}
*/
