
const Discord = require('discord.js');

const bot = new Discord.Client({
    disableEveryone: true
})

const fs = require('fs');

const moment = require('moment');
require('moment-duration-format');
moment.locale('fr')

var prefix = "*";

const antiRaid = JSON.parse(fs.readFileSync("./ar.json", "utf8"))

const bc = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"))

bot.on('ready', () => {
    console.log('Je suis prêt !');
        setInterval(changing_status, 60000);
    function changing_status() {
      let status = ["[🌌] *help | "+bot.guilds.size+"s. | "+bot.users.size+"u."]
      let random = status[Math.floor(Math.random() * status.length)]
      bot.user.setActivity(random)
      //"[👮]Protège "+bot.users.size+"users.", "[👮]Protéction Active"]
  }
  });
  
bot.on("guildMemberAdd", member => {
let bc = JSON.parse(fs.readFileSync("blacklist.json", "utf8"));
if(bc[member.id]) {
member.ban()
var embed = new Discord.RichEmbed()
.setColor("#ff0000")
.setTitle("**MEMBRE BAN**")
.setDescription(member.id+"("+member.user+"), a été banni de votre serveur <:506071661104332801:551853180636626946>")
.setFooter("Security Protect")
member.guild.owner.createDM().then(chan => chan.send(embed))
}
})
 
 

bot.on("guildMemberAdd", member => {
  const bvn = member.guild.channels.find(m => m.name === "【📩】bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#04B404')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Arrivée d'un nouvel utilisateur")
  .addField("<a:522457968080584733:534068342613475369> __**Un nouvel utilisateur vient d'arriver**__", `Il sagit de [${member.user.tag}](https://discordapp.com/)`, true)
  .setDescription("J'espère tu vas passer un bon moment parmi nous")
  .addField("Ma commande est **`*help`**", "Si tu souhaites savoir mon fonctionnement")
  .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
})

bot.on("guildMemberRemove", member => {
  const bvn = member.guild.channels.find(m => m.name === "【📩】bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#FF4000')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Départ d'un nouvel utilisateur")
  .addField("<a:528719505384538113:534068343993401364> __**Un nouvel utilisateur vient de partir**__", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
  .addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
})

bot.on("guildMemberAdd", member => {
  const bvn2 = member.guild.channels.find(m => m.name === "【🚫】logs-bienvenue")
  if (!bvn2) return;
  bvn2.send(`Bienvenue ${member}, Bienvenue je t'invite à lire le règlement.
Et surtout passe de bons moments avec nous !`)

})

bot.on("guildCreate", guild => {
guild.owner.send(`**:flag_fr: Hey Salut merci de m'avoir ajouté sur ton serveur ^^ pour rejoindre le support clique sur l'invitation ci-dessous. https://discord.gg/TDU59R8

:flag_gb: Hey Hi thank you for adding me on your server ^^ to join the support click on the invitation below. https://discord.gg/TDU59R8**`)
});

bot.on("guildCreate", guild => {
    var channel = bot.channels.get('554357997321584641');
  const ajout = new Discord.RichEmbed()
  .setColor("0x41f441")
  .setTitle("  Nouveau serveur !  ")
  .setDescription("<a:529784344261165090:533767529768812575>•__**Ajout du bot**__")
  .addField(" • **Nom du serveur**", guild.name)
  .addField(" • **Membres**", guild.memberCount)
  .addField(" • **Créateur du serveur**",  guild.owner.user.username)
  .addField("Nous sommes maintenant à", bot.guilds.size)
  .setFooter(`ID ➔ ${guild.id}`);
  channel.send(ajout)
  });


  bot.on("guildDelete", guild => {
    var channel = bot.channels.get('554357997321584641');
  const retrait = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle(" Je vient de perdre un serveur !")
  .setDescription("<a:529784344261165090:533767529768812575>• __**Retrait du bot**__")
  .addField("• **Nom du serveur**", guild.name)
  .addField(" • **Membres**", guild.memberCount)
  .addField(" • **Créateur du serveur**",  guild.owner.user.username)
  .addField("• **Nous sommes maintenant à**", bot.guilds.size)
  .setFooter(`ID ➔ ${guild.id}`);
  channel.send(retrait)
  });

bot.on('message', message => {

    if(message.content === prefix + "help") {
        message.delete(message.author);
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff5555")
        .setTitle("• __**Choix d'affichage de la page d'aide**__")
        .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
        .addField("<:526484445406953483:538061952698679307> | <:546734635560992769:546735453064134696> | <:526484446174642182:538061953143406593>", "Online | En Maintenance | HorsLigne")
        .addField("<:526484445406953483:538061952698679307> | Afficher Ici", "``*help 1``")
        .addField("<:526484445406953483:538061952698679307> | Afficher en MP", "``*help 2``")
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(help_embed)
    }
})

bot.on('message', message => {

    if(message.content === prefix + "help 1") {
        message.delete(message.author);
        var mhelp_embed = new Discord.RichEmbed()
        .setColor("#ff5555")
        .setTitle("• __**Liste des commandes disponible**__")
        .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
        .addField("<:526484445406953483:538061952698679307> | <:546734635560992769:546735453064134696> | <:526484446174642182:538061953143406593>", "Online | En Maintenance | HorsLigne")
        .addField("<:526484445406953483:538061952698679307> | <:secureshield:546735166052368384> • __**Staff Only**__ ", "``addbc <id>`` | ``unbc <id>``")
        .addField("<:526484445406953483:538061952698679307> | <:tie_1:546735164898803723> • __**Administration**__ ", "``ban <user>`` | ``kick <user>``")
        .addField("<:526484445406953483:538061952698679307> | <:policeman:546735165095936000> • __**Modération**__ ", "``clear`` | ``sondage``")
        .addField("<:526484445406953483:538061952698679307> | <:confetti1:546991644877127700> • __**Fun**__ ", "``8ball`` | ``tell`` | ``avatar``")
        .addField("<:526484445406953483:538061952698679307> | <:gears:546991645111877632> • __**Utilitaires**__ ", "``stats`` | ``info`` | ``id`` | ``maj`` | ``partners``")
        .addField("<:526484445406953483:538061952698679307> | <:emoji_24:556473150855184387> • __**Anti-Raid**__ ",  "``sp`` | ``report`` | ``rb`` | ``lock`` | ``unlock`` | ``checkid``  | ``raidmode`` | ``raidoff`` | ``regles`` | ``ui``")
        .addField("• __** <> **__","``Obligatoire``")
        .addField("Lien :", `[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=534773170742493185&permissions=8&scope=bot) | [Support](https://discord.gg/pBCN3Md) | [Serveur Unbl](https://discord.gg/8bqyKVu)`)
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)

        //.addField("Support", `[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=534773170742493185&permissions=8&scope=bot) | [Support](https://discord.gg/pBCN3Md) | [Serveur Unbl](https://discord.gg/8bqyKVu)`)
        .setTimestamp()
        message.channel.send(mhelp_embed)
        console.log("Commande Effectué")
    }

    })

    bot.on('message', message => {

        if(message.content === prefix + "help 2") {
            message.delete(message.author);
            var rhelp_embed = new Discord.RichEmbed()
            .setColor("#ff5555")
            .setTitle("• __**Liste des commandes disponible**__")
            .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
            .addField("<:526484445406953483:538061952698679307> | <:546734635560992769:546735453064134696> | <:526484446174642182:538061953143406593>", "Online | En Maintenance | HorsLigne")
            .addField("<:526484445406953483:538061952698679307> | <:secureshield:546735166052368384> • __**Staff Only**__ ", "``addbc <id>`` | ``unbc <id>``")
        .addField("<:526484445406953483:538061952698679307> | <:tie_1:546735164898803723> • __**Administration**__ ", "``ban <user>`` | ``kick <user>``")
        .addField("<:526484445406953483:538061952698679307> | <:policeman:546735165095936000> • __**Modération**__ ", "``clear`` | ``sondage``")
        .addField("<:526484445406953483:538061952698679307> | <:confetti1:546991644877127700> • __**Fun**__ ", "``8ball`` | ``tell`` | ``avatar``")
        .addField("<:526484445406953483:538061952698679307> | <:gears:546991645111877632> • __**Utilitaires**__ ", "``stats`` | ``info`` | ``id`` | ``maj`` | ``partners``")
        .addField("<:526484445406953483:538061952698679307> | <:emoji_24:556473150855184387> • __**Anti-Raid**__ ",  "``sp`` | ``report`` | ``rb`` | ``lock`` | ``unlock`` | ``checkid``  | ``raidmode`` | ``raidoff`` | ``regles`` | ``ui``")
            .addField("• __** <> **__","``Obligatoire``")
            .addField("Lien :", `[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=534773170742493185&permissions=8&scope=bot) | [Support](https://discord.gg/pBCN3Md) | [Serveur Unbl](https://discord.gg/8bqyKVu)`)
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
            .setTimestamp()
            message.channel.send("**<:yes:531943485956292619> La commande d'aide vous a bien été envoyé en Message Privé !**").then(msg => msg.delete(2000));
        message.author.send(rhelp_embed)
        }

        })



bot.on('message', message => {
	if(message.content === prefix + "avatar") {
        message.delete(message.author);

        let usuario = message.mentions.members.first() || message.member;
        let user_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Avatar de ${usuario.user.username}`)
        .setImage(usuario.user.displayAvatarURL)
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
        .setTimestamp()

   message.channel.send(user_embed)
            console.log("Commande Faite")
    }
})

bot.on('message', message => {
	if(message.content === prefix + "si") {
		message.delete(message.author);
		let icon = message.guild.iconURL;
	 var info_embed = new Discord.RichEmbed()
     .setTitle("•Information Discord")
     .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
     .setThumbnail(icon)
     .addField('•__**Nom du serveur**__', message.guild.name)
     .addField('•__**Nombre total de membres**__', message.guild.memberCount)
     .addField("•__**Humans**__", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
     .addField("•__**Bots**__", message.guild.members.filter(m => m.user.bot).size)
     .addField('•__**Créer le**__', moment.utc(message.guild.createdAt).format('LL'))
     .addField('•__**Vous avez rejoins le**__', moment.utc(message.member.joinedAt).format('LL'))
     .addField('•__**ID**__', message.guild.id)
     .addField('•__**Owner**__', message.guild.owner.user.tag)
     .addField('•__**Channels**__', `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`)
     .addField('•__**Roles**__', `**${message.channel.guild.roles.size}**`)
     .setColor("RANDOM")
     .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
	 .setTimestamp()

message.channel.send(info_embed)
         console.log("Un utilisateur a effectuer la commande d'info discord!")
}
})

bot.on('message', message => {
    if (message.content.startsWith(prefix + "ui")) {
    	message.delete(message.author);
    	
    	let user;
    	
    	if (message.mentions.users.first()) {
    		user = message.mentions.users.first();
    	}else{
    		user = message.author;
    	}
    	const member = message.guild.member(user);
    	
    	const ui_embed = new Discord.RichEmbed()
    	.setColor("#36393f")
    	.setThumbnail(user.avatarURL)
    	.setTitle(`${user.username}#${user.discriminator}`)
    	.addField('<:emoji_25:556931604107493407> ID:', `${user.id}`, true)
    	.addField('<:emoji_31:556931928356552755> Nickname:', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    	.addField('<:emoji_27:556931713289420814> Created at:', `${moment.utc(user.createdAt).format('LL')}`, true)
    	.addField('<:emoji_29:556931824379756554> Joined servers :', `${moment.utc(member.joinedAt).format('LL')}`, true)
    	//.addField('Client', `${user.client}`, true)
    	.addField('<:emoji_28:556931786484088882> Status', `${user.presence.status}`, true)
    	.addField('<:emoji_33:557259756142723082> Game', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    	
    	//<:emoji_33:557259756142723082>
    	.addField('<:emoji_30:556931864422514688> Roles', member.roles.map(roles => `${roles.name}`).join(', '), true)
    	.setFooter(`Reply par ${message.author.username}#${message.author.discriminator}`)
    	message.channel.send(ui_embed)
         console.log("Un utilisateur a effectuer la commande")
    	}
    	})



bot.on('message', message => {
if(message.content === prefix + "stats") {
    message.delete(message.author);
    var stats_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Stats Du Bot")
    .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
    .addField("• __**Users**__", bot.users.size)
    .addField("• __**Servers**__", bot.guilds.size)
    .addField("• __**Channels**__", bot.channels.size)
    .addField("Vitesse et latence", "L'API à mis ` \ "  + bot.ping + "ms\ ` pour répondre.")
    .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
    .setTimestamp()

message.channel.send(stats_embed)
        console.log("Un utilisateur a effectuer la commande de stats")
}
})

bot.on('message', message => {
    if(message.content.startsWith(prefix + "raidoff")) {
    	message.delete(message.author);
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: Vous n'avez pas la permission :x:**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null,
        VIEW_CHANNEL: null
    });
    
    message.channel.send(`**:white_check_mark: Raidmode désactivé par ${message.author} ! Pour le réactiver, faites *raidmode !**`)
    }
    });
  
    bot.on('message', message => {
      if(message.content.startsWith(prefix + "raidmode")) {
      	message.delete(message.author);
        if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: Vous n'avez pas la permission :x:**")
      
        message.channel.overwritePermissions(message.guild.id, {
          VIEW_CHANNEL: false,
          SEND_MESSAGES: false
      });
      
      message.channel.send(`**:white_check_mark: Raidmode activé par ${message.author} ! Pour le désactiver, faites *raid off ! Les modérateurs pourront parler et voir le salon !**`)
      }
      });
//<:521356189120856094:538849268039942147>

bot.on('message', message => {
    if(message.content.startsWith(prefix + "addmaj")) {
    	var channel = bot.channels.get('554358474595762187');
    	message.delete(message.author);
    var maj_embed = new Discord.RichEmbed()
    .setColor("#FF9933")
    .setDescription("**<:521356189120856094:538849268039942147> | MAJ Disponible ! Pour plus d'information fait ```*maj```**")
    .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
    .setTimestamp()

channel.send(maj_embed)
        console.log("Un utilisateur a effectuer la commande de maj")
    	}
    	})
    	
    	bot.on('message', message => {
    if(message.content.startsWith(prefix + "maj")) {
    	message.delete(message.author);
    var addmaj_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**<:521356189120856094:538849268039942147> | La dernière MAJ De SecurityProtect®『🌌』.  |  Vous retrouverez ci-dessous la date et le jour de la dernière Mise à Jour.**")
    .addField("Vendredi 1er Mars 2019", "Ajout de l'auto-ban et petite retouche du help.")
    .addField("Samedi 2 Mars 2019", "Ajout de la commande partners.")
    .addField("Dimanche 3 Mars 2019", "Ajout de la commande raidmode et raidoff")
    .addField("Dimanche 10 Mars 2019", "Refonte du serveur support")
    .addField("Samedi 16 Mars 2019", "Ajout de la commande sondage et la commande regles")
    .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
    .setTimestamp()
    //Vendredi 1er Mars 2019.  Ajout de l'auto-ban et petite retouche du help.**"

message.channel.send(addmaj_embed)
        console.log("Un utilisateur a effectuer la commande de addmaj")
    	}
    	})
    	
    	
    	
    	    	bot.on('message', message => {
    		if(message.content.startsWith(prefix + "regles")) {
    			message.delete(message.author);
    var regles_embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("**RÉGLEMENT BLACKLIST**")
    .setDescription(`
    __1. Utilisateurs__
❱ Spam.
❱ Incitation au Raid.
❱ Raid.
❱ Abus de Pouvoir.
❱ Destruction.
❱ Créateur de bot Malveillants.
❱ Pseudo Incorrect.
❱ SelfBot.
❱ Non respect des ToS (Terms of Services)

__2.Bots__
❱ Bot de Raid
❱ Bot de destruction.
`)
.setFooter("© 2018-2019 SecurityProtect", bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(regles_embed)
        console.log("Un utilisateur a effectuer la commande")
    		}
    	})
    	//#FF0000
    	
    	bot.on('message', message => {
    if(message.content.startsWith(prefix + "partners")) {
    	message.delete(message.author);
    var partners_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("<a:529784344261165090:533767529768812575> • __**Mon prefix [*] est a mettre devant chaque commande !**__")
    .addField("Oxygn--V.2", ('**[Oxygn--V.2](https://discord.gg/sR5Asdx)**') , true)
    .addField("KaniShiel", ('**[KaniShiel](https://discord.gg/3mnpUtP)**') , true)
    .setFooter("© 2018-2019 SecurityProtect", bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(partners_embed)
        console.log("Un utilisateur a effectuer la commande de partenaire")
    	}
    	})

bot.on('message', message => {
    if(message.content.startsWith(prefix + "lock")) {
        message.delete(message.author);
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("❌ Vous n'avez pas la permission ❌")

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
  });

  message.channel.send(`**✅ Le channel à été fermé par ${message.author} ! Pour l'ouvrir, faites /unlock ! Les modérateurs pourront parler !**`)
  }
  })

bot.on('message', message => {
    if(message.content.startsWith(prefix + "unlock")) {
        message.delete(message.author);
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("❌ Vous n'avez pas la permission ❌")

      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    });

    message.channel.send(`**✅ Le channel à été ouvert par ${message.author} ! Pour le fermer, faites /lock !**`)

    }
    })
    
    bot.on("message", message => {
if(message.content.startsWith(prefix +"checkid")){
  message.delete(message.author);

        let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"))

        const args = message.content.slice(2).trim().split(/ +/g);

        bot.fetchUser(args[1]).then(user => {

            let checkidfalseEmbed = new Discord.RichEmbed()
                .setTitle(" CheckID :")
                .addField(" **ID du BlackList :**", "`"+args[1]+"`")
                .addField(" **Nom du BlackList:**", "`"+user.tag+"`")
                .addField("**Bot ou Human ?**", user.bot ? "`Bot`" : "`Human`")
                .addField(" **BlackList : ?**", "`Cet Utilisateur n'est BlackList par notre bot`")
                .setFooter("© 2019 SecurityProtect", bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor('0x41f441')

            if(!blacklist[args[1]]) return message.channel.send(checkidfalseEmbed);

            let checkidtrueEmbed = new Discord.RichEmbed()
                .setTitle(" CheckID :")
                .addField(" **ID du BlackList :**", "`"+args[1]+"`")
                .addField(" **Nom du BlackList:**", "`"+user.tag+"`")
                .addField("**Bot ou Human ?**", user.bot ? "`Bot`" : "`Human`")
                .addField(" **BlackList : ?**", "`Cet Utilisateur est BlackList par notre bot`")
            .addField(" **Reason :**", `${blacklist[user.id].reason}`)
                //.addField(":fbleu: Raison du GBan :", "`"+args[2]+"`")
                .setFooter("© 2019 SecurityProtect", bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor('#FF0000')

                        if(blacklist[args[1]]) return message.channel.send(checkidtrueEmbed);
        }).catch((err) => {
    if (err) return message.channel.send(`Unknow ID`);
});
    }
})
//.addField("**Bot ou Human ?**", user.bot ? "`Bot`" : "`Human`")

//.addField(" **BlackList : ?**", "`Cet Utilisateur est BlackList par notre bot`")

bot.on("message", message => {
if(message.content.startsWith(prefix +"checkar")){
  message.delete(message.author);

        let antiRaid = JSON.parse(fs.readFileSync("./ar.json", "utf8"))

        const args = message.content.slice(2).trim().split(/ +/g);

        bot.fetchUser(args[1]).then(user => {

            let checkarfalseEmbed = new Discord.RichEmbed()
                .setTitle(" CheckID :")
                .addField(" **ID :**", "`"+args[1]+"`")
                .addField(" **Pseudo:**", "`"+user.tag+"`")
                .addField(" **Anti-Raid : ?**", "`Cet Utilisateur n'est pas dans l'équipe Anti-Raid du bot`")
                .setFooter("© 2019 SecurityProtect", bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor('0x41f441')

            let checkartrueEmbed = new Discord.RichEmbed()
                .setTitle(" CheckID :")
                .addField(" **ID du BlackList :**", "`"+args[1]+"`")
                .addField(" **Nom du BlackList:**", "`"+user.tag+"`")
                .addField(" **Anti-Raid : ?**", "`Cet Utilisateur est dans l'équipe Anti-Raid du bot`")
                //.addField(":fbleu: Raison du GBan :", "`"+args[2]+"`")
                .setFooter("© 2019 SecurityProtect", bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor('#FF0000')

            if(!antiRaid[args[1]]) return message.channel.send(checkarfalseEmbed);

            message.channel.send(checkartrueEmbed);
        });
    }
})

bot.on("message", message => {
    if(message.content.startsWith(prefix + "addar")) {
        message.delete(message.author);
    let userAR = message.mentions.users.first()
    if(!antiRaid[userAR.id]) {
        antiRaid[userAR.id] = {
            sec: 0,
        }
    }

    if(antiRaid[userAR.id].sec > 1) return message.reply("Cet utilisateur est déjà anti-raid !").then(msg => msg.delete(2000));
    antiRaid[userAR.id].sec++

   fs.writeFile("./ar.json", JSON.stringify(antiRaid), (err) => {
        if(err) console.error(err)
    })

    message.reply(userAR.tag + " a bien été ajouté à l'anti-raid !").then(msg => msg.delete(2000));
}
})

bot.on('message', message => {
if(message.content.startsWith(prefix + "tell")){
    message.delete(message.author);
var text = message.content.split(' ').slice(1).join(' ')
if(!text) return message.reply('Hey salut')
message.channel.send(text)
}
})

bot.on('message', message => {
    if(message.content.startsWith(prefix + 'id')) {
        message.delete(message.author);
        if (message.channel.type === "dm") return;
         message.channel.send(`**${message.author.username} **` + "Voici ton ID: " + `__${message.author.id}__`);
      }
    })


    bot.on('message', message => {
if(message.content.startsWith(prefix + "kick")) {
    message.delete(message.author);
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permissions !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilistaur")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }

        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        });
    }
})


    bot.on('message', message => {
    if(message.content.startsWith(prefix + "ban")) {
        message.delete(message.author);
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la premissions");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe")
        }

        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username}`)
        }

        )
    }
})

    bot.on('message', message => {
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(msg => msg.delete(2000));
        })
    }
})

bot.on('message', message => {
    if (message.content.startsWith(prefix + "addbc")) {
        message.delete(message.author);
    let Staff = ["491841063057620995", "490220102650953729",  "396266406272040960", "382606280436613122", "482090176361791491", "422353090667347968",
"5347731707424931851"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
const id = args[0]
let bl = bot.channels.get('554358267292418048');
let blacklist1 = new Discord.RichEmbed()
.setTitle(`Add BlackList`)
.addField(` Nom du blacklist:`, `<@${id}>`)
.addField(` ID du blacklist:`, `${id}`)
.addField(` Raison:`, "BlackList-ID: " + args.join(" "))
.setColor("#FF0000")
.setFooter(`BlackListed`)
.setTimestamp();
bl.send(blacklist1);

    if (bc[id]) {
    return message.channel.send("<:1548000265801:536578104458608660> Erreur: **ID** déjà blacklist ");
    }else{
    if (id.length === 0) {
    bc[id] = {"reason" : true};
    message.delete();
    message.channel.send(`:white_check_mark:   **ID** ` + '"' + id + '"' + `bien blacklist du bot :wink:`).then(msg => msg.delete(5000));
    }else{
    bc[id] = {"reason" : args.join(" ")};
    message.delete();
    message.channel.send(`:white_check_mark:   **<@${id}>**(${id}) a bien été blacklist du bot :wink:`).then(msg => msg.delete(5000));
    }
    fs.writeFile("./blacklist.json", JSON.stringify(bc), (err) => { if (err) console.error(err);});
    }
    console.log(`[BlackList] "${id}" a été blacklist! Par: ${message.author.username}. Raison: ${args}`)
}else{
    message.channel.send(` :octagonal_sign:  Tu n'es pas un Membres du Staff ${message.author}`).then(msg => msg.delete(2000));
}
}
})

bot.on('message', message => {
    if (message.content.startsWith(prefix + "unbc")) {
        message.delete(message.author);
let Staff = ["490220102650953729", "491841063057620995","534773170742493185"];
if (Staff.includes(message.author.id)) {

let args = message.content.split(" ").slice(1);
const iduser = args[0]

let bl = bot.channels.get('554358267292418048');
let blacklist1 = new Discord.RichEmbed()
.setTitle(`UnBlackList`)
.addField(` Nom du unblacklist:`, `<@${iduser}>`)
.addField(` ID du unblacklist:`, `${iduser}`)
.setColor("0x41f441")
.setFooter(`UnBlackListed`)
.setTimestamp();
bl.send(blacklist1);

if (bc[iduser]) {
delete bc[iduser];
if (message.member.nickname === null) {
message.channel.send(`<:yes:531943485956292619>  l'**ID** ${iduser} a bien été enlevé de ma blacklist :wink:`).then(msg => msg.delete(2000));
}else{
message.channel.send(`<:yes:531943485956292619>  l'**ID** ${iduser} a bien été enlevé de ma blacklist :wink:`).then(msg => msg.delete(5000));
}
fs.writeFile("./blacklist.json", JSON.stringify(bc), (err) => { if (err) console.error(err);});
}else{
message.channel.send(`<:1548000265801:536578104458608660> Erreur: cette **ID** n'est pas dans la BlackList du bot`).then(msg => msg.delete(2000));
}
}else{
message.channel.send(`<:1548000265801:536578104458608660> Tu n'es pas un Membres Du Staff ${message.author} !`).then(msg => msg.delete(2000));
}
}
})

bot.on('message', message => {

    if (message.content.startsWith(prefix + "sondage")) {
    	if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
    	let msg = message.content.split(' ')
    	msg.shift()
    	let question = msg.join(' ')
    	
    	var sondage = new Discord.RichEmbed()
    	.setTitle('Sondage')
    	.addField(question, '<:emoji_42:556852460744867861> Pour oui | <:emoji_41:556852428063113227> pour non')
    	.setColor('#36393f')
    	
    	message.channel.send(sondage)
    	.then(function(message){
    		message.react('✅')
    		message.react('❌')
    	})
    	message.delete()
    	}
    	})

bot.on('message', message => {

    if (message.content.startsWith(prefix + "off")) {
   message.delete(message.author);
        var mentionned = message.mentions.users.first();
    if(message.mentions.users.size > 0) {
    if (blacklist[message.mentions.users.first().id]) {
    if (blacklist[message.mentions.users.first().id].reason === true) {
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor('#FF0000')
        .setTitle(" BlackList Info ")
        .setImage("https://upload.wikimedia.org/wikipedia/fr/b/bf/The-Blacklist-logo.png")
        .addField(`<:1548000265801:536578104458608660> __Raison du Bannissement de ${mentionned.username}__`, `Il a été BlackList pour : ${blacklist[message.mentions.users.first().id].reason}`)
        .addField("Résultat", `<:yes:531943485956292619> ${mentionned} est dans la blacklist du Bot!`)
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send({embed}).then(msg => msg.delete(5000));
    }else{
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor('#FF0000')
        .setTitle(" BlackList Info ")
        .setImage("https://upload.wikimedia.org/wikipedia/fr/b/bf/The-Blacklist-logo.png")
        .addField(`<:1548000265801:536578104458608660> __Raison du Bannissement de ${mentionned.username}__`, `Il a été BlackList pour: ${blacklist[message.mentions.users.first().id].reason}`)
        .addField("Conclusion", `<:yes:531943485956292619> ${mentionned} est dans la blacklist du Bot!`)
        .setFooter("© 2018-2019 NightProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send({embed}).then(msg => msg.delete(5000));
    }
    }else{
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor('0x41f441')
        .setTitle(" Est-il BlackList ")
        .addField(`<:yes:531943485956292619> ${mentionned.username}:`, `${mentionned} n'est pas dans la BlackList du bot <a:529784344261165090:533767529768812575>`)
        .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send({embed}).then(msg => msg.delete(5000));
    }
    }

}
})

bot.on('message', message => {
    if (message.content.startsWith(prefix + "getinvite")) {
        message.delete(message.author);
        let args = message.content.split(" ").slice(1);
        if (message.author.id !== "490220102650953729") return;
        let sv = bot.guilds.get(args[0])
        if (!sv) return message.channel.send(`<:1548000265801:536578104458608660> Entrez un id de guild valide`)
        sv.channels.random().createInvite().then(a => message.channel.send(a.toString()))
                    }

        })

    bot.on('message', message => {
if (message.content.startsWith(prefix + "8ball")) {
	message.delete(message.author);

	let args = message.content.split(" ").slice(1);
	let tte = args.join(" ")
	if (!tte){
		return message.reply("Merci de me poser une question")};

		var replys = [
		"Oui",
		"Non",
		"Je sais pas",
		"Peut être"
		];

	let reponse = (replys[Math.floor(Math.random() * replys.length)])

	var bembed = new Discord.RichEmbed()
	.setDescription("🎱 8ball")
	.addField("Question", tte)
	.addField("Réponse", reponse)
	.setColor("RANDOM")
message.channel.sendEmbed(bembed)

}

})

bot.on('message', message => {
    if(message.content.startsWith(prefix + "sp")){
        message.delete(message.author);
        if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                if(message.author.bot) return
        var ara = message.content.substr(4)
        if(!ara) return message.channel.send("__**⚠ Tout abus de cette commande sera sanctionner**__ **Entrez un message svp.**")
        var y = new Discord.RichEmbed()
        .setColor("ff0000")
        .addField("<:506071661104332801:551853180636626946> Alerte ", ara)
        .addField("<:group:551853181630677003> Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
        .addField("<:server:551853180691152917>Depuis le Serveur", message.guild.name)
        message.channel.send("**Tous le staff sp à été alerté ! <:506071661104332801:551853180636626946>**").then(msg => msg.delete(2000));
        bot.channels.find("id", "554385349854494730").send(y)
        bot.channels.find("id", "554385349854494730").send("<:506071661104332801:551853180636626946> <@&544392665790283776>")
message.channel.createInvite().then(invite => bot.channels.find("id", "554385349854494730").send(`Voici le lien : https://discord.gg/${invite.code}`))
        message.delete() 
 
 
        }
    })
    
    

    bot.on('message', message => {
        if(message.content.startsWith(prefix + "rb")){
        	message.delete(message.author);
            if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                    if(message.author.bot) return
            var ara = message.content.substr(4)
            if(!ara) return message.channel.send("__**:warning: Tout abus de cette commande sera sanctionner**__ **Entrez un message svp.**")
            var y = new Discord.RichEmbed()
            .setColor("ff0000")
            .addField("<:506071661104332801:551853180636626946> Report-Bugs ", ara)
            .addField("<:group:551853181630677003> Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
            .addField("<:server:551853180691152917> Depuis le Serveur", message.guild.name)
            message.channel.send("**Tous les Administateur de SecurityProtect à été alerté ! <:506071661104332801:551853180636626946>**").then(msg => msg.delete(2000));
            bot.channels.find("id", "554385587981910025").send(y)
            bot.channels.find("id", "554385587981910025").send("  <:506071661104332801:551853180636626946> <@&544392661898100737>")
            message.channel.createInvite().then(invite => bot.channels.find("id", "554385587981910025").send(`Voici le lien : https://discord.gg/${invite.code}`))
            message.delete()
            }
        })

        bot.on('message', message => {
            if(message.content.startsWith(prefix + "report")){
               message.delete(message.author); if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                        if(message.author.bot) return
                var ara = message.content.substr(8)
                if(!ara) return message.channel.send("__**:warning: Tout abus de cette commande sera sanctionner**__. Pour que un Report sois pris en compte il faut : ``ID : <ID>. MOTIF : <MOTIF>. IMAGE : Lien Imgur.`` **Entrez un message svp.**")
                var y = new Discord.RichEmbed()
                .setColor("ff0000")
                .addField("<:506071661104332801:551853180636626946> Report ", ara)
                .addField("<:group:551853181630677003> Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
                .addField("<:server:551853180691152917> Depuis le Serveur", message.guild.name)
                message.channel.send("**Le report est en cours de Traitement veillez patientez ! <:506071661104332801:551853180636626946>**").then(msg => msg.delete(2000));
                bot.channels.find("id", "554385512081784842").send(y)
                bot.channels.find("id", "554385512081784842").send("<:506071661104332801:551853180636626946> <@&544392665790283776>")
                message.channel.createInvite().then(invite => bot.channels.find("id", "554385512081784842").send(`Voici le lien : https://discord.gg/${invite.code}`))
                message.delete()
                }
            })

      bot.login(process.env.token)
