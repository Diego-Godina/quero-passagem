<?php

use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SeatsController;
use App\Http\Controllers\StopsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('basic.env')->group(function () {
Route::get('/stops', [StopsController::class, 'index']);
Route::get('/stops/{stop}', [StopsController::class, 'show']);

Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/{order}/seats', [SeatsController::class, 'index']);

Route::get('/companies', [CompaniesController::class, 'index']);
Route::get('/companies/{company}', [CompaniesController::class, 'show']);
// });
