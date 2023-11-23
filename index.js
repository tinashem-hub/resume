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
                console.log('Data from Lambda:', data);
    
                // Check if 'views' property exists in the response
                if ('views' in data) {
                    views = data.views;
                } else {
                    console.error('Error: "views" property not found in Lambda response');
                }
    
                updateCounter();
            })
            .catch(error => console.error('Error fetching counter:', error));
    }
    
});
