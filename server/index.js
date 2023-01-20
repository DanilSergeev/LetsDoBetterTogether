require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./db")
const modals = require("./models/models")
const router = require("./routes/index")
const errorHandler = require("./middleware/errorHandlingMiddleware")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000


//
app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use(express.static(path.resolve(__dirname,"static")))

app.use(errorHandler) //last
//



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is started on: ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}
start()

