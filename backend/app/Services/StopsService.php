<?php

namespace App\Services;

use App\Interfaces\StopsInterface;
use App\Services\Validations\StopValidator;
use Illuminate\Validation\ValidationException;

class StopsService
{

    public function __construct(private StopsInterface $stopsRepository)
    {
    }

    /**
     * @throws ValidationException
     */
    public function getAll(): array
    {
        $data = $this->stopsRepository->getAll();
        StopValidator::validateStopList($data['data']);

        return $data;
    }

    /**
     * @throws ValidationException
     */
    public function getById(string $stopId): array
    {
        $data = $this->stopsRepository->getById($stopId);
        StopValidator::validateStopDetails($data['data']);

        return $data;
    }
}
