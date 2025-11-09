<?php

namespace App\Http\Controllers;

use App\Services\StopsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class StopsController extends Controller
{

    public function __construct(private StopsService $stops)
    {
    }

    /**
     * @throws ValidationException
     */
    public function index(): JsonResponse
    {
       $data = $this->stops->getAll();

       return response()->json($data['data'], $data['status']);
    }

    /**
     * @throws ValidationException
     */
    public function show(string $stop): JsonResponse
    {
        $data = $this->stops->getById($stop);

        return response()->json($data['data'], $data['status']);
    }
}
