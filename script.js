const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
    this.read = false;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
};


const book1 = new Book('Harry Potter', 'Jake');
const book2 = new Book('Alchemist', 'Mesh');

book1.addBookToLibrary();
console.log(myLibrary);

// Trying to add a book into the library array
// Pushing the product of the object constructor rather than the construcor itself.
