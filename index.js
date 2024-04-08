import express from "express";
const app = express();

app.use(express.static('public'))

// app.get('/', (req, res)=>{
//     res.send('xdxd')
// })



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})