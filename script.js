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
    // console.log("We're gona add smthin!");
    let currentCell = document.querySelector("td.empty");
    let div = document.createElement("div");
    if (currentCell == null) {
        // console.log("Yikes! Warning!");
        let p = document.createElement("p");
        // console.log(typeof p);
        p.textContent = "The library is full! Please take out some books!";
        let warningMessage = document.querySelector(".warning-message");
        // console.log(warningMessage);
        warningMessage.appendChild(p);
        return;
    }
    //  else if (typeof warningMessage !== undefined) {
    //     console.log("HEY!");
    //     return;
    // }
    div.textContent = newBook.title;
    currentCell.classList.add("full");
    currentCell.classList.remove("empty");
    currentCell.appendChild(div);
}

addBookButton.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
});

//when a book is added, give it a class