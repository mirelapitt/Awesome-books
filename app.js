const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const addBookBtn = document.querySelector("#add");
const bookList = document.querySelector("#bookList");
let collectBooks = JSON.parse(localStorage.getItem("books")) || [];
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
      (book) => book !== this.bookToDelete
    );
    collectBooks = this.freshCollection;
    localStorage.setItem("books", JSON.stringify(this.freshCollection));
    element.target.parentElement.remove();
  }
  // display
  displayBooks() {
    bookList.innerHTML = "";
    collectBooks.forEach((element, index) => {
      const parentContainer = document.createElement("div");
      parentContainer.classList.add("book-card");
      const titleContainer = document.createElement("span");
      const authorContainer = document.createElement("span");
      const removeButton = document.createElement("button");
      removeButton.classList.add("btn");
      const bookInfos = document.createElement("p");
      bookInfos.classList.add("book-infos");
      removeButton.innerText = "Remove";
      // Remove
      removeButton.addEventListener("click", (e) => {
        this.remove(e);
      });
      removeButton.setAttribute("id", index + 1);
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
addBookBtn.addEventListener("click", () => {
  myBookList.addBook();
  bookTitle.value = "";
  bookAuthor.value = "";
  localStorage.setItem("books", JSON.stringify(collectBooks));
  myBookList.displayBooks();
});
window.addEventListener("DOMContentLoaded", () => {
  myBookList.displayBooks();
});







// let books = [];

// const collection = document.getElementById('bookss');

// function createForm() {
//   const div = document.createElement('div');
//   div.className = 'main-container';
//   div.innerHTML = `
// <div>
// <div id = "dynamic">
// </div>
// </div>
// <div>
//   <form id = "bookForm">
//     <input type="text" name = "title" id="title" required placeholder="Title"><br><br>
//     <input type="text" name = "author" id="tuthor" required placeholder="Author"><br><br>
//     <button id="addItem" type= "button">add</button>
//   </form>
// </div>
// `;
//   collection.appendChild(div);
// }
// createForm();

// function dataStore() {
//   localStorage.setItem('bookData', JSON.stringify(books));
// }

// function deleteBook(event) {
//   const bookIndex = event.target.id;
//   books.splice(bookIndex, 1);
//   dataStore();
//   // eslint-disable-next-line no-use-before-define
//   displayBooks();
// }

// function displayBooks() {
//   let listOfBooks = '';
//   books.forEach((book, index) => {
//     listOfBooks += ` <div class="book">
//     <div>${book.title}</div>
//     <div>${book.author}</div>
//     <div>
//         <button class='btn-delete' id=${index}>Remove</button>
//     </div>
//     <hr/>        
//   </div>`;
//   });
//   const div = document.getElementById('dynamic');
//   div.innerHTML = listOfBooks;
//   if (books.length > 0) {
//     const deleteButtons = document.querySelectorAll('.btn-delete');
//     deleteButtons.forEach((button) => { button.addEventListener('click', deleteBook); });
//   }
// }
// function addItem() {
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('tuthor').value;
//   const form = document.forms[0];

//   books.push({ title, author });
//   dataStore();
//   displayBooks();
//   form.reset();
// }
// document.getElementById('addItem').addEventListener('click', addItem);
// window.onload = () => {
//   books = JSON.parse(localStorage.getItem('bookData')) || [];
//   if (books) {
//     displayBooks();
//   }
// };