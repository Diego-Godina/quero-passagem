<?php

namespace App\Services;

use App\Enums\SeatsOrientation;
use App\Interfaces\SeatsInterface;
use App\Services\Validations\SeatValidator;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SeatsService
{
    public function __construct(private SeatsInterface $seatsRepository)
    {

    }

    /**
     * @throws ValidationException
     */
    public function getByTravelId(Request $request, string $travelId): array
    {
        $orientation = SeatsOrientation::from($request->input('orientation', 'horizontal'));
        $type = $request->input('type', 'matrix');

        $data = $this->seatsRepository->getByTravelId($travelId, $orientation, $type);

        foreach ($data['data'] as $seat) {
            SeatValidator::validateSeats($seat);
        }

        return $data;
    }
}