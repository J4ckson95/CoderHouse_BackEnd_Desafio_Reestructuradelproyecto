import mongoose from "mongoose";

const cartModel = mongoose.model("carts", mongoose.Schema({
    products: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            quantity: { type: Number }
        }],
        default: []
    }
}))
export default cartModel