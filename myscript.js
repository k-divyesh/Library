const cardContainer = document.querySelector("#cardContainer");
const addBookForm = document.querySelector("#addBookForm") // div containing form
const addButton = document.querySelector("#addOption");

var library = []

function book (name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read= read;

    pushToLibrary(this)
}

function pushToLibrary(obj) {
    library.push(obj)
}

book.prototype.info = function() {
    console.log(`${this.name}${this.author}${this.pages}${this.read}`)
}



//Sho0wing form on addButton click
addButton.addEventListener("click", function(e) {
    addBookForm.classList.toggle("hidden")
})



//formSubmission
const form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    var bookName = document.getElementById("bookName").value;
    var author = document.getElementById("author").value
    var pages = document.getElementById("pages").value
    var read = document.getElementById("read").checked;
    new book(bookName, author, pages, read);
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = "";
    addBookForm.classList.toggle("hidden")

    cardContainer.innerHTML="";
    for(var bookNo=0; bookNo<library.length; bookNo++) {
        addToCard(cardText(bookNo));
    }
})




//function: make  card text
function cardText(i) {
    console.log(library[i].read)
    if(library[i].read === true) var readOrNot = "<span>Read</span>"; 
    else var readOrNot = "<span>Not Read</span>";

    var text = `'${library[i].name}'<br><br>-${library[i].author}<br><br>${library[i].pages} pages<br><br>${readOrNot}`;
    return text; 
} 



//inserting message into card and appending it to parent container
function addToCard(message) {
    var card = document.createElement("div")
    card.classList.add("card");
    card.innerHTML = message;
    var span = card.lastChild;
    if (span.innerHTML.includes("Not Read")) span.classList.add("red")
    else span.classList.add("green")
    // if(card.innerText.includes = "Not Read") span.classList.add("red")
    // else span.classList.add("green")
    cardContainer.appendChild(card);
}