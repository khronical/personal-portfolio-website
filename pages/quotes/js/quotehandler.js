const quotes = {
    khronical: [
        "i just killed a guy with a glock and now im running"
    ],
    vomitchicken: [
        "I don't discriminate, I only penetrate"
    ],
    bliooz: [
        "Khronical makes underlord and instantly regrets it!",
        "Why wont you adopt me? COS UR BLACK!",
        "I started eating in real life to make my hunger bar go up",
        "I need to listen to some therapeutic sounds hold up. *NEVER BACK DOWN, NEVER GIVE UP*",
        "I'm feeling very freaky & this pillow is about to get raped",
        "*pops a totem* yeah okay in a bit guys-",
        "I woke up in gaza strip",
        "I hate niggers",
        "subscribe to https://www.youtube.com/bliooz",
        "follow bliooz on spotify plz I'll suck you off"
    ],
    drmatthewhd: [
        "These things, they take time.",
        "WHAT IS THIS MICKEY MOUSE BULLSHIT",
        "Drink water, It's good for you",
        "What am I just hearding?"
    ],
    chasetrg: [
        "about time this section got added"
    ],
    celestialspectre: [
        "Spectre makes his lore character a piece of bread instantly regrets it!",
        "MILK GET IN THE FUCKING LINE YOU FATHERLESS RANKER!"
    ],
    mel1364: [
        "whenever someone tells you to check outside your front door, that's a good time to go and lock your front door",
        "the fog is coming",
        "the killings the killings the killings the-"
    ],
    noobsteel: [
        "I am an america"
    ]
};

function showQuote(person, index) {
    const quoteElement = document.getElementById(`quote-${person}`);
    quoteElement.textContent = quotes[person][index];
}

function prevQuote(person) {
    const quoteIndex = (currentIndex[person] - 1 + quotes[person].length) % quotes[person].length;
    showQuote(person, quoteIndex);
    currentIndex[person] = quoteIndex;
}

function nextQuote(person) {
    const quoteIndex = (currentIndex[person] + 1) % quotes[person].length;
    showQuote(person, quoteIndex);
    currentIndex[person] = quoteIndex;
}

function randomQuote(person) {
    const quoteIndex = Math.floor(Math.random() * quotes[person].length);
    showQuote(person, quoteIndex);
    currentIndex[person] = quoteIndex;
}

// Initialize currentIndex for each person
const currentIndex = {
    khronical: 0,
    vomitchicken: 0,
    bliooz: 0,
    drmatthewhd: 0,
    chasetrg: 0,
    celestialspectre: 0,
    mel1364: 0,
    noobsteel: 0
    
    // Initialize for other people as needed
};

// Show the initial quote for each person
for (const person in currentIndex) {
    showQuote(person, currentIndex[person]);
}