
window.alert('se você for maluco, clique em ok')
window.confirm('tem certeza? se sim, clique ok NOVAMENTE ')
window.prompt('digite: pedro é gay')

document.getElementById("playButton").addEventListener("click", bt);

function bt() {
    window.location.href = "https://discord.gg/fCWK2mrNS";
}

document.getElementById("playButton").addEventListener("click", Qb);

function Qb() {
    window.location.href = "https://brunoplasser.github.io/quiz-the-road/";
}

document.getElementById("playButton").addEventListener("click", Qb);

function wb() {
    window.location.href = "https://brunoplasser.github.io/wiki_TR/";
}

document.getElementById("WikiButton").addEventListener("click", wb);

function erro() {
    var mensagem = window.prompt('digite: pedro é gay')
    if (mensagem === "pedro é gay") {
        alert('pode entrar!')
    }
    else {
        alert('errado, ele é sim.');
        window.location.href = "https://brunoplasser.github.io/paginaerro/";
    }
}


