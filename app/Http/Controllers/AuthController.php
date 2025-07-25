<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;

final class AuthController
{
    public function register(RegisterUserRequest $request) {
        $validated = $request->validated();
        $user = User::create($validated);
        return $user;
    }

    public function login() {
        dd();
    }
}
