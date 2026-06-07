<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\State;
use App\Models\District;
use App\Models\Block;
use App\Models\Panchayat;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class LocationController extends Controller
{
    /**
     * Get all countries
     */
    public function getCountries(): JsonResponse
    {
        $countries = Country::active()->get();
        return response()->json($countries);
    }

    /**
     * Get states by country
     */
    public function getStates(int $countryId): JsonResponse
    {
        $states = State::active()
            ->where('country_id', $countryId)
            ->get();
        
        return response()->json($states);
    }

    /**
     * Get districts by state
     */
    public function getDistricts(int $stateId): JsonResponse
    {
        $districts = District::active()
            ->where('state_id', $stateId)
            ->get();
        
        return response()->json($districts);
    }

    /**
     * Get blocks by district
     */
    public function getBlocks(int $districtId): JsonResponse
    {
        $blocks = Block::active()
            ->where('district_id', $districtId)
            ->get();
        
        return response()->json($blocks);
    }

    /**
     * Get panchayats by block
     */
    public function getPanchayats(int $blockId): JsonResponse
    {
        $panchayats = Panchayat::active()
            ->where('block_id', $blockId)
            ->get();
        
        return response()->json($panchayats);
    }

    /**
     * Get complete hierarchy for India
     */
    public function getIndiaHierarchy(): JsonResponse
    {
        $india = Country::with([
            'states.districts.blocks.panchayats'
        ])
        ->where('code', '+91')
        ->first();

        return response()->json($india);
    }

    /**
     * Search location by name
     */
    public function searchLocation(Request $request): JsonResponse
    {
        $search = $request->input('search');
        
        $results = [
            'states' => State::where('name', 'like', "%{$search}%")->active()->get(),
            'districts' => District::where('name', 'like', "%{$search}%")->active()->get(),
            'blocks' => Block::where('name', 'like', "%{$search}%")->active()->get(),
            'panchayats' => Panchayat::where('name', 'like', "%{$search}%")->active()->get(),
        ];

        return response()->json($results);
    }

    /**
     * Get location details with full path
     */
    public function getLocationDetails(Request $request): JsonResponse
    {
        $type = $request->input('type'); // state, district, block, panchayat
        $id = $request->input('id');

        $data = match($type) {
            'state' => State::with('country')->find($id),
            'district' => District::with('state.country')->find($id),
            'block' => Block::with('district.state.country')->find($id),
            'panchayat' => Panchayat::with('block.district.state')->find($id),
            default => null
        };

        return response()->json($data);
    }

    /**
     * Get statistics
     */
    public function getStatistics(): JsonResponse
    {
        $stats = [
            'countries' => Country::active()->count(),
            'states' => State::active()->count(),
            'districts' => District::active()->count(),
            'blocks' => Block::active()->count(),
            'panchayats' => Panchayat::active()->count(),
        ];

        return response()->json($stats);
    }
}
