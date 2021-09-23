const {frutas, dinero} = require('./frutas')
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
});*/ 