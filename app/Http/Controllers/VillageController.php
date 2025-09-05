<?php

namespace App\Http\Controllers;

use App\Http\Resources\VillageResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VillageController extends Controller
{
    public function index()
    {
        /** @var User */
        $user = Auth::user();
        
        return new VillageResource($user->village);
    }
}
