// WIth OUt express

const http= require('http')

const sever =http.createServer((request,response) => {
    console.log('headers',request.headers)
    console.log('methods',request.url)
    console.log('url',request.method)

    const user={
        name:'Asharib',
        age:'20'
    }

    response.setHeader('Content-Type','application/json')
    response.end(JSON.stringify(user))
})

sever.listen(3001)


// with express

// middile wear
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// 
app.get('/profile',(req,res)=>{
    res.send('Getting Profile')
})

app.get('/',(req,res)=>{
    res.send('Getting root')
})
app.post('/profile',(req,res)=>{
    console.log(req.body)
    const user={
                name:'Asharib',
                age:'20'
            }

    res.send('')
})

const express=require('express')

const app=express()

app.use((req,res,next)=>{
    console.log('<h1>heloooo</h1>')
    next()
})

app.get('/',(req,res)=>{
    res.send('tested')
})

app.listen(3001)

// RESTFULL API


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/:id',(req,res)=>{
    console.log(req.query)
    console.log(req.headers)
    console.log(req.params)
    res.status(404).send('not found')
})

// static file calling

const express =require('express')
const bodyParser= require('body-parser')

const app=express()
app.use(express.static(__dirname + '/public'))

app.listen(3001)


// file system 
const fs=require('fs')
 
fs.readFile('./file.txt',(err,data)=>{
    if (err) {
        console.log('errorrr')
    }
    console.log('1',data.toString())
})

const file=fs.readFileSync('./file.txt')
console.log(file.toString())

// edit in file

fs.appendFile('./file.txt','its so cool', err=>{
   if(err){ 
       console.log(err)
    }
})

fs.writeFile('bye.txt','dont go please',err=>{
    if(err){
        console.log(err)
    }
})

// delet

fs.un(err){
        console.log(err)
    }link('bye.txt',err=>{
    if
})