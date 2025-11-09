<?php

namespace App\Http\Controllers;

use App\Services\SeatsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class SeatsController extends Controller
{
    public function __construct(private SeatsService $seatsService)
    {

    }

    public function index(Request $request): JsonResponse
    {
        $travelId = $request->route('order');

        if (!$travelId) {
            return response()->json([], ResponseAlias::HTTP_BAD_REQUEST);
        }

        $data = $this->seatsService->getByTravelId($request, $travelId);

        return response()->json($data['data'], $data['status']);
    }
}
