const TeleBot = require('telebot');
const bot = new TeleBot('YOUR_TOKEN');

// slash commands
bot.on(['/start'], (msg) => msg.reply.text('Je suis MaratzBot, je suis programmé pour shitposter. Essaie /naturalisation pour voir !'));
bot.on(['/timeline'], (msg) => msg.reply.text('En tant que bot du futur venant de 20XX, je confirme que nous sommes bien dans la pire timeline 👎'));

// passive listening
bot.on([/Dark Souls/, /dark souls/], (msg) => msg.reply.text('Je n\'aurais pas mieux dit ! 💀'));
bot.on([/shinies/, /shiny/], (msg) => msg.reply.text('https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif'));
bot.on([/sur Paris/, /sur Versailles/, /sur Lyon/], (msg) => msg.reply.sticker('CAADBAADTgADqbwaFxdZN9QIWRATAg'));
bot.on(/5\/10/, (msg) => msg.reply.text('Pisse-froid, va !'));

// notices edits
bot.on('edit', (msg) => msg.reply.text('Ton édit de Nantes restera entre nous 👀'));

// keyboard for citizenship
bot.on(['/naturalisation'], msg => {

    let replyMarkup = bot.keyboard([
        ['/citoyen', '/depute'],
        ['/senateur', '/conseilconstitutionnel']
    ], {resize: true});

    msg.reply.text('Alors comme ça tu veux rejoindre la Maratzie, hein 🤔 À quel niveau ? Si tu connais les rangs tu peux directement taper la commande du rang qui t\'intéresse par exemple /GG2 pour "député rang 2" ou /ASS1 pour "sénateur rang 1"', {replyMarkup});
});

// choice for citizen
bot.on(['/citoyen'], (msg) => {
    let replyMarkup = bot.keyboard([
        ['/GG1', '/GG2'],
        ['/GG3']
    ], {resize: true});
    msg.reply.text('Les citoyens, la Glaise Gouvernée ! Quel palier ?', {replyMarkup});
});

bot.on(['/GG1'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 1\n\n1️⃣ Terminer BEAT en moins de 10 vies\n2️⃣ Score de 130k minimum sur Mussel\n3️⃣ Tenir au moins 60 secondes sur le niveau 1 de Super Hexagon'));

bot.on(['/GG2'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 2\n\n1️⃣ Terminer Okami\n2️⃣ Réussir une run all-zone avec Cadence sur CotN\n3️⃣ Score de 50 minimum sur FFFFFF'));

bot.on(['/GG3'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 3\n\n1️⃣ Tenir au moins 60 secondes sur le niveau 3 de Super Hexagon\n2️⃣ Score de 75 minimum sur Maverick Bird\n3️⃣ Montrer 30 productions écrites (critiques, 2000-word analysis, nouvelles, etc.) au Bureau d\'Investigation du Travail Connecté'));

// choix pour député
bot.on(['/depute'], msg => {
    let replyMarkup = bot.keyboard([
        ['/OP1', '/OP2'],
        ['/OP3']
    ], {resize: true});
    msg.reply.text('Les députés, vaillants Occupants Parlmentaires ! Quel palier ?', {replyMarkup});
});

bot.on(['/OP1'], (msg) => msg.reply.text('Pour devenir un député de rang OP 1\n\n1️⃣ Réussir une run all-zone avec Cadence en moins de 15 minutes sur CotN\n2️⃣ Score de 40k minimum sur memrrtiks suashem\n3️⃣ Avoir suggéré 5 stickers validés et implémentés'));

bot.on(['/OP2'], (msg) => msg.reply.text('Pour devenir un député de rang OP 2\n\n1️⃣ Terminer le mode chrono solo sur Koloro\n2️⃣ Tenir au moins 60 secondes sur le niveau 6 de Super Hexagon\n3️⃣ Produire un shitpost graphique'));

bot.on(['/OP3'], (msg) => msg.reply.text('Pour devenir un député de rang OP 3\n\n1️⃣ Terminer Starseed Pilgrim\n2️⃣ Prouver qu\'on speedrun un jeu\n3️⃣ Atteindre et terminer le niveau 5 sur Thumper'));

// choix pour sénateur
bot.on(['/senateur'], msg => {
    let replyMarkup = bot.keyboard([
        ['/ASS1', '/ASS2'],
        ['/ASS3']
    ], {resize: true});
    msg.reply.text('Les sénateurs, vaillantes Âmes Sombres du Sénat! Quel palier ?', {replyMarkup});
});

bot.on(['/ASS1'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 1\n\n1️⃣ Réussir une run all-zone avec au moins 6 persos sur CotN\n2️⃣ Finir n\'importe quel Dark Souls OU 200 secondes sur le niveau 6 de Super Hexagon\n3️⃣ Finir CORE en moins de 5 vies'));

bot.on(['/ASS2'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 2\n\n1️⃣ Supprimer son compte SC (obligatoire)+ Twitter ou Facebook (au choix)\n2️⃣ Réussir le skip des Chaudrons Magiques sur Rayman M\n3️⃣ Finir Alundra'));

bot.on(['/ASS3'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 3, niveau ultime avant la plongée dans l\'enfer du conseil constitutionnel, il faut compléter cette liste des oeuvres essentielles de Maratzie\n\nhttps://onlyo.co/2wNT3ti'));

// choix pour conseil constitutionnel
bot.on(['/conseilconstitutionnel'], msg => {
    let replyMarkup = bot.keyboard([
        ['/SC1', '/SC2'],
        ['/SC3', '/SC4'],
        ['/SC5']
    ], {resize: true});
    msg.reply.text('Le conseil constitutionnel, le Sommet de la Cacapublilexicomatisation. 🔥 Attention, c\'est HARDCORE ! 🔥 Quel palier ?', {replyMarkup});
});

bot.on(['/SC1'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 1\n\n1️⃣ Réussir une run all-zone avec Aria sur CotN\n2️⃣ Faire tous les niveaux en S sur Thumper\n3️⃣ Produire une vidéo shitpost sur Youtube'));

bot.on(['/SC2'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 2, il faut\n\n1️⃣ Score minimum de 100 sur FFFFFF\n2️⃣ Score minimum de 100 sur Maverick Bird\n3️⃣ Score minimum de 100k sur memrrtiks suashem'));

bot.on(['/SC3'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 3\n\n1️⃣ Finir 3 jeux de David Cage (Nomad Soul exclu)\n2️⃣ Speedrunner 3 jeux en ayant un PB dans une fenêtre de temps de WR+30%\n3️⃣ Atteindre 333 secondes sur Devil Daggers'));

bot.on(['/SC4'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 4\n\n1️⃣ Réussir une run 9-character sur CotN\n2️⃣ Speedrunner 1 jeu en ayant un PB dans une fenêtre de temps de WR+9%\n3️⃣ Montrer 99 productions écrites (critiques, 2000-word analysis, nouvelles, etc.) au Bureau d\'Investigation du Travail Connecté'));

bot.on(['/SC5'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 5\n\n1️⃣ Réussir une run all-zone avec Coda sur CotN\n2️⃣ Réussir le skip de Final Electrique sur Rayman M\n3️⃣ Atteindre 500 secondes sur Devil Daggers.\n\nC\'est le rang le plus élevé en Maratzie. 🔥🔥🔥'));

bot.start()
