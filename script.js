const myLibrary = [];
const table = document.querySelector("table");
const div = document.createElement("div");

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function addBookToLibrary() {
    let currentCell = document.querySelector("#empty");
    div.textContent = "heyyy";
    div.classList.add("full");
    div.classList.remove("empty");
    currentCell.appendChild(div);
}

//when a book is added, give it a class