<?php

namespace App\Services\Validations;

use App\Enums\SeatsLayout;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\ValidationException;

class OrderValidator
{
    /**
     * Obs: Connection was not considered
     *
     * @throws ValidationException
     */
    public static function validateOrder(array $data): void
    {
        $validator = Validator::make($data, [
            'id' => ['required', 'string'],
            'availableSeats' => ['required', 'int'],
            'seatsLayout' => ['required', new Enum(SeatsLayout::class)],
            'withBPE' => ['required', 'boolean'],
            'travelDuration' => ['required', 'int'],
            'travelDistance' => ['required', 'string'],
            'seatClass' => ['required', 'string'],
            'insurance' => ['required', 'numeric'],
            'allowCanceling' => ['required', 'boolean'],
            'travelCancellationLimitDate' => ['required', 'string'],
            'travelCancellationFee' => ['required', 'int'],
            'manualConfirmation' => ['required', 'boolean'],
            'CPFRequired' => ['required', 'boolean'],
            'loungeVipAvailable' => ['required', 'boolean'],
        ]);

        CompanyValidator::validateCompany($data['company']);
        StopValidator::validateStopDetailsSimple($data['from']);
        StopValidator::validateStopDetailsSimple($data['to']);
        DateTimeValidator::validateDateTime($data['departure']);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}