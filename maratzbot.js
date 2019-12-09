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

bot.on(['/GG1'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 1\n\n1️⃣ Terminer 140\n2️⃣ Faire un copypasta\n3️⃣ Tenir au moins 60 secondes sur le niveau 1 de Super Hexagon'));

bot.on(['/GG2'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 2\n\n1️⃣ Être à l\'origine de 3 stickers implémentés\n2️⃣ Réussir une run all-zone avec Cadence\n3️⃣ Avoir un jeu speedrunné à son actif'));

bot.on(['/GG3'], (msg) => msg.reply.text('Pour devenir un citoyen de rang GG 3\n\n1️⃣ Tenir au moins 60 secondes sur le niveau 3 de Super Hexagon\n2️⃣ Faire un shitpost graphique\n3️⃣ Montrer 33 productions écrites (critiques, 2000-word analysis, nouvelles, etc.) au Bureau d\'Investigation du Travail Connecté'));

// choix pour député
bot.on(['/depute'], msg => {
    let replyMarkup = bot.keyboard([
        ['/OP1', '/OP2'],
        ['/OP3']
    ], {resize: true});
    msg.reply.text('Les députés, vaillants Occupants Parlmentaires ! Quel palier ?', {replyMarkup});
});

bot.on(['/OP1'], (msg) => msg.reply.text('Pour devenir un député de rang OP 1\n\n1️⃣ Finir le mode all-chrono de Koloro\n2️⃣ Finir BEAT.TRIP BEAT\n3️⃣ Réussir le skip des Chaudrons sur Rayman M'));

bot.on(['/OP2'], (msg) => msg.reply.text('Pour devenir un député de rang OP 2\n\n1️⃣ Réussir une run all-zone de Cadence en moins de 15 minutes\n2️⃣ Tenir au moins 60 secondes sur le niveau 6 de Super Hexagon\n3️⃣ Speedrunner 2 jeux avec des PB à moins de 50% du WR'));

bot.on(['/OP3'], (msg) => msg.reply.text('Pour devenir un député de rang OP 3\n\n1️⃣ Faire une run all-zone avec 6 persos sur CotN en moins de 6 morts\n2️⃣ Montrer 66 productions écrites\n3️⃣ Avoir au moins 666 de score sur les 6 jeux réunis du Haut Plateau'));

// choix pour sénateur
bot.on(['/senateur'], msg => {
    let replyMarkup = bot.keyboard([
        ['/ASS1', '/ASS2'],
        ['/ASS3']
    ], {resize: true});
    msg.reply.text('Les sénateurs, vaillantes Âmes Sombres du Sénat! Quel palier ?', {replyMarkup});
});

bot.on(['/ASS1'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 1\n\n1️⃣ Terminer n\'importe quel Dark Souls OU tenir au moins 200 secondes sur le niveau 6 de Super Hexagon\n2️⃣ Terminer Starseed Pilgrim\n3️⃣ Cumuler 14 jours en Maratzie'));

bot.on(['/ASS2'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 2\n\n1️⃣ Réussir une run all-zone avec Aria\n2️⃣ Avoir un speedrun avec un PB à moins de 33% du WR\n3️⃣ Ne pas prendre l\'avion pendant un an'));

bot.on(['/ASS3'], (msg) => msg.reply.text('Pour devenir un sénateur de rang ASS 3, niveau ultime avant la plongée dans l\'enfer du conseil constitutionnelte\n\n1️⃣ Terminer cette liste: https://onlyo.co/2wNT3ti\n2️⃣ Montrer 99 productions écrites\n3️⃣ Go beyond Uranus in Flywrench'));

// choix pour conseil constitutionnel
bot.on(['/conseilconstitutionnel'], msg => {
    let replyMarkup = bot.keyboard([
        ['/SC1', '/SC2'],
        ['/SC3', '/SC4'],
        ['/SC5']
    ], {resize: true});
    msg.reply.text('Le conseil constitutionnel, le Sommet de la Cacapublilexicomatisation. 🔥 Attention, c\'est HARDCORE ! 🔥 Quel palier ?', {replyMarkup});
});

bot.on(['/SC1'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 1\n\n1️⃣ Réussir une 9-char run\n2️⃣ Faire tous les niveaux en S sur Thumper\n3️⃣ Supprimer SC, Twitter et Facebook'));

bot.on(['/SC2'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 2\n\n1️⃣ Terminer 3 jeux de David Cage (The Nomad Soul exclus)\n2️⃣ Avoir 3 speedruns avec des PB à moins de 33% du WR\n3️⃣ Produire 3 vidéos shitpsot'));

bot.on(['/SC3'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 3\n\n1️⃣ Courir le 100m en moins de 12 secondes\n2️⃣ Réussir une 13-char run\n3️⃣ Montrer 140 productions écrites'));

bot.on(['/SC4'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 4\n\n1️⃣ Terminer Dustforce\n2️⃣ Terminer un NaNoWriMo (50k mots)\n3️⃣ Être top 140 avec n\'importe quel personnage sur CotN: Amplified'));

bot.on(['/SC5'], (msg) => msg.reply.text('Pour intégrer le conseil constitutionnel au rang SC 5\n\n1️⃣ Réussir une run all-zone avec Coda\n2️⃣ Avoir un speedrun avec un PB à moins de 1% du WR\n3️⃣ Atteindre 500 secondes sur Devil Daggers.\n\nC\'est le rang le plus élevé en Maratzie. 🔥🔥🔥'));

bot.start()
