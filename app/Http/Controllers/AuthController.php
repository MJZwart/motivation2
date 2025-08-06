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

        User::create($validated);
        
        if (Auth::attempt(['username' => $validated['username'], 'password' => $validated['password']])) {
            $request->session()->regenerate();

            $user = Auth::user();

            return $user;
        }
        // TODO Response message, if this happens something went wrong in creating or authenticating newly created user
        return new JsonResponse(null, 418);
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

    public function me(Request $request) {
        if (Auth::check()) {
            $request->session()->regenerate();

            return Auth::user();            
        }
        return new JsonResponse(null, 401);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return;
    }
}
