// import jsonServer from 'json-server';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import jsonServerAuth from 'json-server-auth';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const server = jsonServer.create();
// const router = jsonServer.router(join(__dirname, 'Data', 'db.json'));
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(jsonServerAuth);

// // Custom search endpoint
// server.get('/search/courses', (req, res) => {
//     const { q } = req.query;
//     const courses = router.db.get('courses').value().filter(course =>
//         course.name.toLowerCase().includes(q.toLowerCase())
//     );
//     res.json(courses);
// });

// server.use(router);

// const PORT = 9001;
// server.listen(PORT, () => {
//     console.log(`JSON Server is running on port ${PORT}`);
// });
// import jsonServer from 'json-server';
// import jsonServerAuth from 'json-server-auth';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'Data', 'db.json'));
// const middlewares = jsonServer.defaults();

// // Bind the router db to the app
// server.db = router.db;

// server.use(middlewares);
// server.use(jsonServerAuth); // Use json-server-auth for authentication

// // Adding custom routes or middleware if needed
// server.use(router);

// const PORT = 8000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
