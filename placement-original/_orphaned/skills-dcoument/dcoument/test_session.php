<?php

require_once __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Session;

// Set session variables to simulate OTP verification
Session::put('password_reset_email', 'raushan919962@gmail.com');
Session::put('password_reset_token', bin2hex(random_bytes(32)));

echo "Session variables set for password reset testing:\n";
echo "Email: " . Session::get('password_reset_email') . "\n";
echo "Token: " . Session::get('password_reset_token') . "\n";
echo "\nNow you can access: http://localhost/aito_test/password/reset\n";

?>