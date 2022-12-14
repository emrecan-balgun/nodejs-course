// console.log("First task");
// console.log("Second task");
// console.log("Third task");

// Example
// const firstFunction = () => {
//     console.log("First task completed!");
// }

// const secondFunction = () => {
//     console.log("Second task completed!");
// }

// const thirdFunction = () => {
//     console.log("Third task completed!");
// }


// firstFunction();
// secondFunction();
// thirdFunction();

// Example
// const firstFunction = () => {
//     console.log("First task completed!");
//     secondFunction();
// }

// const secondFunction = () => {
//     console.log("Second task completed!");
//     thirdFunction();
// }

// const thirdFunction = () => {
//     console.log("Third task completed!");
// }

// firstFunction();

// Example
// const firstFunction = () => {
//     console.log("First task completed!");
//     thirdFunction();
// }

// const secondFunction = () => {
//     console.log("Second task completed!");
// }

// const thirdFunction = () => {
//     console.log("Third task completed!");
//     secondFunction();
// }

// firstFunction();

// Example
// let x = 5;
// console.log(x);

// setTimeout(() => {
//     x += 5;
// }, 2000);
// console.log(x);

// x += 5;
// console.log(x);

// Example
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977 },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950 },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", year: 1950 },
    { title: "The Magician's Nephew", author: "C.S. Lewis", year: 1955 },
];

const listBooks = () => {
    books.map(book => {
        console.log(book.title);
    })
};

// listBooks();

const addBook = ( newBook, callback ) => {
    books.push(newBook);
    callback();
};

let newBook = { title: "The Voyage of the Dawn Treader", author: "C.S. Lewis", year: 1952 };

addBook(newBook, listBooks);