const Router = require("express")
const router =  new Router
const usersRouter = require("./usersRouter")
const requestRouter = require("./requestRouter")
const categoryRouter = require("./categoryRouter")

router.use("/user", usersRouter)
router.use("/request", requestRouter)
router.use("/category", categoryRouter)

module.exports = router