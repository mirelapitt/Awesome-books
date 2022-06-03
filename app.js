const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBookBtn = document.querySelector('#add');
const bookList = document.querySelector('#bookList');
let collectBooks = JSON.parse(localStorage.getItem('books')) || [];
class BookClass {
  Constructor(title, author) {
    this.bookTitle = title;
    this.bookAuthor = author;
  }

  // add
  addBook() {
    this.book = {};
    this.book.title = bookTitle.value;
    this.book.author = bookAuthor.value;
    collectBooks.push(this.book);
  }

  // remove
  remove(element) {
    this.bookId = element.target.id;
    this.bookToDelete = collectBooks[this.bookId - 1];
    this.freshCollection = collectBooks.filter(
      (book) => book !== this.bookToDelete,
    );
    collectBooks = this.freshCollection;
    localStorage.setItem('books', JSON.stringify(this.freshCollection));
    element.target.parentElement.remove();
  }

  // display
  displayBooks() {
    bookList.innerHTML = '';
    collectBooks.forEach((element, index) => {
      const parentContainer = document.createElement('div');
      parentContainer.classList.add('book-card');
      const titleContainer = document.createElement('span');
      const authorContainer = document.createElement('span');
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn');
      const bookInfos = document.createElement('p');
      bookInfos.classList.add('book-infos');
      removeButton.innerText = 'Remove';
      // Remove
      removeButton.addEventListener('click', (e) => {
        this.remove(e);
      });
      removeButton.setAttribute('id', index + 1);
      titleContainer.innerText = `Title : ${element.title} \nAuthor : `;
      authorContainer.innerText = element.author;
      bookInfos.appendChild(titleContainer);
      bookInfos.appendChild(authorContainer);
      parentContainer.appendChild(bookInfos);
      parentContainer.appendChild(removeButton);
      bookList.append(parentContainer);
    });
  }
}
const myBookList = new BookClass();
// Button to add
addBookBtn.addEventListener('click', () => {
  myBookList.addBook();
  bookTitle.value = '';
  bookAuthor.value = '';
  localStorage.setItem('books', JSON.stringify(collectBooks));
  myBookList.displayBooks();
});
window.addEventListener('DOMContentLoaded', () => {
  myBookList.displayBooks();
});

document.getElementById('current-date').innerHTML = new Date().toLocaleString();

// Display the right section
/* eslint-disable no-unused-vars */

function showBookList() {
  document.getElementById('id1').style.display = 'block';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

function showForm() {
  document.getElementById('id1').style.display = 'none';
  document.getElementById('addBook').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
}

function showContact() {
  document.getElementById('id1').style.display = 'none';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', showBookList);