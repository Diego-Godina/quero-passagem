<?php

namespace App\Repositories;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\CompaniesInterface;
use GuzzleHttp\Client;

class ApiCompaniesRepository implements CompaniesInterface
{
    use HandleExternalRequests;

    public function __construct(private Client $client)
    {

    }

    public function getAll(): array
    {
        return $this->request($this->client, 'GET', 'companies');
    }

    public function getById(int $company): array
    {
        return $this->request($this->client, 'GET', "companies/{$company}");
    }
}