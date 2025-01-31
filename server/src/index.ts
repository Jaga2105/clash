import express ,{Application,Request,Response} from 'express'
import 'dotenv/config'
import path from "path"
import {fileURLToPath} from 'url'
import ejs, { name } from "ejs"
import { sendEmail } from './config/mail.js'

// Queue
import "./jobs/index.js"
import { emailQueue, emailQueueName } from './jobs/EmailJob.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

const app:Application = express()
const port = process.env.PORT || 7000
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set view engine
app.set("view engine", "ejs")
app.set("views",path.resolve(__dirname, "./views"))


app.get('/', async(req:Request,res:Response)=>{
    // res.send(`Server is listening on port ${port}`)
    const html = await ejs.renderFile(__dirname+`/views/emails/welcome.ejs`, {name:"Jagannath Nayak"})
    // await sendEmail("jateyay871@rykone.com", "Testing SMTP", html)
    // res.send(html)
    // res.render("emails/welcome", {name:"Jagannath"})
    await emailQueue.add(emailQueueName, {to:"jateyay871@rykone.com",subject:"Testing Queue Email", body:html})
     res.json({msg:"Email sent successfully"})
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
