const Router = require("express")
const router =  new Router
const usersRouter = require("./usersRouter")
const requestRouter = require("./requestRouter")
const categoryRouter = require("./categoryRouter")
const statusRouter = require("./statusRouter")

router.use("/user", usersRouter)
router.use("/request", requestRouter)
router.use("/category", categoryRouter)
router.use("/status", statusRouter)

module.exports = router