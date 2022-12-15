const getData = (data) => {
    return new Promise((resolve, reject) => {
        console.log("Getting data...");

        if(data) {
            resolve("Data received");
        } else {
            reject("No data received");
        }
    });
};

const cleanData = (receivedData) => {
    return new Promise((resolve, reject) => {
        console.log("Cleaning data...");

        if(receivedData) {
            resolve("Data cleaned");
        } else {
            reject("No data cleaned");
        }
    });
};

// Promise Method

// getData(true)
//     .then(response => {
//         console.log(response);
//         return cleanData(true)
//            .then(response => {
//                 console.log(response);
//             }).catch(error => {
//                 console.log(error);
//             });
//     }).catch(error => {
//         console.log(error);
//     });

// Async-Await Method
// Use try-catch block to handle errors on use of async-await

// const proccessData = async () => {
//     try {
//         const receivedData = await getData(true);
//         console.log(receivedData);
//         const cleanedData = await cleanData(true);
//         console.log(cleanedData);
//     } catch (error) {
//         console.log(error);
//     }
// };

// proccessData();

// Books Example

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

const addBook = ( newBook ) => {
    const promise = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('Error: Book not added');
    });

    return promise;
};

let newBook = { title: "The Voyage of the Dawn Treader", author: "C.S. Lewis", year: 1952 };

// addBook(newBook).then(() => {
//     console.log("New list: ");
//     listBooks();
// }).catch(error => {
//     console.log(error);
// })

// Async-Await Method

const showBooks = async () => {
    try {
        await addBook(newBook);
        listBooks();
    } catch (error) {
        console.log(error);
    }
};

showBooks();