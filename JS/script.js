//Change phrase code
let phrase = document.getElementById('phrase')

function choicePhrase() {
    phrase.innerHTML = data[Math.floor(Math.random() * 127)].text
}


//Open/close help card code
//help.addEventListener('click', () => {})
let flag = true

function openHelp() {
    const help = document.getElementById('help')
    if (flag) {
        help.classList.add('appear')
        flag = false
    } else {
        help.classList.add('disappear')
        setTimeout('disappear(help)', 550)
        flag = true
    }
}

const disappear = (help) => {
    help.classList.remove('appear')
    help.classList.remove('disappear')
}