const axios = require('axios')

// A api pública do IBGE utiliza o método get para requisição de dados.
axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios').then(function(response){
    console.log(response.data)
}).catch(function(error) {
    if(error){
        console.log(error)
    }
})

// Para chamar os dados da api em questão, utilizar o script "node ibgedata.js"







// 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios'


