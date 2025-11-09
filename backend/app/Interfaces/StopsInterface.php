<?php

namespace App\Interfaces;

interface StopsInterface
{
    public function getAll(): array;

    public function getById(string $stop): array;
}
