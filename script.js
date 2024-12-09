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
        let newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        for (let j = 0; j < 3; j++){
            let tableCell = document.createElement('td');
            newRow.appendChild(tableCell);
        };
    };
};


function displayBook(){
    myLibrary.forEach((item) => {
        let newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const readCell = document.createElement('td');
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);

        titleCell.innerHTML = item.title;
        authorCell.innerHTML = item.author;
        readCell.innerHTML = item.innerHTML; 
    });
};



const book1 = new Book('Alchemist', 'Paulo Coelho');
const book2 = new Book('Bounce', "Mathew Syed");
const book3 = new Book('The Tuesday Murder Club', 'Richard Osman')
const book4 = new Book('Good to go', 'Christie Aschwanden');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();

displayBook();