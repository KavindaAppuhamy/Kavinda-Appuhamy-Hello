<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient's email address where you want to receive the form submissions
    $recipient_email = 'kavinda.appuhamy@gmail.com'; // Replace with your email address

    // Compose the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message";

    // Send the email
    if (mail($recipient_email, "Contact Form Submission", $email_message, $headers)) {
        // Email sent successfully
        echo "Email sent successfully!";
    } else {
        // Email sending failed
        echo "Email sending failed.";
    }
}
?>