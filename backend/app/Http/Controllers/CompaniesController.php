<?php

namespace App\Http\Controllers;

use App\Services\CompaniesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class CompaniesController extends Controller
{
    public function __construct(private CompaniesService $companies)
    {

    }

    /**
     * @throws ValidationException
     */
    public function index(): JsonResponse
    {
        $data = $this->companies->getAll();

        return response()->json($data['data'], $data['status']);
    }

    /**
     * @throws ValidationException
     */
    public function show(string $company): JsonResponse
    {
        $data = $this->companies->getById($company);

        return response()->json($data['data'], $data['status']);
    }
}
