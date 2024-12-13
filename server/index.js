import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 7000

app.get('/', (req,res)=>{
    res.send(`Server is listening on port ${port}`)
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
