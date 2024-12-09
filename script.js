const libraryTable = document.getElementById('libraryTable');
const tableBody = document.getElementById('tableBody');

const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
    this.read = false;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
};

function displayBook(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log('First loop' + i)
        let newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        for (let j = 0; j < 3; j++){
            console.log('second loop' + j)
            let tableCell = document.createElement('td');
            newRow.appendChild(tableCell);
        };
    };
};

const book1 = new Book('Alchemist', 'JE');
const book2 = new Book('Ikagia', "Hn");
const book3 = new Book('Example 3', 'JEJE')
const book4 = new Book('example2', 'je');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();

displayBook();