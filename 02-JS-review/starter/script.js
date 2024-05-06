const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const books = getBooks();
const book = getBook(2);

const {
  title,
  author,
  pages,
  genres,
  hasMovieAdaptation,
  publicationDate,
  ...others
} = books[0];
// title;
// author;
// console.log(genres[1], "****", genres[0]);
// console.log(others);

const newGenres = ["epic fantasy", ...genres];
// newGenres;

const updatedBook = {
  ...books[0],

  // Adding a new property
  moviePublicationdate: "2001-12-22",

  // Overwritng an existing property
  pages: 1210,
};
// updatedBook;

// Arrow function

const getYear = (str) => str.split("-")[0];

// Template literals

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)} `;
// summary;

// Tenaries instead of ifelse statements

const pagesrange = pages > 1000 ? "over thousand" : "less than 1000";
// console.log(`The book has ${pagesrange} pages`);

// ShortCircuiting and Logical operators

// console.log(true && "Some text");
// console.log(false && "Some text");
// console.log(hasMovieAdaptation && "Some text");

// falsy values: 0, '',null, undefined

// console.log("jonas" && "Some string");
// console.log(0 && "Some string");

// console.log(true || "Some text");
// console.log(false || "Some text");

const spanishTranslation = book.translations.spanish || "Not trnslated";
// spanishTranslation;

// nullish values: null or undefined

const count = book.reviews.librarything.reviewsCount ?? "No data";
// count;

// Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(books[2]));
*/

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

const books = getBooks();

// Map method

const titles = books.map((book) => book.title);
// titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCounts: getTotalReviewCount(book),
}));
// essentialData;

// Filter method

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
// adventureBooks;

// Reduce Method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// Sort Method

const arr = [3, 5, 1, 6, 7, 2, 9];
const sortedAscendingCopyArray = arr.slice().sort((a, b) => a - b);
const sortedDescendingCopyArray = arr.slice().sort((a, b) => b - a);
const sortedOriginalAndNewArrayDescending = arr.sort((a, b) => b - a);
// sortedAscendingCopyArray;
// sortedDescendingCopyArray;
// sortedOriginalAndNewArrayDescending;
// arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// Working with immutable arrays

// 1. Add a new book object to array
const newBook = {
  id: 6,
  title: "harry Poter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const boosAfterAdd = [...books, newBook];
// boosAfterAdd;

// 2. Delete book object from array
const boosAfterDelete = boosAfterAdd.filter((book) => book.id !== 1);
// boosAfterDelete();

// 3. Update book object in the array
const booksAfterUpdate = (id) =>
  boosAfterDelete.map((book) =>
    book.id === id ? { ...book, pages: 1213 } : book
  );
// console.log(booksAfterUpdate(3));
*/

// Asynchronous JavaScript Promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Failed to fetch todos", err));

console.log("Jonas");

// Asynchronous JavaScript AsyncAwait
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res) {
    console.log("Todos not found");
  }

  const data = await res.json();
  console.log(data);
}
