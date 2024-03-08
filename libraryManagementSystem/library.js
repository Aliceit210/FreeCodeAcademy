// Book class
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.available = true;
    }
  }
  
  // Library class
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Function to add books to the library
    addBook(title, author) {
      const book = new Book(title, author);
      this.books.push(book);
    }
  
    // Function to display available books
    displayAvailableBooks() {
      console.log("Available Books:");
      this.books.forEach((book) => {
        if (book.available) {
          console.log(`${book.title} by ${book.author}`);
        }
      });
    }
  
    // Function to borrow a book
    borrowBook(title) {
      const bookIndex = this.books.findIndex((book) => book.title === title);
  
      if (bookIndex !== -1) {
        const book = this.books[bookIndex];
  
        if (book.available) {
          book.available = false;
          console.log(`You have borrowed "${book.title}" by ${book.author}`);
        } else {
          console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
      } else {
        console.log(`"${title}" is not found in the library.`);
      }
    }
  
    // Function to return a book
    returnBook(title) {
      const bookIndex = this.books.findIndex((book) => book.title === title);
  
      if (bookIndex !== -1) {
        const book = this.books[bookIndex];
  
        if (!book.available) {
          book.available = true;
          console.log(`You have returned "${book.title}" by ${book.author}`);
        } else {
          console.log(`"${book.title}" is already in the library.`);
        }
      } else {
        console.log(`"${title}" is not found in the library.`);
      }
    }
  }
  
  // Usage example
  const library = new Library();
  
  // Add books to the library
  library.addBook("Book 1", "Author 1");
  library.addBook("Book 2", "Author 2");
  library.addBook("Book 3", "Author 3");
  
  // Display available books
  library.displayAvailableBooks();
  
  // Borrow a book
  library.borrowBook("Book 1");
  
  // Display available books after borrowing
  library.displayAvailableBooks();
  
  // Try to borrow an unavailable book
  library.borrowBook("Book 1");
  
  // Return a book
  library.returnBook("Book 1");
  
  // Display available books after returning
  library.displayAvailableBooks();