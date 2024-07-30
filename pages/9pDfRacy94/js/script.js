function decrypt(text, secret) {
    return text.split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt();
                const offset = (code >= 65 && code <= 90) ? 65 : 97;
                return String.fromCharCode(((code - offset - secret + 26) % 26) + offset);
            }
            return char; // Non-alphabetic characters remain unchanged
        })
        .join('');
}

console.log('One shines brighter than the others.')
console.log('EXAMINE THE STARS.')



function checkText() {
    const rawpass = 'woyahhw';

    const textbox = document.getElementById('textbox');
    const constellation = document.getElementById('imagery')
    const submitbutton = document.getElementById('submitbutton')

    if (textbox.value === decrypt(rawpass, -4)) {
        submitbutton.remove()
        constellation.remove()
        textbox.remove()

        framework = document.createElement('p')
        const filePath = 'pages/home/heartbeatError1282932.txt';
        fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const formattedData = data.replace(/\n/g, '<br>');
            framework.innerHTML = formattedData;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.autoplay = false;
        const source = document.createElement('source');
        source.src = 'audios/signal_6EQUJ5.mp3';
        source.type = 'audio/mpeg';

        document.getElementById("FormContainer").appendChild(framework);

        audio.appendChild(source);
        document.getElementById("FormContainer").appendChild(audio);

        return console.log('true');
    } else {
        textbox.style.backgroundColor = 'red';
        setTimeout(function(){
            textbox.style.backgroundColor = '#000000'
        }, 100);
        return console.log('false');
    }
}