<?php

namespace App\Providers;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\CompaniesInterface;
use App\Repositories\ApiCompaniesRepository;
use Carbon\Laravel\ServiceProvider;
use GuzzleHttp\Client;

class CompaniesRepositoryProvider extends ServiceProvider
{
    use HandleExternalRequests;

    public function register(): void
    {
        $this->app->bind(Client::class, function () {
            return $this->apiClient();
        });

        $this->app->bind(CompaniesInterface::class, ApiCOmpaniesRepository::class);
    }
}