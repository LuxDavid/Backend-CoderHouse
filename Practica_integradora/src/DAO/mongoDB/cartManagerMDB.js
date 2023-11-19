import { cartModel } from '../models/cartModel.js';
import ProductManagerDB from './DBProductManager.js';

const products= new ProductManagerDB();

class CartManagerDB {

    
    async addCart() {

        try {
            const result = await cartModel.create({});

           return result;
        } catch (error) {
             return error ;
        }

    }

     //--------------------------------------------------------------------------

    async getCartById(id) {

        try {
            const cart = await cartModel.find({_id:id});
            return cart;
        } catch (error) {
            return error
        }
    }
}

export default CartManagerDB