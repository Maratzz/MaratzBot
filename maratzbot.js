const TeleBot = require('telebot');
const bot = new TeleBot('YOUR_TOKEN');

// slash commands
bot.on(['/start'], (msg) => msg.reply.text('Je suis MaratzBot, je suis programmé pour shitposter. Essaie /citoyen pour voir !'));
bot.on(['/citoyen'], (msg) => msg.reply.text('Pour devenir citoyen de la Maratzie, il faut faire un playthrough de BEAT en moins de 10 vies, un score de 130k minimum sur Mussel et tenir au moins 60 secondes sur le niveau 1 de Super Hexagon.'));
bot.on(['/timeline'], (msg) => msg.reply.text('En tant que bot du futur venant de 20XX, je confirme que nous sommes bien dans la pire timeline 👎'));

// passive listening
bot.on([/Dark Souls/, /dark souls/], (msg) => msg.reply.text('Je n\'aurais pas mieux dit ! 💀'));
bot.on([/shinies/, /shiny/], (msg) => msg.reply.text('https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif'));
bot.on([/sur Paris/, /sur Versailles/, /sur Lyon/], (msg) => msg.reply.sticker('CAADBAADTgADqbwaFxdZN9QIWRATAg'));
bot.on(/5\/10/, (msg) => msg.reply.text('Pisse-froid va !'))

// notices edits
bot.on('edit', (msg) => msg.reply.text('Ton édit de Nantes restera entre nous 👀'));

bot.start()
