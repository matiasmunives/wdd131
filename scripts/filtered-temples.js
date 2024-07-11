// Current year for footer in HTML 
document.addEventListener("DOMContentLoaded", (event) => {
    const year = document.getElementById("year");
    const now = new Date();
    const current = now.getFullYear();
    year.innerText = current;
  });

//Last modification for footer in HTML   
document.addEventListener("DOMContentLoaded", (event) => {
    const lastUpdatedElement = document.getElementById("last-updated");
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = lastModified.toLocaleTimeString('en-US', timeOptions);
    lastUpdatedElement.innerText = `${formattedDate} ${formattedTime}`;
  });
  
//Hamburguer - Menu 
// Store the selected elements that we are going to use. 
const hamButton = document.querySelector('#menu');
const menu = document.querySelector('.navigation');

hamButton.addEventListener('click', function() {
	menu.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Temple cards creation and display

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1853, February, 14",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
},

{
  templeName: "Buenos Aires Argentina",
  location: "Buenos Aires, Argentina",
  dedicated: "1986, January, 17",
  area: 151234,
  imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
},

];

createTempleCard(temples);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  createTempleCard(temples);
  document.querySelector("h2").innerHTML = "HOME";
});

const oldTemples = document.querySelector("#old");
oldTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900")));
  document.querySelector("h2").innerHTML = "OLD TEMPLES";
});

const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date("2000")));
  document.querySelector("h2").innerHTML = "NEW TEMPLES";
});

const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) > ("90000")));
  document.querySelector("h2").innerHTML = "LARGE TEMPLES";
});

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) < ("10000")));
  document.querySelector("h2").innerHTML = "SMALL TEMPLES";
});

function createTempleCard(filteredTemples) {
  document.querySelector(".card").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add(`card-${1}`);
    let img = document.createElement("img");
    let templeName = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");

    templeName.textContent = temple.templeName;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.style.aspectRatio = "5 / 3";
    img.setAttribute("loading", "lazy");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;

    card.appendChild(templeName);
    card.appendChild(img);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    document.querySelector(".card").appendChild(card);
  });
  }