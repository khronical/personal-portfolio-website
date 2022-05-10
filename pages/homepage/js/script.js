// RANDOM QUOTE SHIT
const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "You were always aggrevated when we were together.",
    "You need to discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew.",
    "I never drifted away, it was your excuse.",
    "Power always gets out the worse in you.",
    "Egg Grenade deserves all the negativity but death.",
    "I have severe procrastination.",
    "Homophobia doesn't involve anything with fear.",
    "Free Hong Kong",
    "L Russia, Ukraine on top 💪💪",
    "Christopher is a bozo 💀",
    "Sombat is a bozo 💀",
    "Aaden is goofy af 💀",
    "Thiery is racist 💀",
    "Auctioning off Jacob for $100,000.",
    "Luz Marie is amazing :D",
    "THANK YOUU ANGELINAA <33",
    "HELLOO XITLALYY!!",
    "YOO HELLO JUSTINN :D",
    "Matthew Patthew am I right??",
    "NeoXephox on top 💪💪",
    "HELLOO NEO SAVANN :D",
    "Santiago is fr a good person 💪💪",
    "Do or do not, there is no try.",
    "Kevin is such a bozo.",
    "Go eat some tacos beaner.",
    "Susana is a soccerplayer.",
    "Kevin is gay ngl.",
    "And to you, till another lifetime.",
    "I have broken free from the chains of loyalty.",
    "You regret the split up, don't you?",
    "Criminality is worse than Chernobyl.",
    "Ya'll ever get the urge to massacre?",
    "Don't drop the soap my guy 💀",
    "Selling children at a time.",
    "Life is ours to choose.",
    "Was it worth it..?",
    "N bfx ltssf bfny ktw dtz, gzy dtz inis'y bfsy rj yt ini dtz.",
    "Emily is built like a minecraft skeleton fr fr 💀",
    "I don't have to lie anymore, you always made me stressed.",
    "I did love you, it's just the fact you doubted me too much.",
    "At this point I just made myself hate you.",
    "If you ever come back, I won't say yes.",
    "School is way to draining tbh.",
    "Matthew... he's cool, just gets selfish at times.",
    "Justin.. good friend, gets too personal at times though.",
    "Neo.. very good friend, he just also gets too personal at times."
];

function randomQuote() {
    let generatedquote = quotes[random = Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").textContent = '"'+generatedquote+'"'
}
randomQuote()
// RANDOM QUOTE SHIT END

// THEME CODING SHIT
let theme = window.localStorage.getItem('likes-sun');
let scheme = window.matchMedia(`(prefers-color-scheme: light)`);

if (theme === 'no') {
	document.body.classList.add('dark');
    console.log('client hates the sun :(');
} else if (theme === 'yes') {
	document.body.classList.remove('dark');
    console.log('client likes the sun :D');
} else {
	if (scheme) {
		document.body.classList.add('dark');
		console.log('client is new, but prefers dark');
	} else {
		document.body.classList.remove('dark');
		console.log('client is new, but prefers light');
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