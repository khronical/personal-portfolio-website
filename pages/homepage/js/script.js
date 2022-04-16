const quotes = 
[
    "It all starts, and it all ends, with you.",
    "As the stars fall from heaven, stay awake.",
    "You were the aggressor in this relationship.",
    "You need to discipline them until they're good at it.",
    "What goes up, must come down.",
    "You're just not independent, Matthew."
];

function randomQuote() {
    let generatedquote = quotes[random = Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").textContent = '"'+generatedquote+'"'
}

randomQuote()