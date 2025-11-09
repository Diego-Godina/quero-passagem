<?php

namespace App\Repositories;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\StopsInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ApiStopsRepository implements StopsInterface
{
    use HandleExternalRequests;

    public function __construct(private Client $client)
    {

    }

    /**
     * @throws GuzzleException
     */
    public function getAll(): array
    {
        return $this->request($this->client, 'GET', 'stops');
    }

    /**
     * @throws GuzzleException
     */
    public function getById(string $stop): array
    {
        return $this->request($this->client, 'GET', "stops/{$stop}");
    }
}