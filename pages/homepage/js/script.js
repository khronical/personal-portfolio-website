const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "You were the aggressor in this relationship.",
    "You need to discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew.",
    "I never drifted away, it was your excuse.",
    "Power always gets out the worse in you.",
    "Egg Grenade deserves all the negativity but death.",
    "Ms. Bachelier is sexist without wanting to admit it.",
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
    "HELLOO NEO SAVANN :D"
];

function randomQuote() {
    let generatedquote = quotes[random = Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").textContent = '"'+generatedquote+'"'
}

randomQuote()