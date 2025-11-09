<?php

namespace App\Interfaces;

interface OrderInterface
{
    public function search(string $from, string $to, string $travelDate, bool $connection = false): array;
}