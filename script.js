const myLibrary = [];
const addBookButton = document.querySelector("button.add");
let i = 0;

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.index = "";
}

function addDefaultBooks() {
    console.log("adding default books");
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
    currentCell.dataset.bookIndex = newBook.index;
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
    console.log("adding book to library");
    console.log("i is " + i);
    myLibrary[i] = newBook;
    newBook.index = i;
    i++;
    console.log("now i is " + i);
}

function removeBook() {
    let divToRemove = document.activeElement.parentElement.parentElement;
    console.log(divToRemove);
    let bookIndexToRemove = divToRemove.dataset.bookIndex;
    console.log("Preparing to remove " + myLibrary[bookIndexToRemove].title + " at index " + bookIndexToRemove);

    function removeBookFromShelf() {
        console.log("Entering removeBookFromShelf");
        divToRemove.innerHTML = "";
        console.log("Removed book from shelf");
    }
    function removeBookFromLibrary() {
        console.log("Entering removeBookFromLibrary");
        myLibrary.splice(bookIndexToRemove, 1);
        i--;
        console.log("Removed book from library. The new library is as follows")
        console.log(myLibrary);
        console.log("This new library has " + myLibrary.length + " books in it");
    }
    function shiftBooksLeft() {
        console.log("Entering shiftBooksLeft");
        let nextBookToRemove = Number(bookIndexToRemove);
        console.log("We're next removing a book from shelf slot " + nextBookToRemove);
        console.log("Next book index to remove from shelf is " + nextBookToRemove);
        for (let j = nextBookToRemove; j < myLibrary.length + 1; j++) {
            console.log("Trying to find a cell with dataset " + '[data-book-index="' + j + '"]');
            let currentCell = document.querySelector('[data-book-index="' + j + '"]');
            currentCell.classList.remove("full");
            currentCell.classList.add("empty");
            currentCell.innerHTML = "";
            console.log("Now shifting book " + myLibrary[j] + " to the left. It has index " + myLibrary[j].index);
            myLibrary[j].index = j;
            putBookOnShelf(myLibrary[j]);
        }
    }
    removeBookFromShelf();
    removeBookFromLibrary();
    shiftBooksLeft();
    console.log("I've completed every 'remove' function.");
}

addDefaultBooks();
console.log(myLibrary);

addBookButton.addEventListener("click", () => {
    event.preventDefault();
    getNewBook();
    console.log(myLibrary);
});

document.addEventListener("click", function (e) {
    const deleteButton = e.target.closest(".delete-button");
    if (deleteButton) {
        removeBook();
    }
});

//remove book from library button
//"read" checkbox
//make genre input a dropdown menu
//add function to sort books by name, year, etc?
//display all info on book
//color book based on genre
//add legend based on genre colors