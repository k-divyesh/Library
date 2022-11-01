library = []

function book (name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read= read;

    library.push(this)
}

const book1 = new book("atomic habbits","james charles", 32, true)
const book2 = new book("richdadpoordad", "robertKiyosaki", 300, true)
book.prototype.info = function() {
    console.log(`${this.bookName}${this.author}${this.pages}${this.read}`)
}



console.log(library)


