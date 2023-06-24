
const express=require("express")
const app=express();
const bodyParser=require("bodyParser");
const port=4444;
const path=require("path")

app.disable("x-powered-by");
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("public",path.join(__dirname,'public'));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/public/Index.html"))
})

app.listen(port,()=>{
    console.log("server is listening")
})