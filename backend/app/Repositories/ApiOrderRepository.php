<?php

namespace App\Repositories;

use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\OrderInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ApiOrderRepository implements OrderInterface
{
    use HandleExternalRequests;

    public function __construct(private Client $client)
    {

    }

    /**
     * @throws GuzzleException
     */
    public function search(string $from, string $to, string $travelDate, bool $connection = false): array
    {
        $options = [
            'json' => [
                'from' => $from,
                'to' => $to,
                'travelDate' => $travelDate,
                'affiliateCode' => env('API_AFFILIATE_CODE'),
                'include-connections' => $connection
            ]
        ];

        return $this->request($this->client, 'POST', 'new/search', $options);
    }
}