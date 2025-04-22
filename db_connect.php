<?php
// Configuration
$allowed_emails = array('user@example.com', 'admin@example.com'); // allowed email addresses
$allowed_passwords = array('user' => 'password123', 'admin' => 'password456'); // email => password pairs

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Validate email and password
if (isset($email) && isset($password)) {
    if (in_array($email, $allowed_emails) && $allowed_passwords[$email] === $password) {
        // Login successful, redirect to dashboard or desired page
        header('Location: dashboard.php');
        exit;
    } else {
        // Login failed, display error message
        $error_message = 'Invalid email or password. Please try again.';
    }
}

// Display error message if login failed
if (isset($error_message)) {
    echo '<p style="color: red;">' . $error_message . '</p>';
}
?>