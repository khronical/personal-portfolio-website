document.addEventListener("DOMContentLoaded", () => {
    const playlistsContainer = document.getElementById('playlists-container');
  
    playlistsContainer.innerHTML = '<p>Loading playlists...</p>';
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
          method: "get",
          headers: myHeaders,
          redirect: "follow",
      };
  
      const playlists = [
        { id: "6mEbUBlq53BZyyFWBqo64K" },
        { id: "1ljpacUeurSFijBSKWJIgI" },
        { id: "3GAJHgI7mUhbmvgzDZduS0" },
        { id: "6U2diEWPAGigJMRJ2aMIvX" },
        { id: "6TWbnkOXPrRTOmg4hpnEbE" },
        { id: "5jdJrSNBRpOFj95aSipZpU" }
      ];
        
  
      playlists.forEach(index => {
          fetch(`https://v1.nocodeapi.com/khronical/spotify/VwXrQCiPOyCBoIwI/playlists?id=${index.id}`, requestOptions)
          .then(response => response.text())
          .then(result => {
            const playlistName = JSON.parse(result).name;
            const playlistDesc = JSON.parse(result).description;
            const playlistId = JSON.parse(result).id;
            const playlistCover = JSON.parse(result).images[0].url;
      
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
        .catch(error => console.log('error', error));
    });

    playlistsContainer.innerHTML = '';
});