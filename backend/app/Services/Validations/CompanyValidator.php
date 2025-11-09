<?php

namespace App\Services\Validations;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CompanyValidator
{
    /**
     * @throws ValidationException
     */
    public static function validateCompany(array $data): void
    {
        $validator = Validator::make($data, [
            'id' => ['required', 'int'],
            'name' => ['required', 'string'],
            'logo' => ['array'],
            'logo.svg' => ['string'],
            'logo.jpg' => ['string'],
            'phone' => ['nullable', 'string'],
            'cnpj' => ['nullable', 'string'],
            'description' => ['array'],
            'description.*' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}