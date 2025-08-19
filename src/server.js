import express from 'express';

import login from './routers/routerLogin.js';
import routerProductById from './routers/routerProductById.js';
import routerAllProducts from './routers/routerAllProducts.js';
import routerProductsByQuery from './routers/routerProductsByQuery.js';
import routerCreateProduct from './routers/routerCreateProduct.js';

import errorHandler from './middlewares/errorMiddleware.js';
import nonExistentRouteMiddleware from './middlewares/nonExistentRouteMiddleware.js';

const app = express();

app.use(express.json());

app.use("/login", login);

app.use("/allProducts", routerAllProducts)
app.use("/productById", routerProductById)
app.use("/productsByQuery", routerProductsByQuery)
app.use("/createProduct", routerCreateProduct)

app.use(nonExistentRouteMiddleware)

app.use(errorHandler)

export default app;