const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Komutu kaydetme kısmı
const commands = [
  new SlashCommandBuilder()
    .setName('announcements')
    .setDescription('Yeni bir duyuru yayınlar')
    .addStringOption(option => option.setName('mesaj').setDescription('Duyuru içeriği').setRequired(true))
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// Bot hazır olduğunda komutları yükle
client.once('ready', async () => {
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    console.log('B U L G A R Bot hazır ve komutlar yüklendi!');
});

// Komut geldiğinde çalıştır
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'announcements') {
        const mesaj = interaction.options.getString('mesaj');
        
        // 1. Duyuruyu kanala gönder
        await interaction.reply({ content: `Duyuru yayınlandı: ${mesaj}`, ephemeral: true });

        // 2. Mesajı dosyaya işle (Site için)
        const channel = await client.channels.fetch(process.env.CHANNEL_ID);
        const messages = await channel.messages.fetch({ limit: 10 });
        const data = messages.map(m => ({
            yazar: m.author.username,
            icerik: m.content,
            tarih: m.createdAt.toLocaleDateString('tr-TR')
        }));
        
        fs.writeFileSync('duyurular.json', JSON.stringify(data, null, 2));
    }
});

client.login(process.env.DISCORD_TOKEN);
