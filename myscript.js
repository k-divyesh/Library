library = []

function book (name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read= read;
}

const book1 = new book("atomic habbits","james clear", 32, true)
new book("richdadpoordad", "robertKiyosaki", 300, true)
book.prototype.info = function() {
    console.log(`${this.name}${this.author}${this.pages}${this.read}`)
}

library.push(book1);
//Addbutton
const addButton = document.querySelector("#addOption");
const addBookForm = document.querySelector("#addBookForm")
addButton.addEventListener("click", function(e) {
    if (addBookForm.classList.contains("hidden")) {
        addBookForm.classList.remove("hidden")
    } else {
        addBookForm.classList.add("hidden")
    }
})

//formSubmission
const form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    var bookName = document.getElementById("bookName").value;
    var author = document.getElementById("author").value
    var pages = document.getElementById("pages").value
    var read = document.getElementById("read").checked;
    library.push(new book(bookName, author, pages, read));
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = "";
    addBookForm.classList.toggle("hidden")
    main.innerHTML="";
    for(j=0; j<library.length; j++) {
        addToCard(cardText(j));
    }
})


//function: make  card text
function cardText(i) {
    if(library[i].read == true) var readOrNot = "<span>Read</span>"; 
    else var readOrNot = "<span>Not Read</span>";

    var text = `'${library[i].name}'<br><br>${library[i].author}<br><br>${library[i].pages}<br><br>${readOrNot}`;
    return text; 
} 

//function adding 
const main = document.querySelector("#cardContainer");
function addToCard(message) {
    var card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = message;
    main.appendChild(card);
}



