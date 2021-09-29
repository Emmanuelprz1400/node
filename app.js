const express = require('express');
const app = express();

const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


app.get('/', (req, res)=>{
    res.render("index", {titulo: "mi título dinámico"})
});

app.use(express.static(__dirname +"/public"))


app.listen(port,() => {
    console.log('servidor funcionando en el puerto', port)
})

app.get("/servicios", (req, res)=>{
    res.render("servicios", {tituloServicio: "mensaje dinámico de servicios"})
})
app.get((req, res,) => {
    res.render("404", {titulo404: "404"})

/*app.use((req, res, next) => {
    res.status(404).render("404",{
        titulo: "404"    })
})
/*const http = require('http');
const server = http.createServer((req, res) =>{
    res.end('estoy respondiendo a tu solicitud')
})
const puerto = 3000;
server.listen(puerto, ()=>{
    console.log('escuchando solicitudes')
})
/*const {frutas, dinero} = require('./frutas')
const cowsay = require("cowsay");
{frutas.forEach(item =>{
    console.log(item)
})
console.log(dinero)


console.log(cowsay.say({
    text : "I'm a dog",
    e : "oO",
    T : "U "
}));

};
/*const frutas = ['platano', 'manzana', 'pera', 'pera'];
frutas.forEach(item =>{
    console.count(item)
})
const express = require ("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hola mundo")
});

app.listen(port, () => {
    console.log('Example app listening')
});*/ });
