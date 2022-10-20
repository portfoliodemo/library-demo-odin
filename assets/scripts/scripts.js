
// const mainContent = document.getElementById('main-content');
const main = document.querySelector('main');
const displayBooks = document.getElementById('display-books');

let myLibrary = [
    { title: 'Art of War', author: 'Sun Tzu' },
    { title: '1984', author: 'George Orwell' },
    { title: 'River God', author: 'Wilbur Smith' },
    { title: 'Measure for Measure', author: 'William Shakespeare' },
];

function Book() {
    // Constructor
}

function addBookToLibrary() {
    // TODO
}

// Function to loop through the array and display each book on the page..
const printBooks = myLibrary.filter(function(book) {
    // Create a div element
    let div = document.createElement('div');
    // Use template literal to add book properties to created divs text content
    div.textContent = `Title: ${book.title}, Author: ${book.author}.`;
    // Append book information to main div
    main.appendChild(div);
    // mainDiv.appendChild(div);
});

// displayBooks.textContent = `Title: ${book.title}, Author: ${book.author}.`;
// mainContent.appendChild(displayBooks);
// console.log(printBooks);