<?php

namespace App\Services;

use App\Interfaces\CompaniesInterface;
use App\Services\Validations\CompanyValidator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CompaniesService
{
    public function __construct(private CompaniesInterface $companiesRepository)
    {

    }

    /**
     * @throws ValidationException
     */
    public function getAll(): array
    {
        $data = $this->companiesRepository->getAll();

        foreach ($data['data'] as $company) {
            CompanyValidator::validateCompany($company);
        }

        return $data;
    }

    /**
     * @throws ValidationException
     */
    public function getById(int $id): array
    {
        $data = $this->companiesRepository->getById($id);
        CompanyValidator::validateCompany($data['data']);

        return $data;
    }
}