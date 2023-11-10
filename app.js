/**********************************************************************
*Objetivo: criar uma API para esponder dados de Estados e Cidades.
*Data: 10/11/2023.
*Autor: Natália bastazini.
*Versão:1.0
**********************************************************************/

/******************************************************************************************
 * Instalação das dependenciasclear para criação da API.
 *  express    - npm install express --save
 *          Dependencia do node para auxiliar na criação da API.
 * 
 *  cors    - npm install cors --save
 *          Dependencia para manipular recursos de acesso, permissões, etc da API (HEADER).
 * 
 *  body-parser - npm install body-parser --save
 *          Dependencia para auxiliar na chegada de dados na API (BODY).
 ******************************************************************************************/

/******************************************************************************************
*   Requisição dados 
*
*   GET - Pegar dados.
*   POST - Envia dados novos.
*   PUT - Altera dados existentes.
*   DELETE - Apaga dados existentes.
*
*   Header - endereçamento dos dados (quem envia e quem recebe).
*   Body - Conteúdo dos dados.
********************************************************************************************/
// Import das bibliotecas do projeto.
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('http')

// Cria um objeto app tendo como referência a classe do grupo express.
const app = express()

// request - Receber dados.
// response - Devolve dados.


// Função para configurar as permissões do cors.
app.use((request, response, next) => {
    // Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    // Configura os métodos que poderão ser utilizdos na API (GET, POST, PUT, e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

// EndPoints: Listar a sigla de todos os Estados.

app.get('/estados/sigla', cors(), async function (request, response, next){

    let controleListaEstados = require('./modulo/manipulando_array_json.js')
    let estados = controleListaEstados.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

// Executa a API e faz ela ficar aguardando requisições.
app.listen(8080, function(){
    console.log('API funcionando e aguardando requesições')
})




