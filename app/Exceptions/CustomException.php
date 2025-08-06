<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomException extends Exception
{
    public int $responseCode;

    public function __construct(string $message, int $responseCode = Response::HTTP_INTERNAL_SERVER_ERROR) {
        $this->responseCode = $responseCode;
        $this->message = $message;
    }

    /**
     * Render the exception as an HTTP response.
     */
    public function render(): JsonResponse
    {
        return new JsonResponse(['message' => $this->message], $this->responseCode);
    }
}
