// RANDOM QUOTE SHIT
const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "You need to discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew.",
    "Power always gets out the worse in you.",
    "Egg Grenade deserves torture.",
    "I have severe procrastination.",
    "Homophobia doesn't involve anything with fear.",
    "Free Hong Kong",
    "L Russia, Ukraine on top 💪💪",
    "Christopher is a bozo 💀",
    "Sombat is a bozo 💀",
    "Aaden is goofy af 💀",
    "Thiery is racist 💀",
    "Auctioning off Jacob for $100,000.",
    "Luz is awesome",
    "Thank you Angelina !!!",
    "Howdy Xitlaly 😎",
    "YOO HELLO JUSTINN",
    "Matthew Patthew am I right??",
    "NeoXephox on top 💪💪",
    "YOOO NEOO",
    "Santiago is fr goated 💪💪",
    "Do or do not, there is no try.",
    "Kevin is such a bozo.",
    "Go eat some tacos beaner.",
    "Susana is a soccerplayer.",
    "Kevin is gay ngl.",
    "And to you, till another lifetime.",
    "Criminality is worse than Chernobyl.",
    "Intrusive thoughts almost be winnin",
    "Don't drop the soap",
    "Selling kidneys",
    "Life is ours to choose.",
    "Was it worth it..?",
    "N bfx ltssf bfny ktw dtz, gzy dtz inis'y bfsy rj yt ini dtz.",
    "Emily is built like a minecraft skeleton fr fr 💀",
    "I don't have to lie anymore, you always made me stressed.",
    "I did love you, it's just the fact you doubted me too much.",
    "At this point I just made myself hate you.",
    "Do I look like I care? 💀",
    "School is wayy too draining tbh.",
    "Matthew is a very good friend 💪💪",
    "Justin is also a very good friend, 10/10 💪💪",
    "NEO IS A BIGG W 💪💪",
    "Where'd all the time go? 🤔",
    "SBAC is too ezz",
    "Ms. Bachelier is a good person B)",
    "No Women?",
    "Low IQ?",
    "Doxxing kids every step of the way.",
    "Is life a simulation?",
    "Thiery is only gay on Tuesdays.",
    "Do I have a god complex??",
    "I look to all of you and see a different species.",
    "Cause I'm so high my brain can't even look at the fall.",
    "Kool Kids Klub B)",
    "Finna call the tenth crucade on you",
    "Ms. Ngeth 💪",
    "And she told that she fuckin hates you.",
    "What gives this energy? :)",
    "A Capricorn oh f#$k that.",
    "All this over a kiss?",
    "You weren't there why you pressed by this? 💀💀",
    "If I had it my way you'd sleep on the concrete.",
    "Imagine being named Vladmir Putin.",
    "I feel so fuckin great oh my god",
    "This quote was written on 1:29 AM, 05/19/22",
    "There's only 2 things I hate, racists and blackies",
    "Stay woke stay white",
    "Watch me get cancelled for this shit",
    "This quote was written on 10:28 PM, 10/25/22",
    "Bro who keeps drinking from my water uninvited bro",
    "Rest In Pieces Jacob 🙏🙏",
    "Jalisco Cartel head ahh",
    "Shut yo strawberry picker ass up bro 💀",
];

function randomQuote() {
    let generatedquote = quotes[random = Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").textContent = '"'+generatedquote+'"'
}
randomQuote()
// RANDOM QUOTE SHIT END

// THEME CODING SHIT
let theme = window.localStorage.getItem('likes-sun', 'yes');
let scheme = window.matchMedia(`(prefers-color-scheme: light)`);

if (theme === 'no') {
	document.body.classList.add('dark');
    console.log('client hates the sun :(');
} else if (theme === 'yes') {
	document.body.classList.remove('dark');
    console.log('client likes the sun :D');
} else {
	if (scheme) {
        document.body.classList.remove('dark');
		console.log('client is new, but prefers light');
	} else {
		document.body.classList.add('dark');
		console.log('client is new, but prefers dark');
	}
}

function toggleTheme() {
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {
		window.localStorage.setItem('likes-sun', 'no');
		console.log('client likes emo');
	} else {
		window.localStorage.setItem('likes-sun', 'yes');
		console.log('client likes sunlight');
	}
}
// THEME CODING SHIT END