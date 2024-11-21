const myLibrary = [];
const addBookButton = document.querySelector("button.add");
let i = 0;

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function getNewBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let newBook = new Book(title, author, year, genre);
    addBookToLibrary(newBook);
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

function addBookToLibrary(newBook) {
    myLibrary[i] = newBook;
    i++;
}

addBookButton.addEventListener("click", () => {
    event.preventDefault();
    getNewBook();
    console.log(myLibrary);
});

const oldMan = new Book("The Old Man and the Sea", "Ernest Hemingway", 1952, "fiction");
const supposedlyFun = new Book("A Supposedly Fun Thing I'll Never Do Again", "David Foster Wallace", 1997, "anthology");
const neverLet = new Book("Never Let Me Go", "Kazuo Ishiguro", 2005, "science fiction");
const tomorrow = new Book("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 2022, "fiction");
const court = new Book("A Court of Thorns and Roses", "Sarah J. Maas", 2015, "romance");

addBookToLibrary(oldMan);
putBookOnShelf(oldMan);
addBookToLibrary(supposedlyFun);
putBookOnShelf(supposedlyFun);
addBookToLibrary(neverLet);
putBookOnShelf(neverLet)
addBookToLibrary(tomorrow);
putBookOnShelf(tomorrow)
addBookToLibrary(court);
putBookOnShelf(court);

console.log(myLibrary);

//remove book from library button
//"read" checkbox
//make genre input a dropdown menu
//add function to sort books by name, year, etc?
//display all info on book
//color book based on genre
    //add legend based on genre colors