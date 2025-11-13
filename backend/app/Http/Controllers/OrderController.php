<?php

namespace App\Http\Controllers;

use App\Services\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __construct(private OrderService $orderService)
    {

    }


    public function index(Request $request): JsonResponse
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $travelDate = $request->input('travelDate');

        $data = [];
        if ($from && $to && $travelDate) {
            $data = $this->orderService->search($request, $from, $to, $travelDate);
        }

        return response()->json($data['data'], $data['status']);
    }
}
