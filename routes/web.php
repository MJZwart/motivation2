<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'me']);

Route::middleware(['auth'])->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::prefix('task')->group(function() {
        Route::get('/', [TaskController::class, 'index']);
        Route::post('/', [TaskController::class, 'store']);
        Route::post('/complete/{task}', [TaskController::class, 'toggleCompleted']);
    });
});

Route::get('/', function () {
    return view('welcome');
});