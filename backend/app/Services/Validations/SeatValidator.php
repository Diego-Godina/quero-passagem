<?php

namespace App\Services\Validations;

use App\Enums\SeatsLayout;
use App\Enums\SeatsOrientation;
use App\Enums\SeatType;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\ValidationException;

class SeatValidator
{
    /**
     * @throws ValidationException
     */
    public static function validateSeats($data): void
    {
        $validator = Validator::make($data, [
            'orientation' => ['required', new Enum(SeatsOrientation::class)],
            'floor' => ['required', 'integer'],
            'seatsLayout' => ['required', new Enum(SeatsLayout::class)],
            'seats' => ['required', 'array'],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        foreach ($data['seats'] as $groupSeats) {
            foreach ($groupSeats as $seat) {
                if (!empty($seat)) {
                    SeatValidator::validateSeat($seat);
                }
            }
        }
    }

    /**
     * @throws ValidationException
     */
    public static function validateSeat($data): void
    {
        $validator = Validator::make($data, [
            'position' => ['required', 'array'],
            'position.x' => ['required', 'integer'],
            'position.y' => ['required', 'integer'],
            'position.z' => ['required', 'integer'],
            'occupied' => ['boolean'],
            'type' => ['required', new Enum(SeatType::class)],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}