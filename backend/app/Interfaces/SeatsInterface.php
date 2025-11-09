<?php

namespace App\Interfaces;

use App\Enums\SeatsOrientation;

interface SeatsInterface
{
    public function getByTravelId(string $travelId, SeatsOrientation $orientation, string $type): array;
}