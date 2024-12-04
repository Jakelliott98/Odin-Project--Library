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

function createTableRow(title, author, read){
    let newRow = document.createElement('tr');
    tableBody.appendChild(newRow);
    for (let i = 0; i < 3; i++){
        let tableCell = document.createElement('td');
        newRow.appendChild(tableCell);
    }
}

createTableRow();
createTableRow();
createTableRow();