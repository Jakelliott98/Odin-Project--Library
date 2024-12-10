const libraryTable = document.getElementById('libraryTable');
const tableBody = document.getElementById('tableBody');
const addButton = document.getElementById('addButton');
const dialog = document.querySelector('dialog');
const closeDialog = document.getElementById('closeDialog');
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const submitBookInput = document.querySelector('dialog form button');

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
    tableBody.innerHTML = '';
    myLibrary.forEach((item) => {
        let newRow = document.createElement('tr');
        tableBody.appendChild(newRow);

        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const readCell = document.createElement('td');
        const readButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        readButton.className = 'readButton';
        deleteButton.className = 'deleteButton';

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);
        newRow.appendChild(readButton);
        newRow.appendChild(deleteButton);

        deleteButton.innerHTML = 'Delete';
        readButton.innerHTML = 'Read';
        titleCell.innerHTML = item.title;
        authorCell.innerHTML = item.author;
        if( item.read === false){
            readCell.innerHTML = 'No';
            readCell.style.backgroundColor = '#F9C8D0';
        } else {
            readCell.innerHTML = 'Yes';
            readCell.style.backgroundColor = '#D3FFC2';
        };
        
    });
};

addButton.addEventListener('click', () => {
    dialog.showModal();
});

closeDialog.addEventListener('click', () => {
    dialog.close();
});

submitBookInput.addEventListener('click',(event) => {
    event.preventDefault();
    const bookExample = new Book(bookTitleInput.value , bookAuthorInput.value);
    bookExample.addBookToLibrary();
    dialog.close();
    displayBook();
});


const book1 = new Book('Alchemist', 'Paulo Coelho');
const book2 = new Book('Bounce', "Mathew Syed");
const book3 = new Book('The Tuesday Murder Club', 'Richard Osman')
const book4 = new Book('Good to go', 'Christie Aschwanden');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();

displayBook();
