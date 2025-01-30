var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import 'dotenv/config';
import path from "path";
import { fileURLToPath } from 'url';
import ejs from "ejs";
import { sendEmail } from './config/mail.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(`Server is listening on port ${port}`)
    const html = yield ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, { name: "Jagannath Nayak" });
    yield sendEmail("jateyay871@rykone.com", "Testing SMTP", html);
    res.send(html);
    //  res.json({msg:"Email sent successfully 2"})
    // res.render("emails/welcome", {name:"Jagannath"})
}));
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map