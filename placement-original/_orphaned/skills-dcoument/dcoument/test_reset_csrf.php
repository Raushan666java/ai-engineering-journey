<?php

require_once __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

// Set session for testing
session(['password_reset_email' => 'test@example.com', 'password_reset_token' => bin2hex(random_bytes(32))]);

try {
    $view = view('auth.reset-password', [
        'email' => session('password_reset_email'),
        'token' => session('password_reset_token')
    ]);

    $rendered = $view->render();

    echo "✅ View rendered successfully!\n\n";

    // Check for CSRF token
    if (preg_match('/csrf-token.*content=[\'"]([^\'"]+)[\'"]/', $rendered, $matches)) {
        echo "✅ CSRF token found: " . substr($matches[1], 0, 20) . "...\n";
    } else {
        echo "❌ CSRF token NOT found or empty!\n";
    }

    // Check for email
    if (strpos($rendered, session('password_reset_email')) !== false) {
        echo "✅ Email found in view: " . session('password_reset_email') . "\n";
    } else {
        echo "❌ Email NOT found in view!\n";
    }

    // Check for @csrf directive
    if (preg_match('/<input[^>]*name=["\']_token["\'][^>]*value=["\']([^\'"]+)["\']/', $rendered, $matches)) {
        echo "✅ CSRF input field found with token: " . substr($matches[1], 0, 20) . "...\n";
    } else {
        echo "❌ CSRF input field NOT found!\n";
    }

    // Check for proper form structure
    if (strpos($rendered, 'name="email"') !== false && strpos($rendered, 'name="token"') !== false) {
        echo "✅ Form has email and token hidden fields\n";
    } else {
        echo "❌ Form missing required fields!\n";
    }

} catch (Exception $e) {
    echo "❌ Error rendering view: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " Line: " . $e->getLine() . "\n";
}

echo "\n✅ Test completed successfully!\n";
