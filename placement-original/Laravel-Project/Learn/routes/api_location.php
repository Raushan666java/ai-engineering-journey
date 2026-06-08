<?php

use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Location API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('locations')->group(function () {
    // Get hierarchical data
    Route::get('/countries', [LocationController::class, 'getCountries']);
    Route::get('/states/{countryId}', [LocationController::class, 'getStates']);
    Route::get('/districts/{stateId}', [LocationController::class, 'getDistricts']);
    Route::get('/blocks/{districtId}', [LocationController::class, 'getBlocks']);
    Route::get('/panchayats/{blockId}', [LocationController::class, 'getPanchayats']);
    
    // Complete hierarchy
    Route::get('/india/hierarchy', [LocationController::class, 'getIndiaHierarchy']);
    
    // Search and details
    Route::get('/search', [LocationController::class, 'searchLocation']);
    Route::get('/details', [LocationController::class, 'getLocationDetails']);
    
    // Statistics
    Route::get('/statistics', [LocationController::class, 'getStatistics']);
});
