<?php

namespace App\Providers;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\OrderInterface;
use App\Repositories\ApiOrderRepository;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class OrderRepositoryProvider extends ServiceProvider
{
    use HandleExternalRequests;

    public function register(): void
    {
        $this->app->bind(Client::class, function () {
            return $this->apiClient();
        });

        $this->app->bind(OrderInterface::class, ApiOrderRepository::class);
    }
}
