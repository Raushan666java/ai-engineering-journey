<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;

class CacheService
{
    private const DEFAULT_TTL = 3600;
    
    public static function remember(string $key, callable $callback, int $ttl = self::DEFAULT_TTL)
    {
        return Cache::remember($key, $ttl, $callback);
    }
    
    public static function forget(string $key): bool
    {
        return Cache::forget($key);
    }
    
    public static function flush(): bool
    {
        return Cache::flush();
    }
    
    public static function userKey(int $userId, string $type): string
    {
        return "user_{$userId}_{$type}";
    }
    
    public static function courseKey(int $courseId, string $type): string
    {
        return "course_{$courseId}_{$type}";
    }
}