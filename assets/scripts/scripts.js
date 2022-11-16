
// const mainContent = document.getElementById('main-content');
const main = document.querySelector('main');
const displayBooks = document.getElementById('display-books');
const newBookBtn = document.querySelector('.new-book-btn');
const form = document.querySelector('form');
let toggleForm = false;

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
    // Add data-attribute to element in order to associate DOM elements with actual book objects
    div.setAttribute("data-index", book.title);
    // Use template literal to add book properties to created divs text content
    div.textContent = `Title: ${book.title}, Author: ${book.author}.`;
    // Append book information to main div
    main.appendChild(div);
    // mainDiv.appendChild(div);
});

// displayBooks.textContent = `Title: ${book.title}, Author: ${book.author}.`;
// mainContent.appendChild(displayBooks);
// console.log(printBooks);
// ========================================================================

newBookBtn.addEventListener('click', () => {
    // When new book button is clicked, toggle form view visibility
    if(!toggleForm) {
        form.style.display = 'grid';
        toggleForm = true;
    } else if (toggleForm) {
        form.style.display = 'none';
        toggleForm = false;
    }
});