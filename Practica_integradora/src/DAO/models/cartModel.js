import mongoose from "mongoose";

const productCollection = 'carts';

const cartSchema = new mongoose.Schema({
    products: {
        type:[
            {
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'products',
                    required:true,
                    
                },
                quantity:{
                    type:Number,
                    required:true,
                    default:1
                }
            },
        ],
    }
});

export const cartModel = mongoose.model(productCollection, cartSchema);