<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SimpleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test basic application functionality
     */
    public function test_application_returns_successful_response()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /**
     * Test DSA platform route exists
     */
    public function test_dsa_route_exists()
    {
        $response = $this->get('/dsa');
        // Should return 200 or redirect, not 404
        $this->assertNotEquals(404, $response->getStatusCode());
    }

    /**
     * Test Learning platform route exists
     */
    public function test_learning_route_exists()
    {
        $response = $this->get('/learning');
        // Should return 200 or redirect, not 404
        $this->assertNotEquals(404, $response->getStatusCode());
    }

    /**
     * Test Monitask platform route exists
     */
    public function test_monitask_route_exists()
    {
        $response = $this->get('/monitask');
        // Should return 200 or redirect, not 404
        $this->assertNotEquals(404, $response->getStatusCode());
    }
}
