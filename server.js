import express from 'express'

import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express());

app.set('views', './views')

const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes')
const stekjesResponseJSON = await stekjesResponse.json()

const plaatjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_afbeeldingen?filter={%20%22type%22:%20{%20%22_eq%22:%20%22stekjes%22%20}}')
const plaatjesResponseJSON = await plaatjesResponse.json()

app.get('/', async function (request, response) {
 response.render('index.liquid', {
  stekjes: stekjesResponseJSON.data,
  plaatjes: plaatjesResponseJSON.data
 })
})

app.get('/stekjes', async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee
response.render('stekjes.liquid', {
 stekjes: stekjesResponseJSON.data,
 plaatjes: plaatjesResponseJSON.data
})
})

app.get('/stekjes/:id', async function (request, response) {
  const stekjeId = request.params.id;
  const stekjeResponse = await fetch(`https://fdnd-agency.directus.app/items/bib_stekjes/${stekjeId}`);
  const stekjeData = await stekjeResponse.json();
  
  response.render('stekjes.liquid', { stekje: stekjeData.data });
  });


/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/

app.set('port', process.env.PORT || 8888)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
