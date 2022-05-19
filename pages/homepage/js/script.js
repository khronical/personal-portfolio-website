// RANDOM QUOTE SHIT
const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "You need to discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew.",
    "You're the worst human being i've ever met.",
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
    "Luz Marie is amazing :D",
    "Thank you Angelina for everything <3",
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
    "Selling a child at a time.",
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
    "Klu Klux Klan is a big L",
    "Finna call the tenth crucade on you.",
    "Ms. Ngeth is a big W B)",
    "When you devoted to me why not be a little more friendly?",
    "And well she's still runnin away from you.",
    "And she told that she fuckin hates you.",
    "What gives this energy? :)",
    "A Capricorn oh f#$k that.",
    "All this over a kiss?",
    "You weren't there why you pressed by this? 💀💀",
    "If I had it my way you'd sleep on the concrete.",
    "I'm not sure they'd let you off easily.",
    "F#$k the past, f#$k them, they all made me sad.",
    "Imagine being name Vladmir Putin.",
    "I feel so fuckin great oh my god :D",
    "This quote was written at 1:29 AM, 05/19/22"
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