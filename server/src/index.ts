import express ,{Application,Request,Response} from 'express'
import 'dotenv/config'

const app:Application = express()
const port = process.env.PORT || 7000

app.get('/', (req:Request,res:Response)=>{
    res.send(`Server is listening on port ${port}`)
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
