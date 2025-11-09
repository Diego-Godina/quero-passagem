<?php

namespace App\Enums;

enum SeatType: string
{
    case SEAT = 'seat';
    case EMPTY = 'emptyOrReservedSpace';
}
