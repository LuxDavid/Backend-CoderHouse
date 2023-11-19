import { Router } from "express";
import ProductManager from "../DAO/fileSystem/productManager.js";
import ProductManagerMDB from "../DAO/mongoDB/productManagerMDB.js";

const router=Router();

const productList= new ProductManager("./products.json");
const products= await productList.getProducts();




//---------------------------------------------------------------------

router.get('/', async (req,res)=>{

   

try {

    // const productsDB= await new ProductManagerMDB().getProducts()
    // console.log(productsDB);

    res.render('home',{
        products:products,
        style: 'index.css'
    });
} catch (error) {
    console.log(error);
}

});

//---------------------------------------------------------------------

router.get('/realTimeProducts', async (req,res)=>{

res.render('realTimeProducts',{
    products:products,
    style: 'index.css'
});

});


export default router