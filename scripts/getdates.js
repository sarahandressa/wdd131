{
const today = new Date();

const year = document.querySelector("#year");

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

let LastModified = new Date(document.lastModified);

alert (document.lastModified);
}