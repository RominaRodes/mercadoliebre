const express = require('express');
const app = express();
const path = require('path');


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/crear', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/crear-producto.html'))
});
app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});



//app.listen(3001, () => console.log("servidor escuchando puerto 3001 funcionando"))
app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));
