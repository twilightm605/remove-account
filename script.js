document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('message').value;

    var status = document.getElementById('status');
    status.innerHTML = "Sending...";

    emailjs.send("service_aoibgsu", "template_vysyop9", {
        name: message,
        email: message,
        message: message,
    }).then(function(response) {
        status.innerHTML = "Email request to delete account sent successfully!. We will get back to you shortly";
    }, function(error) {
        status.innerHTML = "Failed to send email. Error: " + JSON.stringify(error);
    });
});

// Initialize EmailJS with your user ID
(function() {
    emailjs.init("BUhos0q7vaBATAdMf");
})();

