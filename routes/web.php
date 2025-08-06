<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'me']);

Route::middleware(['auth'])->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/', function () {
    return view('welcome');
});