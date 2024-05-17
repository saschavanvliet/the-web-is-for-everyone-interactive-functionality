// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel het basis endpoint in
const apiUrl = 'https://redpers.nl/wp-json/wp/v2'

// Directus link
const apiDirectus = 'https://fdnd-agency.directus.app/items/redpers_shares'

// https://github.com/ju5tu5/the-web-is-for-everyone-interactive-functionality

//Methode: post
//Params --> aangevraagde slug
//Gebruik een form voor de post data

// Haal alle variabelen op die je wil maken.
const apiPosts = apiUrl + '/posts'
const apiUsers = apiUrl + '/users'
const apiCategories = apiUrl + '/categories'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// Maak een GET route voor de index (home)
app.get('/', function (_request, response) {
  // Haal alle personen uit de WHOIS API op
  fetchJson(apiPosts).then((apiData) => {
    // apiData bevat gegevens van alle personen uit alle squads
    // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view

    // Render index.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
    response.render('home.ejs', {articles: apiData,messages:messages})
  })
})

const messages=[]
// Maak een POST route voor de index (home)
app.post('/', function (request, response) {
  messages.push(request.body.messages)
  console.log(JSON.stringify(messages))
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})

app.get('/artikel/:slug', function (request, response) {
  // --> dit zijn routes (home, article, category)
 
  // Hier haal je de url op en maak je er een Json file van ipv een link. Waarna het wordt vernoemd naar apiData
  fetchJson(apiPosts + '?slug=' + request.params.slug).then((apiData) => {
 
      // Deze info wordt daarna
      // meegegeven aan de toegewezen EJS
      response.render('article.ejs', {article: apiData[0]
        // .data is belangrijk om er bij te schrijven
        // alle id's zijn een soort van mappen, en door .data te schrijven ga je eigenlijk een map 'dieper'
    })
      // console.log(apiData)
  })
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 9000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})