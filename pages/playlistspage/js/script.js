document.addEventListener("DOMContentLoaded", () => {
  const playlistsContainer = document.getElementById('playlists-container');

  const playlists = [
    { name: "Heartbeat in Love", desc: `"Did heaven open up its door, to gift the world with one angel more?"`, id: "1ljpacUeurSFijBSKWJIgI", image: "https://i.scdn.co/image/ab67706c0000bebbfcaea767b1716c35ffa5c20a" },
    { name: "Moving Forward", desc: `"Life is about the journey, not the destination, let it be what it is."`, id: "6mEbUBlq53BZyyFWBqo64K", image: "https://i.scdn.co/image/ab67706c0000bebbd50c7d1fa10fa2da03b4a9c8" },
    { name: '"Time Heals All Wounds."', desc: `"Finally, I've managed to break free; Free of my thoughts, free of lies, free from hurting, free from her."`, id: "3GAJHgI7mUhbmvgzDZduS0", image: "https://i.scdn.co/image/ab67706c0000bebbbe1998a5fe109ee5bf41b322" },
    { name: "Energizing Negativity", desc: `Up-Beat music that can have positive, or negative lyricss !`, id: "6TWbnkOXPrRTOmg4hpnEbE", image: "https://i.scdn.co/image/ab67706c0000bebb816529c5fc208a256138cb5f" },
    { name: "Going with the Flow", desc: `Phases throughout my life, best listened randomizedd :)`, id: "6U2diEWPAGigJMRJ2aMIvX", image: "https://i.scdn.co/image/ab67706c0000bebb3106ac0ec880c2f9bda5cb62" },
    { name: `"Enough."`, desc: `"Be free and let loose."`, id: "5jdJrSNBRpOFj95aSipZpU", image: "https://i.scdn.co/image/ab67706c0000bebbb3c104218997fcd2ec1a699d" }
  ];

  playlists.forEach(index => {
    const playlistName = index.name;
    const playlistDesc = index.desc;
    const playlistId = index.id;
    const playlistCover = index.image;

    const playlistCard = document.createElement('div');
    playlistCard.classList.add('playlist-card');
    playlistCard.innerHTML = `
      <img src=${playlistCover} alt=${playlistName}>
      <h3 class="C_Name">${playlistName}</h3>
      <small class="C_Desc">${playlistDesc}</small>
    `;
    playlistCard.addEventListener('click', () => {
    window.open(`https://open.spotify.com/playlist/${playlistId}`, '_blank');
    });

    playlistCard.classList.add("Card");

    playlistsContainer.appendChild(playlistCard);
  })
});

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