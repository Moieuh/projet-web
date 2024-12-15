// Initial statistic (e.g., 800 million people)
let undernourished = localStorage.getItem('undernourished') ? parseInt(localStorage.getItem('undernourished')) : 820123581;
let lastUpdateTime = localStorage.getItem('lastUpdateTime') ? parseInt(localStorage.getItem('lastUpdateTime')) : Date.now();
let lastDisplayedStat = undernourished;

// Function to simulate random increase
function updateStat() {
    // Get the current time
    const currentTime = new Date();
    const currentTimestamp = currentTime.getTime();

    // Calculate the time difference since the last update (in seconds)
    const timeDiffInSeconds = Math.floor((currentTimestamp - lastUpdateTime) / 1000);

    // If more than 5 seconds have passed, we simulate an increase
    if (timeDiffInSeconds >= 5) {
        // Generate a number based on the time (just an example of using time to affect the number)
        const randomIncrease = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        // Simulate increase based on time
        let increase = randomIncrease + Math.floor(timeDiffInSeconds / 10);  // Small increase based on time passed

        // Update the statistic
        undernourished += increase;

        // Store the updated value in LocalStorage
        localStorage.setItem('undernourished', undernourished);
        localStorage.setItem('lastUpdateTime', currentTimestamp);

        // Only update the displayed stat if it's changed
        if (undernourished !== lastDisplayedStat) {
            lastDisplayedStat = undernourished;
            displayStat(undernourished);
        }
    }
}

// Function to display the number with "rolling" digits effect
function displayStat(number) {
    const counterElement = document.getElementById("counter");

    // Convert the number to a string and create a digit container for each digit
    const digits = number.toString().split('');
    const lastDigits = lastDisplayedStat.toString().split('');

    counterElement.innerHTML = ''; // Clear the counter

    // Loop through each digit to display them
    digits.forEach((digit, index) => {
        const digitDiv = document.createElement("div");
        digitDiv.classList.add('digit');

        // Only apply the rolling effect to changed digits
        if (digit !== lastDigits[index]) {
            // If the digit has changed, add the rolling animation
            digitDiv.innerHTML = `<span class="rolling">${digit}</span>`;
        } else {
            // If the digit hasn't changed, display it normally
            digitDiv.innerHTML = `<span>${digit}</span>`;
        }

        counterElement.appendChild(digitDiv);
    });
}

// Update the statistic every 1 second to check if it's time to update (but only update if necessary)
setInterval(updateStat, 1000);

// Initial update when the page loads
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