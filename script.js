const myLibrary = [];
const addBookButton = document.querySelector("button.add");
let i = 0;

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let newBook = new Book(title, author, year, genre);
    myLibrary[i] = newBook;
    i++;
    putBookOnShelf(newBook);
}

function putBookOnShelf(newBook) {
    let currentCell = document.querySelector("td.empty");
    let bookContainer = document.createElement("div");
    let bookInfoContainer = document.createElement("div");
    let title = document.createElement("div");
    let descriptor = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    if (currentCell == null) {
        let p = document.createElement("p");
        p.textContent = "The library is full! Please take out some books!";
        let warningMessage = document.querySelector(".warning-message");
        warningMessage.appendChild(p);
        return;
    }
    currentCell.appendChild(bookContainer);
    bookContainer.className = "book-container";
    currentCell = document.querySelector("td.empty > div");
    currentCell.appendChild(bookInfoContainer);
    bookInfoContainer.className = "book-info-container";
    currentCell = document.querySelector("td.empty > div > div")
    title.textContent = newBook.title;
    descriptor.textContent = newBook.author + ", " + newBook.year;
    currentCell.appendChild(title);
    title.className = "book-title";
    title.after(descriptor);
    currentCell = document.querySelector("td.empty > div");
    currentCell.appendChild(deleteButton);
    deleteButton.className = "delete-button";
    descriptor.className = "book-descriptor";
    currentCell = document.querySelector("td.empty");
    currentCell.classList.add("full");
    currentCell.classList.remove("empty");
}

addBookButton.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
});

//remove book from library button
//"read" checkbox
//make genre input a dropdown menu
//add function to sort books by name, year, etc?
//display all info on book
//color book based on genre
    //add legend based on genre colors