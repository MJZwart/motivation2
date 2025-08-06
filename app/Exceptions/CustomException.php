<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomException extends Exception
{
    protected int $responseCode = Response::HTTP_INTERNAL_SERVER_ERROR;

    /**
     * Render the exception as an HTTP response.
     */
    public function render(): JsonResponse
    {
        return new JsonResponse(['message' => $this->message], $this->responseCode);
    }

    public function getResponseCode(): int
    {
        return $this->responseCode;
    }
}
