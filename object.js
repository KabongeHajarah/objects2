const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];



//     Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks() {
    return books.filter(book => book.isAvailable);
  }
 console.log(getAvailableBooks());

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.


function getBooksByAuthor(authorName) {
    let booksByAuthor=books.filter(book => book.author === authorName);
     
return booksByAuthor
}
let authorName='J.D. Salinger'
console.log(getBooksByAuthor(authorName));
  console.log(getBooksByAuthor('F. Scott Fitzgerald'));
  console.log(getBooksByAuthor('Charles Dickens'));



// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(newBook) {
    let requiredProperties = ['title', 'author', 'publicationYear', 'isAvailable'];
    let newBookKeys = Object.keys(newBook);
  
  
    if (requiredProperties.every(key => newBookKeys.includes(key))) {
      books.push(newBook);
    } 
  }
  newBook={
    title:'Born a crime',
    author:'Trevor Noah',
    publicationYear:2020,
    isAvailable:true
  }
addNewBook(newBook);
console.log(books);
  
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTitle) {
    const book = books.find(book => book.title === bookTitle);
  
    if (book) {
       return book.isAvailable = false;
    } else {
      return ('Book is not available');
    }
  }
 checkoutBook('Born a crime') ;
 console.log( checkoutBook('Born a crime'));
 console.log( checkoutBook('Coders'));


  
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(bookTitle) {
    let book = books.find(book => book.title === bookTitle);
  
    if (book) {
      return book.isAvailable=true
    } else {
      return ('Book does not belong to the library');
    }
  }
 ;
  console.log(  returnBook( 'The Great Gatsby') );
  console.log( returnBook('Coders'));
