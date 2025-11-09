<?php

namespace App\Services\Validations;

use App\Enums\StopType;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\ValidationException;

class StopValidator
{
    /**
     * @throws ValidationException
     */
    public static function validateStopList(array $stops): void
    {
        foreach ($stops as $group) {
            $validator = Validator::make($group, [
                'id' => ['required', 'string'],
                'name' => ['required', 'string'],
                'url' => ['required', 'string'],
                'type' => ['required', 'string'],
                'substops' => ['array'],
            ]);

            if ($validator->fails()) {
                throw new ValidationException($validator);
            }

            foreach ($group as $stop) {
                if (!empty($stop['substops'])) {
                    StopValidator::validateStopDetails($stop['substops']);
                }
            }
        }
    }

    /**
     * @throws ValidationException
     */
    public static function validateStopDetails($stop): void
    {
        $validator = Validator::make($stop, [
            'id' => ['required', 'string'],
            'name' => ['nullable', 'string'],
            'displayName' => ['required', 'string'],
            'state' => ['required', 'string'],
            'country' => ['string'],
            'url' => ['required', 'string'],
            'latitude' => ['required', 'string'],
            'longitude' => ['required', 'string'],
            'address' => ['string'],
            'zipcode' => ['string'],
            'type' => ['required', new Enum(StopType::class)],
            'images' => ['nullable', 'array'],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }

    /**
     * @throws ValidationException
     */
    public static function validateStopDetailsSimple($stop): void
    {
        $validator = Validator::make($stop, [
            'id' => ['required', 'string'],
            'name' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}