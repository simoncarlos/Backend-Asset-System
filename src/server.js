import express from 'express';
import login from './routers/routerLogin.js';
import routerProductById from './routers/routerProductById.js';
import routerAllProducts from './routers/routerAllProducts.js';

const app = express();

app.use(express.json());

app.use("/login", login);

app.use("/allProducts", routerAllProducts);
app.use("/productById", routerProductById);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ message: err.message });
});

export default app;