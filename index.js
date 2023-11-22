// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Assume you have a variable 'views' with the initial count value
    // For testing purposes, let's initialize it with 0
    let views = 0;

    // Function to update the counter on the website
    function updateCounter() {
        document.getElementById('counter').innerText = views;
    }

    // Function to fetch the count from the Lambda function
    function fetchCounter() {
        fetch('https://vsah4cukokahwf7rvsxkto3y2q0jgejn.lambda-url.us-east-1.amazonaws.com')
            .then(response => response.json())
            .then(data => {
                views = data.views;
                updateCounter();
            })
            .catch(error => console.error('Error fetching counter:', error));
    }

    // Initial fetch
    fetchCounter();

    // Optionally, you can set up an interval to periodically update the counter
    // For example, every 10 seconds
    setInterval(fetchCounter, 10000);
});
