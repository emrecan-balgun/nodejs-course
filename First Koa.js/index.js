const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = 3000;

// app.use(page => {
//     if(page.path === '/') {
//         page.body = '<h1>Hello Koa</h1>';
//     } else if(page.path === '/about') {
//         page.body = '<h1>About Page</h1>';
//     } else if(page.path === '/contact') {
//         page.body = '<h1>Contact Page</h1>';
//     } else {
//         page.body = '<h1>404 Page</h1>';
//     }
// });

router.get('/', (page, next) => {
    page.body = '<h1>Hello Koa</h1>';
});

router.get('/about', (page, next) => {
    page.body = '<h1>About Page</h1>';
});

router.get('/contact', (page, next) => {
    page.body = '<h1>Contact Page</h1>';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});