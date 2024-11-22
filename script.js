const myLibrary = [];
const addBookButton = document.querySelector("button.add");
let i = 0;

function Book(title, author, year, genre, haveRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.index = "";
    this.haveRead = haveRead;
}

function addDefaultBooks() {
    const oldMan = new Book("The Old Man and the Sea", "Ernest Hemingway", 1952, "fiction", true);
    const supposedlyFun = new Book("A Supposedly Fun Thing I'll Never Do Again", "David Foster Wallace", 1997, "anthology", true);
    const neverLet = new Book("Never Let Me Go", "Kazuo Ishiguro", 2005, "scifi", true);
    const tomorrow = new Book("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 2022, "fiction", true);
    const court = new Book("A Court of Thorns and Roses", "Sarah J. Maas", 2015, "romance", true);

    catalogue(oldMan);
    catalogue(supposedlyFun);
    catalogue(neverLet);
    catalogue(tomorrow);
    catalogue(court);
}

function getNewBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let haveRead = document.getElementById("have-read").checked;
    let newBook = new Book(title, author, year, genre, haveRead);
    catalogue(newBook);
}

function putBookOnShelf(newBook) {

    function appendElement(name, element, parentSelector, textContent, className) {
        window[name] = document.createElement(element);
        let parentElement = document.querySelector(parentSelector);
        parentElement.appendChild(window[name]);
        window[name].className = className;
        if (textContent !== "") {
            window[name].textContent = textContent;
        }
        if (className == "book-container") {
            parentElement.dataset.bookIndex = newBook.index;
            window[name].classList.add(newBook.genre);
            if(newBook.haveRead == true) {
                window[name].classList.add("read");
            }
        }
        if (name == "title") {
            let descriptor = document.createElement("div");
            descriptor.textContent = newBook.author + ", " + newBook.year;
            window[name].after(descriptor);
            descriptor.className = "book-descriptor";
        }
    }

    let currentCell = document.querySelector("td.empty");

    if (currentCell == null) {
        let p = document.createElement("p");
        p.textContent = "The library is full! Please take out some books!";
        let warningMessage = document.querySelector(".warning-message");
        warningMessage.appendChild(p);
        return;
    }

    appendElement("bookContainer", "div", "td.empty", "", "book-container");
    appendElement("bookInfoContainer", "div", "td.empty > div", "", "book-info-container");
    appendElement("title", "div", "td.empty > div > div", newBook.title, "book-title");
    appendElement("deleteButton", "button", "td.empty > div", "X", "delete-button");
    currentCell.classList.add("full");
    currentCell.classList.remove("empty");
}

function addBookToLibrary(newBook) {
    myLibrary[i] = newBook;
    newBook.index = i;
    i++;
}

function catalogue(book) {
    addBookToLibrary(book);
    putBookOnShelf(book);
}

function removeBook() {
    let divToRemove = document.activeElement.parentElement.parentElement;
    let bookIndexToRemove = divToRemove.dataset.bookIndex;

    function removeBookFromShelf() {
        divToRemove.innerHTML = "";
    }
    function removeBookFromLibrary() {
        myLibrary.splice(bookIndexToRemove, 1);
        i--;
    }
    function shiftBooksLeft() {
        let nextBookToRemove = Number(bookIndexToRemove);
        for (let j = nextBookToRemove; j < myLibrary.length + 1; j++) {
            let currentCell = document.querySelector('[data-book-index="' + j + '"]');
            currentCell.classList.remove("full");
            currentCell.classList.add("empty");
            currentCell.innerHTML = "";
            if (myLibrary[j]) {
                myLibrary[j].index = j;
                putBookOnShelf(myLibrary[j]);
            }
        }
    }
    removeBookFromShelf();
    removeBookFromLibrary();
    shiftBooksLeft();
}

addDefaultBooks();
console.log(myLibrary);

addBookButton.addEventListener("click", () => {
    event.preventDefault();
    getNewBook();
});

document.addEventListener("click", function (e) {
    const deleteButton = e.target.closest(".delete-button");
    if (deleteButton) {
        removeBook();
    }
});


//"read" checkbox
//make genre input a dropdown menu
//add function to sort books by name, year, etc?
//display all info on book
//color book based on genre
//add legend based on genre colors