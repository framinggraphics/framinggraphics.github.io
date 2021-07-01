function randomtext() {
    var randomtxt=[
        'Annie makes the unreal seem hyperreal, and the real more supremely alive and utterly magical.<br>&nbsp;<br>Jeff Goldblum about Annie Atkins',
        'Cit<br>&nbsp;<br>Marco De Matteo',
        'Cit<br>&nbsp;<br>Karen TenEyck', ];
    return randomtxt[Math.floor((Math.random() * 2.99))];
}

document.getElementById("randomsentence").innerHTML = randomtext();