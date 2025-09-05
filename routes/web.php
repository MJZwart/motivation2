<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\VillageController;
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
        Route::get('/completed', [TaskController::class, 'getCompletedTasks']);
    });

    Route::prefix('village')->group(function() {
        Route::get('/', [VillageController::class, 'index']);
    });
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');