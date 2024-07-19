//Contact form response
const contactsDisplay = document.querySelector("#answer_review");

let numContacts = Number(window.localStorage.getItem("numContacts-ls")) || 0;

if (numContacts == 0) {
	contactsDisplay.textContent = `Thanks for your first review!`;
  numContacts = 1;
} else {
  contactsDisplay.innerHTML = numContacts;
}

numContacts++;

localStorage.setItem("numContacts-ls", numContacts);