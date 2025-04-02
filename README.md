# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

Het project Bieb in Bloei is een sociaal en duurzaam initiatief in samenwerking met OBA Linnaeus en buurtbewoners van Amsterdam Oost. De website die ik heb ontwikkeld, richt zich op de Stekjespagina, waar gebruikers een overzicht vinden van beschikbare stekjes en hun favoriete stekje kunnen liken. 

De website is ontworpen met een progressive enhancement-aanpak, waardoor de kernfunctionaliteit ook zonder JavaScript en CSS intact blijft. Met Node.js, Express en Liquid worden dynamische pagina’s gegenereerd, en data wordt opgehaald uit een Directus CMS. De focus ligt op toegankelijkheid, gebruiksvriendelijkheid en een visueel aantrekkelijke weergave van duurzame initiatieven. Dit project draagt bij aan de missie van Bieb in Bloei om de buurt te verbinden door middel van groen en sociale interactie.

https://the-web-is-for-everyone-interactive-wef2.onrender.com/

### Debriefing opdrachtgever

<details><summary>Debriefing Bieb in Bloei</summary>

### Communicatie

#### Hoe gaan we communiceren?
- **Donderdag 13 maart 9.30 uur** op locatie sprint review: Linnaeusstraat 44, 1092 CL Amsterdam + rondleiding (Nazneen meevragen)
- **Mail opdrachtgever:** [m.j.gunsing@hva.nl](mailto:m.j.gunsing@hva.nl)

---

### Achtergrondinformatie

#### Wie is de opdrachtgever?
- **Bieb in Bloei (BiB)** is een sociaal groenproject dat is bedacht, opgezet en uitgevoerd door studenten van Living Lab Buurtcampus Oost (HvA) voor en met buurtbewoners in Amsterdam Oost, in samenwerking met OBA Linnaeus.
- Het is een **fysieke ontmoetingsplek** met een vast programma dat gaat draaien vanaf 26 maart, met een ondersteunende website die in de hoek ook op een pc staat voor bezoekers van de bieb.
- De website biedt een overzicht van duurzame projecten die zijn opgesteld door de Buurtcampus Oost. 
  - **Doel:** Samen de buurt duurzamer, gezonder en inclusiever maken. 
  - **Voorbeelden van projecten:** De Stekjes Bieb, De Zadenbieb en de Geveltuin.
- **Bieb in Bloei-hoek** in de bibliotheek van Amsterdam biedt informatie over alles wat te maken heeft met groen, zoals planten/stekjes ruilen, zonnepanelen laten plaatsen, zaden ruilen en boeken lezen over duurzaamheid.

---

### Opdrachtomschrijving & Doelstelling

#### Wat is het hoofddoel van de website?
De website speelt een centrale rol in het project Bieb in Bloei. Het hoofddoel is om de buurt dichter bij elkaar te brengen door middel van een **groene en sociale insteek**. Dit wordt bereikt door mensen te betrekken bij lokale groene initiatieven en het stimuleren van sociale cohesie.

#### Mogelijke verbeteringen voor de website:
- **Mascotte Harry**: Interactieve en speelse presentatie van informatie voor zowel jongeren als volwassenen.
- **Visueel aantrekkelijke duurzaamheid**: Groen en duurzaamheid moeten op een aantrekkelijke manier worden gepresenteerd zonder een ‘saaie’ uitstraling.
- **Sociale interactie**: Verhalen en ervaringen van buurtbewoners kunnen bijdragen aan de betrokkenheid.
- **Creatieve functionaliteiten**: Denk aan een **weather API** of andere interactieve elementen.
- **Functionele verbeteringen**: Gebruiksvriendelijke structuur met duidelijke code- en designconventies.
- **Laagdrempelige toegankelijkheid**: Extra uitleg over aanvragen van gemeentelijke zaken via de website.

#### Zijn er specifieke functies die jullie op de website willen hebben?
Er zijn geen verplichte functies vanuit de opdrachtgever, maar er is **volledige creatieve vrijheid** om innovatieve toevoegingen te bedenken.

#### Wat moeten we bereiken zodat de opdrachtgever tevreden is?
- Gebruik van de bestaande **styleguide**.
- **Dynamische data** implementeren (de website hoeft niet volledig af te zijn).

---

### Aanleiding

#### Waarom wordt deze opdracht nu ingediend?
- Studenten krijgen een **frisse blik** op de website en brengen mogelijke verbeteringen aan.
- **Bieb in Bloei** krijgt een vaste plek in de bibliotheek van Amsterdam, en de website moet relevant en interessant blijven.

---

### Oplevering
- **Gebruik van de styleguide** van Nazneen.
- **Oplevering via e-mail** met de desbetreffende **GitHub live-links**.

---

### Randvoorwaarden

#### Wat is noodzakelijk om te starten?
- Gebruik van **Node.js** voor het ophalen van data.
- Styling en functionaliteit toevoegen met **HTML, JavaScript en CSS**.
- **Sprint (serverside) duurt twee weken**.
- Nog te ontvangen **content** voor de Node.js-omgeving.

---

### Gebruikers van het eindresultaat

#### Eindgebruikers
- De website wordt beschikbaar gesteld op een **computer in de bibliotheek**.
- **Breed publiek** van alle leeftijden en achtergronden.

#### Wat willen ze bereiken?
- **Bieb in Bloei** zet zich in voor **sociale, groene en duurzame projecten** in Amsterdam Oost.
- De website **informeert bezoekers** over de initiatieven van Bieb in Bloei in de buurt.

---

### Relatie met andere projecten

**Bieb in Bloei werkt samen met:**
- **Gemeente Amsterdam**
- **Restaurant Elixer**
- **Buurtinitiatieven**
- **Weerproof.nl**
- (Zie de website voor partners)

Bieb in Bloei streeft naar **meer buurtcohesie** op het gebied van duurzaamheid en groen door samen te werken met deze partijen.

</details>

## Gebruik
User stories: 
- Als gebruiker wil ik stekjes kunnen zien op de website van Bieb in Bloei zodat ik een overzicht heb van alle stekjes.
- Ik wil op de website kunnen navigeren als ik alleen gebruik kan maken van HTML. Alles moet het eerst doen zonder css en JavaScript.
- Als gebruiker van de website van bieb in bloei wil stekjes kunnen liken zodat ik kan aantonen dat ik een stekje leuk vind. Voor de opdrachtgever is dit een leuke interessante tool om aan de hand van deze statistieken te onderzoeken.

Ik heb een gedeelte gemaakt van de website van Bieb in Bloei, namelijk de stekjespagina. Met deze website kunnen gebruikers die in de Openbare Bibliotheek van Amsterdam (nu nog alleen in Oost) komen de website navigeren en hun favoriete stekjes bekijken. Op de website is namelijk een overzicht van alle stekjes te vinden. Gebruikers kunnen tevens hun favoriete stekje liken en dit komt in de database terecht. 

--> Tonen hoe het is geworden???


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

Bij kenmerken staat welke technieken zijn gebruikt en hoe. Hier leg je in grote lijnen uit hoe de interactieve toepassing werkt met NodeJS, Express, Liquid en Directus en Client-side scripting. Toon screenshots of een video van de UI-stack states die je hebt ontworpen en gebouwd, en leg per state uit hoe de code werkt.

Aan de hand van jouw uitleg moet iemand anders in grote lijnen de code kunnen begrijpen. (misschien kan je je code ook nog opschonen, nette witruimte en comments toevoegen, niet gebruikte routes weghalen, ...)


Voor dit project heb ik een interactieve website gebouwd waarbij ik gebruik heb gemaakt van progressive enhancement om een toegankelijke en soepele gebruikerservaring te bieden. De website bestaat onder andere uit een overzichtspagina, een detailpagina en een post-interactie. Op de overzichtspagina kunnen gebruikers een lijst met stekjes bekijken en doorklikken naar de desbetreffende detailpagina, waar meer informatie over een specifiek stekje wordt getoond. Daarnaast kunnen gebruikers stekjes liken zodat het in de database wordt opgeslagen.

Om te website op te zetten heb ik gebruik gemaakt van Node.JS (server-side JavaScript) met packages als Express en Liquid.

States hier uitleggen!!!

Bij de ontwikkeling van de website heb ik HTML, CSS en JavaScript gecombineerd om zowel de basisfunctionaliteit als interactieve elementen te realiseren. Door progressive enhancement toe te passen, blijft de kernfunctionaliteit van de website intact, zelfs wanneer JavaScript en css zijn uitgeschakeld. De website is daarnaast responsief ontworpen, zodat hij goed werkt op zowel desktop als mobiele apparaten. Ten slotte is de website getest op verschillende browsers om te kijken of functies ondersteund worden.

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->

Het project is gemaakt met Node.JS. Dit is server-side Javascript en zal los gedownload moeten worden. In Visual Studio Code kan je vervolgens code schrijven voor een website met een live server die niet alleen lokaal gerendered wordt. In VS code haal je dependencies (pakketten) op door 'npm install' in de terminal te zetten. Vervolgens kan je met 'npm start' de port openen waarop de server live staat. Deze port maak je zelf aan. Maak de server aan door 'node server.js' in te voeren. 

We verdelen de mappen in twee soorten mappen: client-side en server-side: een views map en een public map. De public-map is voor statische bestanden, zoals css en client-side JavaScript. Stel dit in aan de hand van deze code: ```app.use(express.static('public'))``` ```app.set('views', './views')```.

In dit project wordt gebruik gemaakt van Express. Dit is een framework waarmee routes kunnen worden aangemaakt in de server.js. Voor elke nieuwe pagina moet namelijk een aparte route worden neergezet. Je downloadt Express met de volgende code: ```const express = require('express');``` ```const app = express();```. Tenslotte moet er nog een package gedownload worden waar inhoud dynamisch met code geschreven kan worden. Dit moet aan de hand van deze code: ```import { Liquid } from 'liquidjs';``` & ```const engine = new Liquid(); app.engine('liquid', engine.express());```. Met liquid kan je html code schrijven.

Deze code wordt opgehaald door gebruik te maken van double brackets. Als je een route aanmaakt moet deze namelijk gelinkt worden aan een database. Dat is in dit project Directus. In Directus kunnen Json-bestanden makkelijk worden aangepast en er kan code toegevoegd worden (door bijvoorbeeld een post te maken).


## Bronnen
- [Wireflow schetsen maken](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md#wireflow-schetsen)
- [Post maken](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/user-generated-content.md#oefenen-met-een-post)
- [UI stacks](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/ui-states.md)
- [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
- [Can I Use?](https://caniuse.com/)
- [HTML validator](https://validator.w3.org/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
