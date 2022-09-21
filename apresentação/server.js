
const express = require('express')
const calculadora = require("./caulculadora_module")
const app = express()
const port = 3000
app.use("/", express.static("static"))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.post("/", (req,res)=>{
    const {num1, num2, operacao} = req.body
    const resultado = calculadora(num1, num2, operacao)
    res.json({resultado})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
