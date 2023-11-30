document.addEventListener("DOMContentLoaded", function () {
    // Fetch visit count from AWS Lambda function
    fetch('https://vsah4cukokahwf7rvsxkto3y2q0jgejn.lambda-url.us-east-1.amazonaws.com')
        .then(response => response.json())
        .then(data => {
            // Update the visit count on the webpage
            document.getElementById('visitCount').textContent = `Views: ${data.views}`;
        })
        .catch(error => {
            console.error('Error fetching visit count:', error);
            document.getElementById('visitCount').textContent = 'Error fetching visit count';
        });
});
