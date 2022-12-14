// Example
// const firstPromise = new Promise((resolve, reject) => {
//     resolve('Got the data');
//     reject('Something went wrong');
// });

// console.log(firstPromise);

// firstPromise
//     .then(value => { //resolve
//         console.log(value);
//     }).catch( error => { //reject
//         console.log(error);
//     });

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

const addBook = ( newBook ) => {
    const promise = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('Error: Book not added');
    });

    return promise;
};

let newBook = { title: "The Voyage of the Dawn Treader", author: "C.S. Lewis", year: 1952 };

addBook(newBook).then(() => {
    console.log("New list: ");
    listBooks();
}).catch(error => {
    console.log(error);
})