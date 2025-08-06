<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

final class AuthController
{
    public function register(RegisterUserRequest $request) {
        $validated = $request->validated();

        User::create($validated);
        
        if (Auth::attempt(['username' => $validated['username'], 'password' => $validated['password']])) {
            $request->session()->regenerate();

            $user = Auth::user();

            return new UserResource($user);
        }
        // If this happens something went wrong in creating or authenticating newly created user
        throw new CustomException('Something went wrong with registering');
    }

    public function login(LoginRequest $request) {
        $validated = $request->validated();
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();

            $user = Auth::user();

            return new UserResource($user);
        }
        throw new CustomException('Username or password incorrect', Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function me(Request $request) {
        if (Auth::check()) {
            $request->session()->regenerate();

            $user = Auth::user();
            
            return new UserResource($user);
        }
        throw new CustomException('Not logged in', Response::HTTP_UNAUTHORIZED);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return;
    }
}
