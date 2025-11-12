<?php

namespace App\Services;

use App\Interfaces\OrderInterface;
use App\Services\Validations\OrderValidator;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class OrderService
{
    public function __construct(private OrderInterface $orderRepository)
    {

    }

    public function search(Request $request, string $from, string $to, string $travelDate): array
    {
        $connection = $request->input('include-connections', false);

        return $this->orderRepository->search($from, $to, $travelDate, $connection);
    }
}