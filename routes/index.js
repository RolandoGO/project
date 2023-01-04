const express = require("express")
const router = express.Router()


router.get("/", (req,res,next)=>{


    res.end()
})


//Router for every entity

// router.use()


module.exports = router