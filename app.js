// 1 Importaciones
const express = require("express")
const app = express()
require ("dotenv").config()

// 2. MIDDLEWARES
app.use(express.static('public'))
app.set("views", __dirname + "/views")

// 3. RUTAS

app.get("/", (req, res)=>{
    
    res.sendFile(__dirname + '/views/home.html')
})
app.get("/About", (req, res) => {
	
	res.sendFile(__dirname + '/views/about.html')

})

app.get("/Works", (req, res) => {
	
	res.sendFile(__dirname + '/views/works.html')

})

app.get("/Fotos", (req, res) => {
	
	res.sendFile(__dirname + '/views/fotos.html')

})

// 4. SERVIDOR
app.listen(process.env.PORT, () =>{
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
    })