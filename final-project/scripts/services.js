//Services Page
const services = [
  {
    serviceName: "BMS Support",
    description: "M&M Facilities Management provides expert support for your Building Management System. Our services include monitoring, maintenance, troubleshooting, and upgrades to ensure efficient and reliable building operations. Trust us to enhance energy efficiency and occupant comfort with our dedicated BMS support.",
    imageUrl: "images/fm-2.webp"
  },
  {
    serviceName: "Project Management",
    description: "M&M Facilities Management offers comprehensive project management services to ensure your projects are completed on time and within budget. Our experienced team oversees planning, execution, and delivery, ensuring seamless coordination and optimal results.",
    imageUrl: "images/fm-13.webp"
  },
  {
    serviceName: "Project Design",
    description: "M&M Facilities Management provides innovative project design services to bring your vision to life. Our team of skilled designers collaborates with you to create functional and aesthetically pleasing solutions, tailored to meet your specific needs and goals.",
    imageUrl: "images/fm-1.webp"
  },

  {
    serviceName: "Audit Services",
    description: "M&M Facilities Management offers thorough audit services to evaluate and enhance your facility operations. Our expert team identifies inefficiencies, ensures compliance, and provides actionable recommendations to improve performance and reduce costs.",
    imageUrl: "images/fm-9.webp"
  },
  {
    serviceName: "Reports Preparation",
    description: "M&M Facilities Management delivers precise and insightful reports to keep you informed. Our team meticulously compiles data and provides comprehensive analyses, ensuring you have the critical information needed for effective decision-making.",
    imageUrl: "images/fm-8.webp"
  },
  {
    serviceName: "Security Services",
    description: "M&M Facilities Management offers top-tier security services to safeguard your premises. Our professional team provides comprehensive protection, including surveillance, access control, and emergency response, ensuring a secure environment for all.",
    imageUrl: "images/fm-11.webp"
  },
  {
    serviceName: "S&H Services",
    description: "M&M Facilities Management prioritizes your well-being with our Safety and Health services. We implement robust safety protocols, conduct regular inspections, and provide training to ensure a safe and healthy environment for all occupants.",
    imageUrl: "images/fm-15.webp"
  },

  {
    serviceName: "Landscape Services",
    description: "M&M Facilities Management offers expert landscape maintenance services to keep your outdoor spaces pristine. Our team ensures your landscape remains healthy, attractive, and well-maintained through regular care, including mowing, pruning, and seasonal cleanups.",
    imageUrl: "images/fm-10.webp"
},

{
  serviceName: "Cleaning Services",
  description: "M&M Facilities Management provides top-quality cleaning services to maintain a spotless and hygienic environment. Our professional team ensures thorough cleaning of your facilities, including offices, common areas, and specialized spaces, tailored to your specific needs.",
  imageUrl: "images/fm-7.webp"
},

{
  serviceName: "Painting Services",
  description: "M&M Facilities Management provides expert painting services with high-quality materials for a flawless finish. Whether it’s for interiors or exteriors, we ensure professional results that enhance your property’s look and value.",
  imageUrl: "images/fm-5.webp"
},

{
  serviceName: "General Maintenance",
  description: "M&M Facilities Management offers comprehensive general maintenance services to keep your property in top condition. From routine upkeep to urgent repairs, our skilled team ensures everything runs smoothly, enhancing the longevity and efficiency of your space.",
  imageUrl: "images/fm-12.webp"
},

{
  serviceName: "Electricity Services",
  description: "M&M Facilities Management offers reliable general electricity services to ensure your electrical systems are safe and efficient. Our experienced electricians handle everything from installations and repairs to maintenance and troubleshooting, providing dependable solutions for residential and commercial needs.",
  imageUrl: "images/fm-3.webp"
},

];

createServiceCard(services);

function createServiceCard(servicesList) {
  document.querySelector(".card").innerHTML = "";

  const initialViewportHeight = window.innerHeight;


  servicesList.forEach(service => {
    let card = document.createElement("section");
    card.classList.add(`card-${1}`);
    let img = document.createElement("img");
    let serviceName = document.createElement("h3");
    let description = document.createElement("p");

    serviceName.textContent = service.serviceName;
    img.setAttribute("src", service.imageUrl);
    img.setAttribute("alt", `${service.serviceName} Service`);
    img.style.aspectRatio = "5 / 3";

    if (card.getBoundingClientRect().top > initialViewportHeight) {
      img.setAttribute("loading", "lazy");
    }

    description.innerHTML = `${service.description}`;

    card.appendChild(serviceName);
    card.appendChild(img);
    card.appendChild(description);

    document.querySelector(".card").appendChild(card);
  });
  }