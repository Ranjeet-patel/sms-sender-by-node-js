const express = require('express')
const fast2sms = require('fast-two-sms')
const { use } = require('express/lib/router')
const app = express()
const port = 3000

require('dotenv').config()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.post('/sendMessage',async(req,res)=>{
    const response=await fast2sms.sendMessage({authorization : process.env.API_KEY,message:req.body.message,number:[req.body.number]})
    res.send(response)
})




app.get('/', (req, res) =>{

 res.render('index.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})