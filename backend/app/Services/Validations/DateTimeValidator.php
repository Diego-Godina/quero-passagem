<?php

namespace App\Services\Validations;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class DateTimeValidator
{
    /**
     * @throws ValidationException
     */
    public static function validateDateTime(array $data): void
    {
        $validator = Validator::make($data, [
            'date' => ['required', 'date_format:Y-m-d'],
            'time' => ['required', 'date_format:H:i:s'],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}