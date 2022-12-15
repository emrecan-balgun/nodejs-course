const posts = [
    { title: 'Post One', body: 'This is post' },
    {title: 'Post Two', body: 'This is post' },
];

const getPosts = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting posts...");

        if(posts) {
            resolve(posts);
        } else {
            reject("No posts");
        }
    });
};

const addPost = (post) => {
    return new Promise((resolve, reject) => {
        console.log("Adding post...");

        if(post) {
            posts.push(post);
            // resolve(posts);
            resolve("Post added");
        } else {
            reject("No post added");
        }
    });
};

const newPost = { title: 'Post Three', body: 'This is post' };

// Promise Method
// addPost(newPost)
//     .then(response => {
//         console.log(response);
//         return getPosts()
//             .then(response => {
//                 console.log(response);
//             }).catch(error => {
//                 console.log(error);
//             })
//     }).catch(error => {
//         console.log(error);
//     });

// Async-Await Method
const proccessPosts = async () => {
    try {
        const addedPost = await addPost(newPost);
        console.log(addedPost);
        const receivedPosts = await getPosts();
        console.log(receivedPosts);
    } catch (error) {
        console.log(error);
    }
};

proccessPosts();