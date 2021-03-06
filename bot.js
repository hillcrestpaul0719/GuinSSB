const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setUsername('GuinSSB');
    console.log("grapefruit");
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

// Fighters

    if (command === 'mario') {
	message.reply('https://www.ssbwiki.com/Mario_(SSBU)')
    }
    if (command === 'luigi') {
	message.reply('https://www.ssbwiki.com/Luigi_(SSBU)')
    }
    if (command === 'peach') {
	message.reply('https://www.ssbwiki.com/Peach_(SSBU)')
    }
    if (command === 'daisy') {
	message.reply('https://www.ssbwiki.com/Daisy_(SSBU)')
    }
    if (message.content === '!ssb dr. mario') {
	message.reply('https://www.ssbwiki.com/Dr._Mario_(SSBU)')
    }
    if (message.content === '!ssb dr mario') {
	message.reply('https://www.ssbwiki.com/Dr._Mario_(SSBU)')
    }
    if (message.content === '!ssb doctor mario') {
	message.reply('https://www.ssbwiki.com/Dr._Mario_(SSBU)')
    }
    if (message.content === '!ssb rosalina & luma') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (message.content === '!ssb rosalina and luma') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (message.content === '!ssb luma & rosalina') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (message.content === '!ssb luma and rosalina') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (message.content === '!ssb piranha plant') {
	message.reply('https://www.ssbwiki.com/Piranha_Plant_(SSBU)')
    }
    if (command === 'bowser') {
	message.reply('https://www.ssbwiki.com/Bowser_(SSBU)')
    }
    if (message.content === '!ssb bowser jr.') {
	message.reply('https://www.ssbwiki.com/Bowser_Jr._(SSBU)')
    }
     if (message.content === '!ssb larry koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Larry_Koopa')
    }
    if (message.content === '!ssb roy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Roy_Koopa')
    }
    if (message.content === '!ssb wendy o. koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Wendy_O._Koopa')
    }
    if (message.content === '!ssb wendy o koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Wendy_O._Koopa')
    }
    if (message.content === '!ssb iggy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Iggy_Koopa')
    }
    if (message.content === '!ssb morton koopa jr.') {
	message.reply('https://www.ssbwiki.com/Koopalings#Morton_Koopa_Jr.')
    }
    if (message.content === '!ssb morton koopa jr') {
	message.reply('https://www.ssbwiki.com/Koopalings#Morton_Koopa_Jr.')
    }
    if (message.content === '!ssb lemmy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Lemmy_Koopa')
    }
    if (message.content === '!ssb ludwig von koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Ludwig_von_Koopa')
    }
    if (command === 'koopalings') {
	message.reply('https://www.ssbwiki.com/Koopalings#In_Super_Smash_Bros._Ultimate')
    }
    if (command === 'yoshi') {
	message.reply('https://www.ssbwiki.com/Yoshi_(SSBU)')
    }
    if (message.content === '!ssb donkey kong') {
	message.reply('https://www.ssbwiki.com/Donkey_Kong_(SSBU)')
    }
    if (message.content === '!ssb diddy kong') {
	message.reply('https://www.ssbwiki.com/Diddy_Kong_(SSBU)')
    }
    if (message.content === '!ssb king k. rool') {
	message.reply('https://www.ssbwiki.com/King_K._Rool_(SSBU)')
    }
    if (message.content === '!ssb king k rool') {
    message.reply('https://www.ssbwiki.com/King_K._Rool_(SSBU)')
    }
    if (command === 'link') {
	message.reply('https://www.ssbwiki.com/Link_(SSBU)')
    }
    if (command === 'zelda') {
	message.reply('https://www.ssbwiki.com/Zelda_(SSBU)')
    }
    if (command === 'sheik') {
	message.reply('https://www.ssbwiki.com/Sheik_(SSBU)')
    }
    if (message.content === '!ssb young link') {
	message.reply('https://www.ssbwiki.com/Young_Link_(SSBU)')
    }
    if (command === 'ganondorf') {
	message.reply('https://www.ssbwiki.com/Ganondorf_(SSBU)')
    }
    if (message.content === '!ssb toon link') {
	message.reply('https://www.ssbwiki.com/Toon_Link_(SSBU)')
    }
    if (command === 'samus') {
	message.reply('https://www.ssbwiki.com/Samus_(SSBU)')
    }
    if (message.content === '!ssb dark samus') {
	message.reply('https://www.ssbwiki.com/Dark_Samus_(SSBU)')
    }
    if (message.content === '!ssb zero suit samus') {
	message.reply('https://www.ssbwiki.com/Zero_Suit_Samus_(SSBU)')
    }
    if (command === 'ridley') {
	message.reply('https://www.ssbwiki.com/Ridley_(SSBU)')
    }
    if (command === 'kirby') {
	message.reply('https://www.ssbwiki.com/Kirby_(SSBU)')
    }
    if (message.content === '!ssb meta knight') {
	message.reply('https://www.ssbwiki.com/Meta_Knight_(SSBU)')
    }
    if (message.content === '!ssb king dedede') {
	message.reply('https://www.ssbwiki.com/King_Dedede_(SSBU)')
    }
    if (command === 'fox') {
	message.reply('https://www.ssbwiki.com/Fox_(SSBU)')
    }
    if (command === 'falco') {
	message.reply('https://www.ssbwiki.com/Falco_(SSBU)')
    }
    if (command === 'wolf') {
	message.reply('https://www.ssbwiki.com/Wolf_(SSBU)')
    }
    if (command === 'pikachu') {
	message.reply('https://www.ssbwiki.com/Pikachu_(SSBU)')
    }
    if (command === 'jigglypuff') {
	message.reply('https://www.ssbwiki.com/Jigglypuff_(SSBU)')
    }
    if (command === 'pichu') {
	message.reply('https://www.ssbwiki.com/Pichu_(SSBU)')
    }
    if (command === 'mewtwo') {
	message.reply('https://www.ssbwiki.com/Mewtwo_(SSBU)')
    }
    if (message.content === '!ssb pokemon trainer') {
	message.reply('https://www.ssbwiki.com/Pokémon_Trainer_(SSBU)')
    }
    if (message.content === '!ssb pokémon trainer') {
	message.reply('https://www.ssbwiki.com/Pokémon_Trainer_(SSBU)')
    }
    if (command === 'squirtle') {
	message.reply('https://www.ssbwiki.com/Squirtle_(SSBU)')
    }
    if (command === 'ivysaur') {
	message.reply('https://www.ssbwiki.com/Ivysaur_(SSBU)')
    }
    if (command === 'charizard') {
	message.reply('https://www.ssbwiki.com/Charizard_(SSBU)')
    }
    if (command === 'lucario') {
	message.reply('https://www.ssbwiki.com/Lucario_(SSBU)')
    }
    if (command === 'greninja') {
	message.reply('https://www.ssbwiki.com/Greninja_(SSBU)')
    }
    if (command === 'incineroar') {
	message.reply('https://www.ssbwiki.com/Incineroar_(SSBU)')
    }
    if (message.content === '!ssb captain falcon') {
	message.reply('https://www.ssbwiki.com/Captain_Falcon_(SSBU)')
    }
    if (command === 'ness') {
	message.reply('https://www.ssbwiki.com/Ness_(SSBU)')
    }
    if (command === 'lucas') {
	message.reply('https://www.ssbwiki.com/Lucas_(SSBU)')
    }
    if (message.content === '!ssb ice climbers') {
	message.reply('https://www.ssbwiki.com/Ice_Climbers_(SSBU)')
    }
    if (command === 'marth') {
	message.reply('https://www.ssbwiki.com/Marth_(SSBU)')
    }
    if (command === 'lucina') {
	message.reply('https://www.ssbwiki.com/Lucina_(SSBU)')
    }
    if (command === 'ike') {
	message.reply('https://www.ssbwiki.com/Ike_(SSBU)')
    }
    if (message.content === '!ssb roy') {
	message.reply('https://www.ssbwiki.com/Roy_(SSBU)')
    }
    if (command === 'chrom') {
	message.reply('https://www.ssbwiki.com/Chrom_(SSBU)')
    }
    if (command === 'robin') {
	message.reply('https://www.ssbwiki.com/Robin_(SSBU)')
    }
    if (command === 'corrin') {
	message.reply('https://www.ssbwiki.com/Corrin_(SSBU)')
    }
    if (message.content === '!ssb mr. game & watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (message.content === '!ssb mr game & watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (message.content === '!ssb mr. game and watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (message.content === '!ssb mr game and watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (command === 'pit') {
	message.reply('https://www.ssbwiki.com/Pit_(SSBU)')
    }
    if (message.content === '!ssb dark pit') {
	message.reply('https://www.ssbwiki.com/Dark_Pit_(SSBU)')
    }
    if (command === 'palutena') {
	message.reply('https://www.ssbwiki.com/Palutena_(SSBU)')
    }
    if (command === 'wario') {
	message.reply('https://www.ssbwiki.com/Wario_(SSBU)')
    }
    if (command === 'olimar') {
	message.reply('https://www.ssbwiki.com/Olimar_(SSBU)')
    }
    if (command === 'alph') {
	message.reply('https://www.ssbwiki.com/Alph')
    }
    if (command === 'rob') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'r.o.b.') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'r.o.b') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'villager') {
	message.reply('https://www.ssbwiki.com/Villager_(SSBU)')
    }
    if (command === 'isabelle') {
	message.reply('https://www.ssbwiki.com/Isabelle_(SSBU)')
    }
    if (message.content === '!ssb wii fit trainer') {
	message.reply('https://www.ssbwiki.com/Wii_Fit_Trainer_(SSBU)')
    }
    if (message.content === '!ssb little mac') {
	message.reply('https://www.ssbwiki.com/Little_Mac_(SSBU)')
    }
    if (command === 'shulk') {
	message.reply('https://www.ssbwiki.com/Shulk_(SSBU)')
    }
    if (message.content === '!ssb duck hunt duo') {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(SSBU)')
    }
    if (message.content === '!ssb duck hunt') {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(SSBU)')
    }
    if (command === 'snake') {
	message.reply('https://www.ssbwiki.com/Snake_(SSBU)')
    }
    if (message.content === '!ssb solid snake') {
	message.reply('https://www.ssbwiki.com/Snake_(SSBU)')
    }
    if (command === 'sonic') {
	message.reply('https://www.ssbwiki.com/Sonic_(SSBU)')
    }
    if (message.content === '!ssb sonic the hedgehog') {
	message.reply('https://www.ssbwiki.com/Sonic_(SSBU)')
    }
    if (message.content === '!ssb mega man') {
	message.reply('https://www.ssbwiki.com/Mega_Man_(SSBU)')
    }
    if (command === 'megaman') {
	message.reply('https://www.ssbwiki.com/Mega_Man_(SSBU)')
    }
    if (command === 'pac-man') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (command === 'pacman') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (message.content === '!ssb pac man') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (command === 'ryu') {
	message.reply('https://www.ssbwiki.com/Ryu_(SSBU)')
    }
    if (command === 'ken') {
	message.reply('https://www.ssbwiki.com/Ken_(SSBU)')
    }
    if (command === 'cloud') {
	message.reply('https://www.ssbwiki.com/Cloud_(SSBU)')
    }
    if (message.content === '!ssb cloud strife') {
	message.reply('https://www.ssbwiki.com/Cloud_(SSBU)')
    }
    if (command === 'bayonetta') {
	message.reply('https://www.ssbwiki.com/Bayonetta_(SSBU)')
    }
    if (message.content === '!ssb mii brawler') {
	message.reply('https://www.ssbwiki.com/Mii_Brawler_(SSBU)')
    }
    if (message.content === '!ssb mii swordfighter') {
	message.reply('https://www.ssbwiki.com/Mii_Swordfighter_(SSBU)')
    }
    if (message.content === '!ssb mii gunner') {
	message.reply('https://www.ssbwiki.com/Mii_Gunner_(SSBU)')
    }
    if (message.content === '!ssb mii') {
	message.reply('https://www.ssbwiki.com/Mii_Fighter_(SSBU)')
    }
    if (message.content === '!ssb mii fighter') {
	message.reply('https://www.ssbwiki.com/Mii_Fighter_(SSBU)')
    }
    if (command === 'inkling') {
	message.reply('https://www.ssbwiki.com/Inkling_(SSBU)')
    }
    if (message.content === '!ssb simon belmont') {
	message.reply('https://www.ssbwiki.com/Simon_(SSBU)')
    }
    if (command === 'simon') {
	message.reply('https://www.ssbwiki.com/Simon_(SSBU)')
    }
    if (message.content === '!ssb richter belmont') {
	message.reply('https://www.ssbwiki.com/Richter_(SSBU)')
    }
    if (command === 'richter') {
	message.reply('https://www.ssbwiki.com/Richter_(SSBU)')
    }
    if (command === 'joker') {
	message.reply('https://www.ssbwiki.com/Joker_(SSBU)')
    } // Assist Trophies
    if (command === 'akira') {
	message.reply('https://www.ssbwiki.com/Akira')
    }
    if (message.content === '!ssb akira yuki') {
	message.reply('https://www.ssbwiki.com/Akira_Yuki')
    }
    if (command === 'alucard') {
	message.reply('https://www.ssbwiki.com/Alucard')
    }
    if (message.content === '!ssb son of dracula') {
	message.reply('https://www.ssbwiki.com/Alucard')
    }
    if (command === 'andross') {
	message.reply('https://www.ssbwiki.com/Andross')
    }
    if (message.content === '!ssb arcade bunny') {
	message.reply('https://www.ssbwiki.com/Arcade_Bunny')
    }
    if (command === 'ashley') {
	message.reply('https://www.ssbwiki.com/Ashley')
    }
    if (command === 'bomberman') {
	message.reply('https://www.ssbwiki.com/Bomberman')
    }
    if (command === 'barbara') {
	message.reply('https://www.ssbwiki.com/Barbara')
    }
    if (message.content === '!ssb barbara the bat') {
	message.reply('https://www.ssbwiki.com/Barbara')
    }
    if (message.content === '!ssb black knight') {
	message.reply('https://www.ssbwiki.com/Black_Knight')
    }
    if (message.content === '!ssb the black knight') {
	message.reply('https://www.ssbwiki.com/Black_Knight')
    }
    if (command === 'bomberman') {
	message.reply('https://www.ssbwiki.com/Bomberman')
    }
    if (message.content === '!ssb white bomberman') {
	message.reply('https://www.ssbwiki.com/Bomberman')
    }
    if (message.content === '!ssb burrowing snagret') {
	message.reply('https://www.ssbwiki.com/Burrowing_Snagret')
    }
    if (message.content === '!ssb chain chomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (command === 'chainchomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (command === 'chain-chomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (message.content === '!ssb chef kawasaki') {
	message.reply('https://www.ssbwiki.com/Chef_Kawasaki')
    }
    if (message.content === '!ssb cook kawasaki') {
	message.reply('https://www.ssbwiki.com/Chef_Kawasaki')
    }
    if (message.content === '!ssb color tv-game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (message.content === '!ssb color tv game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (message.content === '!ssb colour tv-game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (message.content === '!ssb colour tv game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'elecman') {
	message.reply('https://www.ssbwiki.com/Elec_Man')
    }
    if (message.content === '!ssb elec man') {
	message.reply('https://www.ssbwiki.com/Elec_Man')
    }
    if (command === 'excitebike') {
	message.reply('https://www.ssbwiki.com/Excitebike')
    }
    if (message.content === '!ssb excite bike') {
	message.reply('https://www.ssbwiki.com/Excitebike')
    }
    if (command === 'excitebikes') {
	message.reply('https://www.ssbwiki.com/Excitebike')
    }
    if (message.content === '!ssb excite bikes') {
	message.reply('https://www.ssbwiki.com/Excitebike')
    }
    if (command === 'pong') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (message.content === '!ssb dark samus (assist trophy)') {
	message.reply('https://www.ssbwiki.com/Dark_Samus')
    }
    if (command === 'devil') {
	message.reply('https://www.ssbwiki.com/Devil')
    }
    if (command === 'demon') {
	message.reply('https://www.ssbwiki.com/Devil')
    }
    if (command === 'dillon') {
	message.reply('https://www.ssbwiki.com/Dillon')
    }
    if (message.content === '!ssb dr. kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (message.content === '!ssb dr kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (message.content === '!ssb doctor kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (message.content === '!ssb ryuta kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (message.content === '!ssb host of the brain age series') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (message.content === '!ssb dr. wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (message.content === '!ssb dr wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (message.content === '!ssb doctor wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (message.content === '!ssb flies & hand') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (message.content === '!ssb hand & flies') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (message.content === '!ssb flies and hand') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (message.content === '!ssb hand and flies') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (command === 'helirin') {
	message.reply('https://www.ssbwiki.com/Helirin')
    }
    if (command === 'ghirahim') {
	message.reply('https://www.ssbwiki.com/Ghirahim')
    }
    if (command === 'ghosts') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (message.content === '!ssb ghosts from pac-man') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (message.content === '!ssb blinky, pinky, inky, and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (message.content === '!ssb blinky, pinky, inky and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (message.content === '!ssb blinky pinky inky and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (message.content === '!ssb gray fox') {
	message.reply('https://www.ssbwiki.com/Gray_Fox')
    }
    if (message.content === '!ssb grey fox') {
	message.reply('https://www.ssbwiki.com/Gray_Fox')
    }
    if (command === 'guile') {
	message.reply('https://www.ssbwiki.com/Guile')
    }
    if (message.content === '!ssb hammer bro') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (message.content === '!ssb hammer brother') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (message.content === '!ssb hammer koopa') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (message.content === '!ssb infantry and tanks') {
	message.reply('https://www.ssbwiki.com/Infantry_and_Tanks')
    }
    if (message.content === '!ssb infantry & tanks') {
	message.reply('https://www.ssbwiki.com/Infantry_and_Tanks')
    }
    if (message.content === '!ssb tanks and infantry') {
	message.reply('https://www.ssbwiki.com/Infantry_and_Tanks')
    }
    if (command === '!ssb tanks & infantry') {
	message.reply('https://www.ssbwiki.com/Infantry_and_Tanks')
    }
    if (message.content === 'isabelle (assist trophy)') {
	message.reply('https://www.ssbwiki.com/Isabelle')
    }
    if (command === 'isaac') {
	message.reply('https://www.ssbwiki.com/Isaac')
    }
    if (message.content === '!ssb isaac from golden sun') {
	message.reply('https://www.ssbwiki.com/Isaac')
    }
    if (command === 'jeff') {
	message.reply('https://www.ssbwiki.com/Jeff')
    }
    if (message.content === '!ssb jeff andonuts') {
	message.reply('https://www.ssbwiki.com/Jeff')
    }
    if (command === 'jill') {
	message.reply('https://www.ssbwiki.com/Jill')
    }
    if (command === "kapp'n") {
	message.reply('https://www.ssbwiki.com/Kapp%27n')
    }
    if (command === 'kappn') {
	message.reply('https://www.ssbwiki.com/Kapp%27n')
    }
    if (message.content === '!ssb kat & ana') {
	message.reply('https://www.ssbwiki.com/Kat_%26_Ana')
    }
    if (message.content === '!ssb ana & kat') {
	message.reply('https://www.ssbwiki.com/Kat_%26_Ana')
    }
    if (message.content === '!ssb kat and ana') {
	message.reply('https://www.ssbwiki.com/Kat_%26_Ana')
    }
    if (message.content === '!ssb ana and kat') {
	message.reply('https://www.ssbwiki.com/Kat_%26_Ana')
    }
    if (command === 'klaptrap') {
	message.reply('https://www.ssbwiki.com/Klaptrap')
    }
    if (message.content === '!ssb knuckle joe') {
	message.reply('https://www.ssbwiki.com/Knuckle_Joe')
    }
    if (command === 'knuckles') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (message.content === '!ssb knuckles the echidna') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (message.content === '!ssb knuckles echidna') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (command === 'krystal') {
	message.reply('https://www.ssbwiki.com/Krystal')
    }
    if (command === 'lyn') {
	message.reply('https://www.ssbwiki.com/Lyn')
    }
    if (command === 'lyndis') {
	message.reply('https://www.ssbwiki.com/Lyn')
    }
    if (command === 'metroid') {
	message.reply('https://www.ssbwiki.com/Metroid_(creature)')
    }
    if (command === 'midna') {
	message.reply('https://www.ssbwiki.com/Midna')
    }
    if (command === 'moon') {
	message.reply('https://www.ssbwiki.com/Moon')
    }
    if (message.content === '!ssb mother brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (message.content === '!ssb mommy brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (message.content === '!ssb mom brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (command === 'nightmare') {
	message.reply('https://www.ssbwiki.com/Nightmare')
    }
    if (command === 'nikki') {
	message.reply('https://www.ssbwiki.com/Nikki')
    }
    if (command === 'nintendog') {
	message.reply('https://www.ssbwiki.com/Nintendog')
    }
    if (message.content === '!ssb toy poodle') {
	message.reply('https://www.ssbwiki.com/Nintendog')
    }
    if (command === 'phosphora') {
	message.reply('https://www.ssbwiki.com/Phosphora')
    }
    if (command === 'rathalos') {
	message.reply('https://www.ssbwiki.com/Rathalos')
    }
    if (command === 'riki') {
	message.reply('https://www.ssbwiki.com/Riki')
    }
    if (command === 'rodin') {
	message.reply('https://www.ssbwiki.com/Rodin')
    }
    if (message.content === '!ssb sable prince') {
	message.reply('https://www.ssbwiki.com/Sablé_Prince')
    }
    if (message.content === '!ssb sablé prince') {
	message.reply('https://www.ssbwiki.com/Sablé_Prince')
    }
    if (message.content === '!ssb samurai goroh') {
	message.reply('https://www.ssbwiki.com/Samurai_Goroh')
    }
    if (message.content === '!ssb shadow the hedgehog') {
	message.reply('https://www.ssbwiki.com/Shadow_the_Hedgehog')
    }
    if (command === 'shadow') {
	message.reply('https://www.ssbwiki.com/Shadow_the_Hedgehog')
    }
    if (command === 'sheriff') {
	message.reply('https://www.ssbwiki.com/Sheriff')
    }
    if (message.content === '!ssb shovel knight') {
	message.reply('https://www.ssbwiki.com/Shovel_Knight')
    }
    if (message.content === '!ssb skull kid') {
	message.reply('https://www.ssbwiki.com/Skull_Kid')
    }
    if (message.content === '!ssb spring man') {
	message.reply('https://www.ssbwiki.com/Spring_Man')
    }
    if (message.content === '!ssb squid sisters') {
	message.reply('https://www.ssbwiki.com/Squid_Sisters')
    }
    if (message.content === '!ssb callie and marie') {
	message.reply('https://www.ssbwiki.com/Squid_Sisters')
    }
    if (message.content === '!ssb callie & marie') {
	message.reply('https://www.ssbwiki.com/Squid_Sisters')
    }
    if (command === 'starfy') {
	message.reply('https://www.ssbwiki.com/Starfy')
    }
    if (command === 'stafy') {
	message.reply('https://www.ssbwiki.com/Starfy')
    }
    if (command === 'starman') {
	message.reply('https://www.ssbwiki.com/Starman_(EarthBound)')
    }
    if (command === 'sukapon') {
	message.reply('https://www.ssbwiki.com/Sukapon')
    }
    if (command === 'takamaru') {
	message.reply('https://www.ssbwiki.com/Takamaru')
    }
    if (command === 'tiki') {
	message.reply('https://www.ssbwiki.com/Tiki')
    }
    if (command === 'thwomp') {
	message.reply('https://www.ssbwiki.com/Thwomp')
    }
    if (command === 'vince') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (message.content === '!ssb teacher vince') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (message.content === '!ssb tutor vince') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (command === 'vincent') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (message.content === '!ssb teacher vincent') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (message.content === '!ssb tutor vincent') {
	message.reply('https://www.ssbwiki.com/Vince')
    }
    if (command === 'waluigi') {
	message.reply('https://www.ssbwiki.com/Waluigi')
    }
    if (message.content === '!ssb wily capsule') {
	message.reply('https://www.ssbwiki.com/Dr._Wily')
    }
    if (message.content === '!ssb dr. wily') {
	message.reply('https://www.ssbwiki.com/Dr._Wily')
    }
    if (message.content === '!ssb dr wily') {
	message.reply('https://www.ssbwiki.com/Dr._Wily')
    }
    if (message.content === '!ssb doctor wily') {
	message.reply('https://www.ssbwiki.com/Dr._Wily')
    }
    if (command === '!ssb yuri kozukata') {
	message.reply('https://www.ssbwiki.com/Yuri_Kozukata')
    }
    if (command === 'yuri') {
	message.reply('https://www.ssbwiki.com/Yuri_Kozukata')
    }
    if (message.content === '!ssb zero') {
	message.reply('https://www.ssbwiki.com/Zero_(Mega_Man)')
    }
    if (message.content === '!ssb lakitu and spinies') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (message.content === '!ssb spinies and lakitu') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (message.content === '!ssb lakitu & spinies') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (message.content === '!ssb spinies & lakitu') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (command === 'lakitu') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (command === 'spinies') {
	message.reply('https://www.ssbwiki.com/Lakitu_and_Spinies')
    }
    if (message.content === '!ssb little mac (assist trophy)') {
	message.reply('https://www.ssbwiki.com/Little_Mac')
    }
    if (command === 'magnus') {
	message.reply('https://www.ssbwiki.com/Magnus')
    }
    if (message.content === '!ssb mr. resetti') {
	message.reply('https://www.ssbwiki.com/Mr._Resetti')
    }
    if (message.content === '!ssb mr resetti') {
	message.reply('https://www.ssbwiki.com/Mr._Resetti')
    }
    if (message.content === '!ssb mister resetti') {
	message.reply('https://www.ssbwiki.com/Mr._Resetti')
    }
    if (message.content === '!ssb ray mk III') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb ray mk iii') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb ray mk 3') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb ray mark III') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb ray mark iii') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb ray mark 3') {
	message.reply('https://www.ssbwiki.com/Ray_Mk_III')
    }
    if (message.content === '!ssb saki amamiya') {
	message.reply('https://www.ssbwiki.com/Saki_Amamiya')
    }
    if (command === 'tingle') {
	message.reply('https://www.ssbwiki.com/Tingle')
    } // Stages
    if (command === 'battlefield') {
	message.reply('https://www.ssbwiki.com/Battlefield_(SSBU)')
    }
    if (message.content === '!ssb big battlefield') {
	message.reply('https://www.ssbwiki.com/Big_Battlefield_(SSBU)')
    }
    if (message.content === "!ssb dracula's castle") {
	message.reply('https://www.ssbwiki.com/Dracula%27s_Castle')
    }
    if (message.content === '!ssb final destination') {
	message.reply('https://www.ssbwiki.com/Final_Destination_(SSBU)')
    }
    if (message.content === '!ssb great plateau tower') {
	message.reply('https://www.ssbwiki.com/Great_Plateau_Tower')
    }
    if (message.content === '!ssb moray towers') {
	message.reply('https://www.ssbwiki.com/Moray_Towers')
    }
    if (message.content === '!ssb new donk city hall') {
	message.reply('https://www.ssbwiki.com/New_Donk_City_Hall')
    }
    if (message.content === '!ssb dream land') {
	message.reply('https://www.ssbwiki.com/Dream_Land_(SSB)')
    }
    if (message.content === "!ssb peach's castle") {
	message.reply('https://www.ssbwiki.com/Peach%27s_Castle')
    }
    if (message.content === '!ssb hyrule castle') {
	message.reply('https://www.ssbwiki.com/Hyrule_Castle')
    }
    if (message.content === '!ssb kongo jungle') {
	message.reply('https://www.ssbwiki.com/Kongo_Jungle_(SSB)')
    }
    if (message.content === '!ssb mushroom kingdom') {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_(SSB)')
    }
    if (message.content === '!ssb saffron city') {
	message.reply('https://www.ssbwiki.com/Saffron_City')
    }
    if (message.content === "!ssb planet zebes") {
	message.reply('https://www.ssbwiki.com/Planet_Zebes')
    }
    if (message.content === "!ssb sector z") {
	message.reply('https://www.ssbwiki.com/Sector_Z')
    }
    if (message.content === "!ssb sector Z") {
	message.reply('https://www.ssbwiki.com/Sector_Z')
    }
    if (message.content === '!ssb super happy tree') {
	message.reply('https://www.ssbwiki.com/Super_Happy_Tree')
    }
    if (message.content === '!ssb big blue') {
	message.reply('https://www.ssbwiki.com/Big_Blue')
    }
    if (command === 'brinstar') {
	message.reply('https://www.ssbwiki.com/Brinstar')
    }
    if (message.content === '!ssb brinstar depths') {
	message.reply('https://www.ssbwiki.com/Brinstar_Depths')
    }
    if (command === 'corneria') {
	message.reply('https://www.ssbwiki.com/Corneria')
    }
    if (message.content === '!ssb fountain of dreams') {
	message.reply('https://www.ssbwiki.com/Fountain_of_Dreams')
    }
    if (command === 'fourside') {
	message.reply('https://www.ssbwiki.com/Fourside')
    }
    if (message.content === '!ssb great bay') {
	message.reply('https://www.ssbwiki.com/Great_Bay')
    }
    if (message.content === '!ssb green greens') {
	message.reply('https://www.ssbwiki.com/Green_Greens')
    }
    if (message.content === '!ssb jungle japes') {
	message.reply('https://www.ssbwiki.com/Jungle_Japes')
    }
    if (message.content === '!ssb kongo falls') {
	message.reply('https://www.ssbwiki.com/Kongo_Falls')
    }
    if (message.content === '!ssb mushroom kingdom II') {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_II')
    }
    if (message.content === '!ssb mushroom kingdom 2') {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_II')
    }
    if (command === 'onett') {
	message.reply('https://www.ssbwiki.com/Onett')
    }
    if (message.content === '!ssb pokemon stadium') {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium')
    }
    if (message.content === '!ssb pokémon stadium') {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium')
    }
    if (message.content === "!ssb princess peach's castle") {
	message.reply('https://www.ssbwiki.com/Princess_Peach%27s_Castle')
    }
    if (message.content === '!ssb rainbow cruise') {
	message.reply('https://www.ssbwiki.com/Rainbow_Cruise')
    }
    if (command === 'temple') {
	message.reply('https://www.ssbwiki.com/Temple')
    }
    if (command === 'venom') {
	message.reply('https://www.ssbwiki.com/Venom')
    }
    if (message.content === "!ssb yoshi's island (melee)") {
	message.reply('https://www.ssbwiki.com/Yoshi%27s_Island_(SSBM)')
    }
    if (message.content === "!ssb yoshi's story") {
	message.reply('https://www.ssbwiki.com/Yoshi%27s_Story')
    }
    if (command === "75m") {
	message.reply('https://www.ssbwiki.com/75m')
    }
    if (message.content === "!ssb 75 m") {
	message.reply('https://www.ssbwiki.com/75m')
    }
    if (message.content === "!ssb bridge of eldin") {
	message.reply('https://www.ssbwiki.com/Bridge_of_Eldin')
    }
    if (message.content === "!ssb castle siege") {
	message.reply('https://www.ssbwiki.com/Castle_Siege')
    }
    if (message.content === "!ssb delfino plaza") {
	message.reply('https://www.ssbwiki.com/Delfino_Plaza')
    }
    if (message.content === "!ssb distant planet") {
	message.reply('https://www.ssbwiki.com/Distant_Planet')
    }
    if (message.content === "!ssb frigate orpheon") {
	message.reply('https://www.ssbwiki.com/Frigate_Orpheon')
    }
    if (message.content === "!ssb green hill zone") {
	message.reply('https://www.ssbwiki.com/Green_Hill_Zone')
    }
    if (command === "halberd") {
	message.reply('https://www.ssbwiki.com/Halberd')
    }
    if (command === "hanenbow") {
	message.reply('https://www.ssbwiki.com/Hanenbow')
    }
    if (message.content === "!ssb luigi's mansion") {
	message.reply('https://www.ssbwiki.com/Luigi%27s_Mansion')
    }
    if (message.content === "!ssb lylat cruise") {
	message.reply('https://www.ssbwiki.com/Lylat_Cruise')
    }
    if (message.content === "!ssb mushroomy kingdom") {
	message.reply('https://www.ssbwiki.com/Mushroomy_Kingdom')
    }
    if (message.content === "!ssb mario bros.") {
	message.reply('https://www.ssbwiki.com/Mario_Bros.')
    }
    if (message.content === "!ssb mario bros") {
	message.reply('https://www.ssbwiki.com/Mario_Bros.')
    }
    if (message.content === "!ssb new pork city") {
	message.reply('https://www.ssbwiki.com/New_Pork_City')
    }
    if (command === "norfair") {
	message.reply('https://www.ssbwiki.com/Norfair')
    }
    if (message.content === "!ssb figure-8 circuit") {
	message.reply('https://www.ssbwiki.com/Figure-8_Circuit')
    }
    if (message.content === "!ssb figure 8 circuit") {
	message.reply('https://www.ssbwiki.com/Figure-8_Circuit')
    }
    if (message.content === "!ssb figure-eight circuit") {
	message.reply('https://www.ssbwiki.com/Figure-8_Circuit')
    }
    if (message.content === "!ssb figure eight circuit") {
	message.reply('https://www.ssbwiki.com/Figure-8_Circuit')
    }
    if (message.content === "!ssb pirate ship") {
	message.reply('https://www.ssbwiki.com/Pirate_Ship')
    }
    if (message.content === "!ssb pokemon stadium 2") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokémon stadium 2") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokemon stadium II") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokémon stadium II") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokemon stadium ii") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokémon stadium ii") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokémon stadium two") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb pokemon stadium two") {
	message.reply('https://www.ssbwiki.com/Pokémon_Stadium_2')
    }
    if (message.content === "!ssb port town aero dive") {
	message.reply('https://www.ssbwiki.com/Port_Town_Aero_Dive')
    }
    if (message.content === "!ssb port town aero drive") {
	message.reply('https://www.ssbwiki.com/Port_Town_Aero_Dive')
    }
    if (message.content === "!ssb shadow moses island") {
	message.reply('https://www.ssbwiki.com/Shadow_Moses_Island')
    }
    if (command === "skyworld") {
	message.reply('https://www.ssbwiki.com/Skyworld')
    }
    if (command === "smashville") {
	message.reply('https://www.ssbwiki.com/Smashville')
    }
    if (message.content === "!ssb smash village") {
	message.reply('https://www.ssbwiki.com/Smashville')
    }
    if (message.content === "!ssb spear pillar") {
	message.reply('https://www.ssbwiki.com/Spear_Pillar')
    }
    if (command === "summit") {
	message.reply('https://www.ssbwiki.com/Summit')
    }
    if (message.content === "!ssb warioware, inc.") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb warioware, inc") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb wario ware, inc.") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb wario ware, inc") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb wario ware inc.") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb wario ware inc") {
	message.reply('https://www.ssbwiki.com/WarioWare,_Inc.')
    }
    if (message.content === "!ssb yoshi's island") {
	message.reply('https://www.ssbwiki.com/Yoshi%27s_Island_(SSBB)')
    }
    if (message.content === "!ssb boxing ring") {
	message.reply('https://www.ssbwiki.com/Boxing_Ring')
    }
    if (message.content === "!ssb duck hunt (stage)") {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(stage)')
    }
    if (message.content === "!ssb duck hunt stage") {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(stage)')
    }
    if (message.content === "!ssb gaur plain") {
	message.reply('https://www.ssbwiki.com/Gaur_Plain')
    }
    if (command === "midgar") {
	message.reply('https://www.ssbwiki.com/Midgar')
    }
    if (message.content === "!ssb super mario maker") {
	message.reply('https://www.ssbwiki.com/Super_Mario_Maker')
    }
    if (message.content === "!ssb suzaku castle") {
	message.reply('https://www.ssbwiki.com/Suzaku_Castle')
    }
    if (message.content === "!ssb umbra clock tower") {
	message.reply('https://www.ssbwiki.com/Umbra_Clock_Tower')
    }
    if (message.content === "!ssb wily castle") {
	message.reply('https://www.ssbwiki.com/Wily_Castle')
    }
    if (message.content === "!ssb skull castle") {
	message.reply('https://www.ssbwiki.com/Wily_Castle')
    }
    if (message.content === "!ssb 3d land") {
	message.reply('https://www.ssbwiki.com/3D_Land')
    }
    if (message.content === "!ssb super mario 3d land") {
	message.reply('https://www.ssbwiki.com/3D_Land')
    }
    if (message.content === "!ssb 3D land") {
	message.reply('https://www.ssbwiki.com/3D_Land')
    }
    if (message.content === "!ssb super mario 3D land") {
	message.reply('https://www.ssbwiki.com/3D_Land')
    }
    if (message.content === "!ssb arena ferox") {
	message.reply('https://www.ssbwiki.com/Arena_Ferox')
    }
    if (message.content === "!ssb balloon fight") {
	message.reply('https://www.ssbwiki.com/Balloon_Fight')
    }
    if (message.content === "!ssb dream land gb") {
	message.reply('https://www.ssbwiki.com/Dream_Land_GB')
    }
    if (message.content === "!ssb dream land GB") {
	message.reply('https://www.ssbwiki.com/Dream_Land_GB')
    }
    if (message.content === "!ssb dream land gameboy") {
	message.reply('https://www.ssbwiki.com/Dream_Land_GB')
    }
    if (message.content === "!ssb find mii") {
	message.reply('https://www.ssbwiki.com/Find_Mii')
    }
    if (message.content === "!ssb gerudo valley") {
	message.reply('https://www.ssbwiki.com/Gerudo_Valley')
    }
    if (message.content === "!ssb golden plains") {
	message.reply('https://www.ssbwiki.com/Golden_Plains')
    }
    if (message.content === "!ssb living room") {
	message.reply('https://www.ssbwiki.com/Living_Room')
    }
    if (command === "!ssb magicant") {
	message.reply('https://www.ssbwiki.com/Magicant')
    }
    if (message.content === "!ssb mute city SNES") {
	message.reply('https://www.ssbwiki.com/Mute_City_SNES')
    }
    if (message.content === "!ssb mute city snes") {
	message.reply('https://www.ssbwiki.com/Mute_City_SNES')
    }
    if (message.content === "!ssb mute city") {
	message.reply('https://www.ssbwiki.com/Mute_City_SNES')
    }
    if (message.content === "!ssb paper mario") {
	message.reply('https://www.ssbwiki.com/Paper_Mario')
    }
    if (message.content === "!ssb pictochat") {
	message.reply('https://www.ssbwiki.com/PictoChat')
    }
    if (message.content === "!ssb pictochat 2") {
	message.reply('https://www.ssbwiki.com/PictoChat_2')
    }
    if (message.content === "!ssb picto chat 2") {
	message.reply('https://www.ssbwiki.com/PictoChat_2')
    }
    if (message.content === "!ssb pictochat two") {
	message.reply('https://www.ssbwiki.com/PictoChat_2')
    }
    if (message.content === "!ssb picto chat two") {
	message.reply('https://www.ssbwiki.com/PictoChat_2')
    }
    if (message.content === "!ssb prism tower") {
	message.reply('https://www.ssbwiki.com/Prism_Tower')
    }
    if (message.content === "!ssb reset bomb forest") {
	message.reply('https://www.ssbwiki.com/Reset_Bomb_Forest')
    }
    if (message.content === "!ssb spirit train") {
	message.reply('https://www.ssbwiki.com/Spirit_Train')
    }
    if (message.content === "!ssb tomodachi life") {
	message.reply('https://www.ssbwiki.com/Tomodachi_Life')
    }
    if (message.content === "!ssb tortimer island") {
	message.reply('https://www.ssbwiki.com/Tortimer_Island')
    }
    if (message.content === "!ssb unova pokémon league") {
	message.reply('https://www.ssbwiki.com/Unova_Pokémon_League')
    }
    if (message.content === "!ssb unova pokemon league") {
	message.reply('https://www.ssbwiki.com/Unova_Pokémon_League')
    }
    if (command === "coliseum") {
	message.reply('https://www.ssbwiki.com/Coliseum')
    }
    if (command === "gamer") {
	message.reply('https://www.ssbwiki.com/Gamer')
    }
    if (message.content === "!ssb garden of hope") {
	message.reply('https://www.ssbwiki.com/Garden_of_Hope')
    }
    if (message.content === "!ssb flat zone") {
	message.reply('https://www.ssbwiki.com/Flat_Zone')
    }
    if (message.content === "!ssb flat zone 2") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_2')
    }
    if (message.content === "!ssb flat zone two") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_2')
    }
    if (message.content === "!ssb flat zone ii") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_2')
    }
    if (message.content === "!ssb flat zone II") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_2')
    }
    if (message.content === "!ssb flat zone x") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_X')
    }
    if (message.content === "!ssb flat zone X") {
	message.reply('https://www.ssbwiki.com/Flat_Zone_X')
    }
    if (message.content === "!ssb kalos pokemon league") {
	message.reply('https://www.ssbwiki.com/Kalos_Pokémon_League')
    }
    if (message.content === "!ssb kalos pokémon league") {
	message.reply('https://www.ssbwiki.com/Kalos_Pokémon_League')
    }
    if (message.content === "!ssb mario circuit") {
	message.reply('https://www.ssbwiki.com/Mario_Circuit_(SSB4)')
    }
    if (message.content === "!ssb mario galaxy") {
	message.reply('https://www.ssbwiki.com/Mario_Galaxy')
    }
    if (message.content === "!ssb mushroom kingdom u") {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_U')
    }
    if (message.content === "!ssb mushroom kingdom U") {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_U')
    }
    if (message.content === "!ssb mario u world") {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_U')
    }
    if (message.content === "!ssb mario U world") {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_U')
    }
    if (command === "pac-land") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (command === "PAC-LAND") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (message.content === "!ssb pac land") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (message.content === "!ssb PAC LAND") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (command === "pacland") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (command === "PACLAND") {
	message.reply('https://www.ssbwiki.com/Pac-Land')
    }
    if (message.content === "!ssb palutena's temple") {
	message.reply('https://www.ssbwiki.com/Palutena%27s_Temple')
    }
    if (message.content === "!ssb angel land") {
	message.reply('https://www.ssbwiki.com/Palutena%27s_Temple')
    }
    if (command === "pilotwings") {
	message.reply('https://www.ssbwiki.com/Pilotwings')
    }
    if (command === "skyloft") {
	message.reply('https://www.ssbwiki.com/Skyloft')
    }
    if (message.content === "!ssb the great cave offensive") {
	message.reply('https://www.ssbwiki.com/The_Great_Cave_Offensive')
    }
    if (message.content === "!ssb great cave offensive") {
	message.reply('https://www.ssbwiki.com/The_Great_Cave_Offensive')
    }
    if (message.content === "!ssb town and city") {
	message.reply('https://www.ssbwiki.com/Town_and_City')
    }
    if (message.content === "!ssb town & city") {
	message.reply('https://www.ssbwiki.com/Town_and_City')
    }
    if (message.content === "!ssb city and town") {
	message.reply('https://www.ssbwiki.com/Town_and_City')
    }
    if (message.content === "!ssb city & town") {
	message.reply('https://www.ssbwiki.com/Town_and_City')
    }
    if (message.content === "!ssb wii fit studio") {
	message.reply('https://www.ssbwiki.com/Wii_Fit_Studio')
    }
    if (message.content === "!ssb the wii fit studio") {
	message.reply('https://www.ssbwiki.com/Wii_Fit_Studio')
    }
    if (message.content === "!ssb windy hill zone") {
	message.reply('https://www.ssbwiki.com/Windy_Hill_Zone')
    }
    if (message.content === "!ssb wrecking crew") {
	message.reply('https://www.ssbwiki.com/Wrecking_Crew')
    }
    if (message.content === "!ssb wuhu island") {
	message.reply('https://www.ssbwiki.com/Wuhu_Island')
    }
    if (message.content === "!ssb icicle mountain") {
	message.reply('https://www.ssbwiki.com/Icicle_Mountain')
    }
    if (message.content === "!ssb mute city (melee)") {
	message.reply('https://www.ssbwiki.com/Mute_City_(SSBM)')
    }
    if (message.content === "!ssb mushroom kingdom (melee)") {
	message.reply('https://www.ssbwiki.com/Mushroom_Kingdom_(SSBM)')
    }
    if (message.content === "!ssb poke floats") {
	message.reply('https://www.ssbwiki.com/Poké_Floats')
    }
    if (command === "pokefloats") {
	message.reply('https://www.ssbwiki.com/Poké_Floats')
    }
    if (message.content === "!ssb poké floats") {
	message.reply('https://www.ssbwiki.com/Poké_Floats')
    }
    if (command === "pokéfloats") {
	message.reply('https://www.ssbwiki.com/Poké_Floats')
    }
    if (message.content === "!ssb rumble falls") {
	message.reply('https://www.ssbwiki.com/Rumble_Falls')
    }
    if (message.content === "!ssb rainbow road") {
	message.reply('https://www.ssbwiki.com/Rainbow_Road')
    }
    if (command === "pac-maze") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (command === "PAC-MAZE") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (message.content === "!ssb pac maze") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (message.content === "!ssb PAC MAZE") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (command === "pacmaze") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (command === "PACMAZE") {
	message.reply('https://www.ssbwiki.com/Pac-Maze')
    }
    if (message.content === "!ssb wooly world") {
	message.reply('https://www.ssbwiki.com/Woolly_World')
    }
    if (message.content === "!ssb woolly world") {
	message.reply('https://www.ssbwiki.com/Woolly_World')
    }
    if (message.content === "!ssb jungle hijinxs") {
	message.reply('https://www.ssbwiki.com/Jungle_Hijinxs')
    }
    if (command === "pyrosphere") {
	message.reply('https://www.ssbwiki.com/Pyrosphere')
    }
    if (message.content === "!ssb orbital gate assault") {
	message.reply('https://www.ssbwiki.com/Orbital_Gate_Assault')
    }
    if (command === "miiverse") {
	message.reply('https://www.ssbwiki.com/Miiverse')
    }
});

client.login(process.env.GUINSSB_TOKEN)
