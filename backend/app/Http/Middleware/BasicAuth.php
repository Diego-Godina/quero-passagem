<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BasicAuth
{
    public function handle(Request $request, Closure $next): JsonResponse
    {
        $authorization = $request->header('Authorization');

        if (!$authorization || !str_starts_with($authorization, 'Basic ')) {
            return response()->json($this->unauthorizedResponse());
        }

        $credentialsBase64 = substr($authorization, 6);
        $decoded = base64_decode($credentialsBase64);

        if ($decoded === false || !str_contains($decoded, ':')) {
            return response()->json($this->unauthorizedResponse());
        }

        [$user, $pass] = explode(':', $decoded, 2);

        $envUser = env('BASIC_AUTH_USER');
        $envPass = env('BASIC_AUTH_PASSWORD');

        if (!hash_equals((string) $envUser, (string) $user) || !hash_equals((string) $envPass, (string) $pass)) {
            return response()->json($this->unauthorizedResponse());
        }

        return $next($request);
    }

    protected function unauthorizedResponse(): Response
    {
        return response('Unauthorized', 401)
            ->header('WWW-Authenticate', 'Basic realm="Restricted Area"');
    }
}
