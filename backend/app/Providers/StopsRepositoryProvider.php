<?php

namespace App\Providers;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\StopsInterface;
use App\Repositories\ApiStopsRepository;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class StopsRepositoryProvider extends ServiceProvider
{
    use HandleExternalRequests;

    public function register(): void
    {
        $this->app->bind(Client::class, function () {
            return $this->apiClient();
        });

        $this->app->bind(StopsInterface::class, ApiStopsRepository::class);
    }
}