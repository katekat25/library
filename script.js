const myLibrary = [];
const addBookButton = document.querySelector("button.add");

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function addBookToLibrary() {
    // console.log("We're gona add smthin!");
    let currentCell = document.querySelector("td.empty");
    let div = document.createElement("div");
    if (currentCell == null) {
        console.log("Yikes! Warning!");
        let p = document.createElement("p");
        console.log(typeof p);
        p.textContent = "The library is full! Please take out some books!";
        let warningMessage = document.querySelector(".warning-message");
        console.log(warningMessage);
        warningMessage.appendChild(p);
        return;
    }
    //  else if (typeof warningMessage !== undefined) {
    //     console.log("HEY!");
    //     return;
    // }
    div.textContent = "A book";
    currentCell.classList.add("full");
    currentCell.classList.remove("empty");
    currentCell.appendChild(div);
}

addBookButton.addEventListener("click", () => {
    addBookToLibrary();
});

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

//when a book is added, give it a class