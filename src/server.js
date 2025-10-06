import express from 'express';
import { 
    routerGetAllProducts,
    routerGetProductsByQuery,
    routercontrollerUpdateProduct
} from './routers/routerProducts.js';
import{
    routerGetQRCodeList,
    routerGetQRCodeByAssetCode,
    routerUpdateQRCode
}from './routers/routerQRCode.js';
import {
    routerCreateAssetList,
    routerGetAssetById,
    routerDeleteAsset
} from './routers/routerAssets.js';
import { 
    routerCreateUser,
    routerLoginUser,
    routerLogoutUser
} from './routers/routerUsers.js';
import errorHandler from './middlewares/errorMiddleware.js';
import nonExistentRouteMiddleware from './middlewares/nonExistentRouteMiddleware.js';
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();

const options = {
    origin: [process.env.CORS_ORIGIN_TEST, process.env.CORS_ORIGIN_PROD],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(options))
app.use(express.json());
app.use(cookieParser());

app.use("/allProducts", routerGetAllProducts)
app.use("/productsByQuery",routerGetProductsByQuery)
app.use("/updateProduct", routercontrollerUpdateProduct)

app.use("/allQRCode", routerGetQRCodeList)
app.use("/qrCodeFilter", routerGetQRCodeByAssetCode)
app.use("/updateQRCode", routerUpdateQRCode)

app.use("/createAssetList", routerCreateAssetList)
app.use("/getAssetById", routerGetAssetById)
app.use("/deleteAsset", routerDeleteAsset)

app.use("/registerUser", routerCreateUser)
app.use("/loginUser", routerLoginUser)
app.use("/logoutUser", routerLogoutUser)

app.use(nonExistentRouteMiddleware)

app.use(errorHandler)

export default app;