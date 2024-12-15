// Initial statistic (e.g., 800 million people)
let undernourished = localStorage.getItem('undernourished') ? parseInt(localStorage.getItem('undernourished')) : 800000000;
let lastUpdateTime = localStorage.getItem('lastUpdateTime') ? parseInt(localStorage.getItem('lastUpdateTime')) : Date.now();

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
        const randomIncrease = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
        
        // Simulate increase based on time
        let increase = randomIncrease + Math.floor(timeDiffInSeconds / 10);  // Small increase based on time passed

        // Update the statistic
        undernourished += increase;

        // Store the updated value in LocalStorage
        localStorage.setItem('undernourished', undernourished);
        localStorage.setItem('lastUpdateTime', currentTimestamp);

        // Update the displayed statistic in the HTML
        document.getElementById("stat").textContent = `Number of undernourished people: ${undernourished.toLocaleString()}`;
    }
}

// Update the statistic every 1 second to check if it's time to update (but only update if necessary)
setInterval(updateStat, 1000);

// Initial update when the page loads
updateStat();

const modeSwitch = document.getElementById('mode');

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
