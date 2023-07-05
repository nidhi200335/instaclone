const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello")
   
})

// router.post("/signup", (req, res) => {
// res.json("data posted sucessfully")
// })

module.exports = router;