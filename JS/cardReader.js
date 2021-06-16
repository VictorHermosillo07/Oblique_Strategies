let phrase = document.getElementById('phrase')

function choicePhrase() {
    phrase.innerHTML = data[Math.floor(Math.random() * 127)].text
}