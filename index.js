const express = require('express')
const mongoose  = require('mongoose')
const ibgeData = require('./ibgedata')

const app = express ()


// Método para leitura de JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Olá, mundo!' })
    
})

// Entregar uma porta para ter acesso ao código acima

mongoose.connect('mongodb+srv://dbUser:SLtELDZ0oe07D4cf@apicluster.cbvw3nt.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log('Conexão ao MongoDB feita com sucesso!')
            app.listen(3000) // Método para escutar alguma porta

        })
        .catch((err) => console.log(err))