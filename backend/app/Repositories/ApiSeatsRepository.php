<?php

namespace App\Repositories;

use App\Enums\SeatsOrientation;
use App\Http\Traits\HandleExternalRequests;
use App\Interfaces\SeatsInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ApiSeatsRepository implements SeatsInterface
{
    use HandleExternalRequests;

    public function __construct(private Client $client)
    {

    }

    /**
     * @throws GuzzleException
     */
    public function getByTravelId(string $travelId, SeatsOrientation $orientation, string $type): array
    {
        $options = [
            'json' => [
                'travelId' => $travelId,
                'orientation' => $orientation,
                'type' => $type
            ]
        ];

        return $this->request($this->client, 'POST', 'new/seats', $options);
    }
}