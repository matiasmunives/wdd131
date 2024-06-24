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
  const hamburger = document.querySelector(".hamburger-menu");
  const nav_mobile = document.querySelector(".nav-mobile");
  const backdrop = document.querySelector(".backdrop")
  
  const handleMobileNav =()=>{
      hamburger.classList.toggle("transform-menu")
      nav_mobile.classList.toggle("show-nav-mobile")
      backdrop.classList.toggle("show-backdrop")
  }
  
  hamburger.addEventListener("click",handleMobileNav)
  backdrop.addEventListener("click",handleMobileNav)