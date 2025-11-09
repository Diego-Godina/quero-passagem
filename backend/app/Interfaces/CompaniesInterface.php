<?php

namespace App\Interfaces;

interface CompaniesInterface
{
    public function getAll(): array;

    public function getById(int $company): array;
}