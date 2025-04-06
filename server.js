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

const userId = 6

app.get('/', async function (request, response) {
 response.render('index.liquid', {
  stekjes: stekjesResponseJSON.data,
  plaatjes: plaatjesResponseJSON.data
 })
})

app.get('/stekjes', async function (request, response) {
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

app.post('/stekjes/:id', async function (request, response) {
  const stekjeId = request.params.id;
    const userstekjeEntry = await fetch(`https://fdnd-agency.directus.app/items/bib_users_stekjes?filter={"bib_stekjes_id":${stekjeId},"bib_users_id":${userId}}`)
    const userstekjeEntryJSON = await userstekjeEntry.json()

    if (userstekjeEntryJSON.data.length != 0) {
      // Delete de boel uit Directus
      await fetch(`https://fdnd-agency.directus.app/items/bib_users_stekjes/${userstekjeEntryJSON.data[0].id}`, {
        method: 'DELETE'
      });
    } else {
      const directusResponse = await fetch('https://fdnd-agency.directus.app/items/bib_users_stekjes', {
        method: 'POST',
        body: JSON.stringify({
          bib_stekjes_id: stekjeId, 
          bib_users_id: 6, 
        }),
        headers: {
          'Content-Type': 'application/json' 
        }
      });
    }
    response.redirect(303, '/');
});

app.get('/404', async function (request, response) {
  response.render('404.liquid')
})

app.use((req, res, next) => {
  res.status(404).render('404.liquid')
})

app.set('port', process.env.PORT || 8888)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
