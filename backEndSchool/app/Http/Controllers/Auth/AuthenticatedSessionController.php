<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $guards = array_keys(config('auth.guards'));
        $user = null;
        foreach ($guards as $guard) {
            $currentGuard = Auth::guard($guard);
            if ($currentGuard->check()) {
                $user = $currentGuard->user();
                break;
                }
                }

        $request->session()->regenerate();
        return response()->json([
            'message' => 'Login Successful',
            'user' => $user,
            'token' => $user->createToken('api',[$user->getRoleAttribute()])->plainTextToken
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();
        $guards = array_keys(config('auth.guards'));
        $user = null;
        foreach ($guards as $guard) {
            $currentGuard = Auth::guard($guard);
            if ($currentGuard->check()) {
                $user = $currentGuard->user();
                break;
                }
                }
        $user->tokens()->delete();
        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}