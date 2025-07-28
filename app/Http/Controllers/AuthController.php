<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class AuthController
{
    public function register(RegisterUserRequest $request) {
        $validated = $request->validated();
        $user = User::create($validated);
        return $user;
    }

    public function login(LoginRequest $request) {
        $validated = $request->validated();
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();

            $user = Auth::user();

            // TODO Create user resource
            return $user;
        }
        // TODO Response message
        return new JsonResponse(null, 422);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return;
    }
}
