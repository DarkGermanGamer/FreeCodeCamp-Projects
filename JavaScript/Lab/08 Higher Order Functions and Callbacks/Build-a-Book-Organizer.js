const books = [
  {
    title: 'Eragon',
    authorName: 'Christopher Paolini',
    releaseYear: 2003 
  },
  {
    title: 'The Lord of the Rings',
    authorName: 'J. R. R. Tolkien',
    releaseYear: 1954 
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    authorName: 'Lewis Carrol',
    releaseYear: 1865 
  },
  {
    title: 'The Adventures of Pinocchio',
    authorName: 'Carlo Collodi',
    releaseYear: 1881
  }
]

const sortByYear = (bookA, bookB) => {
  if(bookA.releaseYear < bookB.releaseYear) {
    return -1;
  }
  else if(bookA.releaseYear > bookB.releaseYear) {
    return 1;
  }
  else {
    return 0;
  }
};

const filteredBooks = books.filter(book => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);