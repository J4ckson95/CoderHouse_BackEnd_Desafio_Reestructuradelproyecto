import express from "express"
import mongoose from "mongoose"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import { config } from "dotenv"
import productsRouter from "./router/products.router.js"
import cartsRouter from "./router/carts.router.js"


const app = express()
config({ path: ".env" })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)


mongoose.connect(process.env.MONGOURL, { dbName: process.env.MONGODB })
    .then(() => {
        console.log("DataBase Conneted <(--_--)>");
        app.listen(process.env.PORT, () => console.log("Running Server"))
    })