document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var status = document.getElementById('status');
    status.innerHTML = "Sending...";

    // Validate email format
    if (!validateEmail(email)) {
        status.innerHTML = "Invalid email format. Please enter a valid email.";
        return;
    }

    emailjs.send("service_aoibgsu", "template_vysyop9", {
        email: email,
        message: `Request to delete account for email: ${email}`
    }).then(function(response) {
        status.innerHTML = "Email request to delete account sent successfully! We will get back to you shortly.";
    }, function(error) {
        status.innerHTML = "Failed to send email. Error: " + JSON.stringify(error);
    });
});

// Initialize EmailJS with your user ID
(function() {
    emailjs.init("BUhos0q7vaBATAdMf");
})();

// Email validation function
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
