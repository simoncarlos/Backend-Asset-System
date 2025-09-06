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
import errorHandler from './middlewares/errorMiddleware.js';
import nonExistentRouteMiddleware from './middlewares/nonExistentRouteMiddleware.js';

const app = express();

app.use(express.json());

app.use("/allProducts", routerGetAllProducts)
app.use("/productsByQuery",routerGetProductsByQuery)
app.use("/updateProduct", routercontrollerUpdateProduct)

app.use("/allQRCode", routerGetQRCodeList)
app.use("/qrCodeFilter", routerGetQRCodeByAssetCode)
app.use("/updateQRCode", routerUpdateQRCode)

app.use("/createAssetList", routerCreateAssetList)
app.use("/getAssetById", routerGetAssetById)
app.use("/deleteAsset", routerDeleteAsset)

app.use(nonExistentRouteMiddleware)

app.use(errorHandler)

export default app;