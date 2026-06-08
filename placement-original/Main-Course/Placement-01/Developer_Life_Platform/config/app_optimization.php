<?php

return [
    // Performance Settings
    'cache_ttl' => env('CACHE_TTL', 3600),
    'max_query_limit' => env('MAX_QUERY_LIMIT', 100),
    'pagination_limit' => env('PAGINATION_LIMIT', 20),
    
    // AI Teacher Settings
    'ai_teacher' => [
        'api_key' => env('HUGGING_FACE_API_KEY'),
        'max_recommendations' => env('AI_MAX_RECOMMENDATIONS', 5),
        'relevance_threshold' => env('AI_RELEVANCE_THRESHOLD', 0.6),
        'cache_ttl' => env('AI_CACHE_TTL', 3600),
    ],
    
    // Security Settings
    'rate_limit' => [
        'api_requests' => env('API_RATE_LIMIT', 60),
        'chat_messages' => env('CHAT_RATE_LIMIT', 30),
    ],
];