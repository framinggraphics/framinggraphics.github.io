function randomtext() {
    var randomtxt=[
        'Annie makes the unreal seem hyperreal, and the real more supremely alive and utterly magical.<br>&nbsp;<br>Jeff Goldblum about Annie Atkins',
        'Nostro compito è quello di accompagnare l’immersione dello spettatore, descrivere il personaggio anche in base ai quadri da lui appesi nella sua stanza, o a cosa ha poggiato sul tavolo.<br>&nbsp;<br>Marco De Matteo',
        'We make street signs and maps that let you know where you are going.<br>&nbsp;<br>Karen TenEyck', ];
    return randomtxt[Math.floor((Math.random() * 2.99))];
}

document.getElementById("randomsentence").innerHTML = randomtext();