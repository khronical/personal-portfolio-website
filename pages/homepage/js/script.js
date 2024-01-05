// RANDOM QUOTE SHIT
const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "Discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew.",
    "Power always gets out the worse in you.",
    "Egg Grenade WHO?!?!?",
    "I have severe procrastination.",
    "Homophobia isn't a phobia.",
    "Free Hong Kong",
    "Ukraine on top 💪💪",
    "Christopher is a bozo 💀",
    "Sombat is a bozo 💀",
    "Aaden is goofy af 💀",
    "Thiery is racist 💀",
    "Auctioning Jacob for 100k.",
    "Luz is the prettiest person I know.",
    "Angelina is a W",
    "Justin's #2 OG",
    "Matthew Patthew am I right??",
    "Bliooz on top 💪💪",
    "Neo's #2 OG",
    "Santiago Sepulveda 🙌",
    "Do or do not, there is no try.",
    "Kevin the Bozo",
    "Go eat some tacos beaner.",
    "Go back to playing football-soccer",
    "Kevin is gay ngl.",
    "And to you, till another lifetime.",
    "Criminality is worse than Chernobyl.",
    "Intrusive thoughts almost be winnin",
    "Don't drop the soap",
    "Selling kidneys",
    "Life is ours to choose.",
    "Was it worth it..?",
    "N bfx ltssf bfny ktw dtz, gzy dtz inis'y bfsy rj yt ini dtz.",
    "Do I look like I care? 💀",
    "School is wayy too draining tbh.",
    "DrMatthewHD is a W Friend",
    "Grateful for the OGs Justin & Neo 🙌",
    "Where'd all the time go?",
    "SBAC is too ezz",
    "Low IQ?",
    "Doxxing kids every step of the way.",
    "Is life a simulation?",
    "Thiery is only gay on Tuesdays.",
    "Do I have a god complex??",
    "I look to all of you and see a different species.",
    "Cause I'm so high my brain can't even look at the fall.",
    "Kool Kids Klub B)",
    "Finna call the tenth crucade on you",
    "And she told that she fuckin hates you.",
    "What gives this energy? :)",
    "A Capricorn oh f#$k that.",
    "All this over a kiss?",
    "You weren't there why you pressed by this?",
    "If I had it my way you'd sleep on the concrete.",
    "Imagine being named Vladmir Putin.",
    "You get me so high.",
    "This quote was written on 1:29 AM, 05/19/22",
    "Stay woke stay white",
    "Watch me get cancelled for this shit",
    "This quote was written on 10:28 PM, 10/25/22",
    "Bro who keeps drinking from my water uninvited bro",
    "Rest In Pieces Jacob 🙏🙏",
    "Jalisco Cartel head ahh",
    "Shut yo strawberry picker ass up bro",
    "Vince Staples took my parking",
    "South Park",
    "Delivering Bombs since 2077",
    "Ay if u a classmate, u never saw this",
    "Watch and learn.",
    "This school actually ghetto.",
    "Who let him cook? 💀",
    "Bliooz Music 🙌🙌",
    "She don't wanna be saved, don't save her.",
    "I could stare into your eyes all day <3",
    "Stephen Hawking loves kiddies",
    "Bliooz SMP 2077",
    "No Bitches?",
    "Fuck Finals"
];

function randomQuote() {
    let generatedquote = quotes[Math.floor(Math.random() * quotes.length)] // NTS: random quote generation
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