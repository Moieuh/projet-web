let undernourished = localStorage.getItem('undernourished') ? parseInt(localStorage.getItem('undernourished')) : 820123581;
let lastUpdateTime = localStorage.getItem('lastUpdateTime') ? parseInt(localStorage.getItem('lastUpdateTime')) : Date.now();
let lastDisplayedStat = undernourished;

function updateStat() {
    const currentTime = new Date();
    const currentTimestamp = currentTime.getTime();
    const timeDiffInSeconds = Math.floor((currentTimestamp - lastUpdateTime) / 1000);

    if (timeDiffInSeconds >= 5) {
        const randomIncrease = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        let increase = randomIncrease + Math.floor(timeDiffInSeconds / 10);
        undernourished += increase;
        localStorage.setItem('undernourished', undernourished);
        localStorage.setItem('lastUpdateTime', currentTimestamp);

        if (undernourished !== lastDisplayedStat) {
            lastDisplayedStat = undernourished;
            displayStat(undernourished);
        }
    }
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function displayStat(number) {
    const counterElement = document.getElementById("counter");
    const formattedNumber = formatNumber(number);
    const digits = formattedNumber.split('');
    const lastDigits = formatNumber(lastDisplayedStat).split('');
    counterElement.innerHTML = '';

    digits.forEach((digit, index) => {
        const digitDiv = document.createElement("div");
        digitDiv.classList.add('digit');

        if (digit !== lastDigits[index]) {
            digitDiv.innerHTML = `<span class="rolling">${digit}</span>`;
        } else {
            digitDiv.innerHTML = `<span>${digit}</span>`;
        }

        counterElement.appendChild(digitDiv);
    });
}

setInterval(updateStat, 1000);
updateStat();


// Dark mode toggle
const modeSwitch = document.getElementById('mode');
modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('Nom').value;
    const prenom = document.getElementById('Prénom').value;
    const email = document.getElementById('Mail').value;
    const statut = document.getElementById('statut').value;
    const demande = document.getElementById('demande').value;

    if (nom && prenom && email && statut && demande) {
        alert(`Merci ${prenom} ${nom} !\nVotre demande a été envoyée avec succès.\n\nDétails de la demande:\nEmail: ${email}\nStatut: ${statut}\nDemande: ${demande}`);
    } else {
        alert('Veuillez remplir tous les champs avant de soumettre.');
    }
});





