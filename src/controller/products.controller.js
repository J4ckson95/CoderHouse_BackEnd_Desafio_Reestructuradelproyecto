import productModel from "../models/products.model.js";

export const getProducts = async (req, res) => {
    try {
        const { limit = 5, page = 1, query = {}, sort = "desc" } = req.query
        const sortOrden = sort === "asc" ? 1 : sort === "desc" ? -1 : -1
        const result = await productModel.paginate(query, { limit, page, sort: ({ price: sortOrden }), lean: true })
        const { docs: payload, page: pageM, hasPrevPage, prevPage, hasNextPage, nextPage, totalPages } = result
        res.render("home", {
            status: "Succes",
            payload,
            totalPages,
            prevPage,
            nextPage,
            page: pageM,
            hasPrevPage,
            hasNextPage,
            prevLink: hasPrevPage ? `/api/products/?page=${prevPage}&?limit=${limit}&?query=${query}&?sort=${sort}` : null,
            nextLink: hasNextPage ? `/api/products/?page=${nextPage}&?limit=${limit}&?query=${query}&?sort=${sort}` : null,
        })
    } catch (error) { res.status(500).send({ status: "Error", message: e.message }); }
}
export const getProdutcsById = async (req, res) => {
    try {
        const productId = req.params.pid
        const payload = await productModel.findById(productId)
        res.render("home", { payload })
    } catch (error) { res.status(500).send({ status: "Error", message: e.message }); }
}