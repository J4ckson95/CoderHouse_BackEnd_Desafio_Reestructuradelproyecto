import cartModel from "../models/carts.model.js"

export const createCart = async (req, res) => {
    try {
        const newCart = await cartModel.create({})
        res.status(200).send({ status: "Succesfull", message: `New cart created with id: ${newCart._id}` })
    } catch (error) { res.status(500).send({ status: "Error", message: error.message }); }
}
export const getCartById = async (req, res) => {
    try {
        const cartId = req.params.cid
        const search = await cartModel.findById(cartId).lean()
        res.render("cart", { search })
    } catch (error) { res.status(500).send({ status: "Error", message: error.message }); }
}