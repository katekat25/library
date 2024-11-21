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
    let div = document.createElement("div");
    let currentCell = document.querySelector("td.empty");
    console.log(currentCell);
    if (currentCell == null) {
        let p = document.createElement("p");
        p.textContent = "The library is full! Please take out some books!";
        let warningMessage = document.querySelector(".warning-message");
        console.log(warningMessage);
        warningMessage.appendChild(p);
        return;
    }
    div.textContent = "heyyy";
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