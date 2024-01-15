import mongoose from "mongoose";

const userModel = mongoose.model("users", mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    cartId: { type: mongoose.Schema.ObjectId, ref: "cart" },
    rol: { type: String, default: "user", enum: ["user", "admin"] }
}))
export default userModel