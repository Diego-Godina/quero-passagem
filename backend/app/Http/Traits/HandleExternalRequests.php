<?php

namespace App\Http\Traits;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;

trait HandleExternalRequests
{
    public function apiClient(): Client
    {
        return new Client([
            'base_uri' => env('API_URL'),
            'auth' => [env('API_USER'), env('API_PASSWORD')]
        ]);
    }

    /**
     * @throws GuzzleException
     */
    public function request(Client $client, string $method, string $uri, array $options = []): array
    {
        try {
            $response = $client->request($method, $uri, $options);
            $body = $response->getBody()->getContents();
            $data = json_decode($body, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                Log::error('Erro ao decodificar JSON: ' . json_last_error_msg());
                return ['data' => [], 'status' => 502];
            }

            return ['data' => $data ?: [], 'status' => $response->getStatusCode()];

        } catch (ConnectException $e) {
            Log::error("Falha de conexão ({$uri}): " . $e->getMessage());
            return ['data' => [], 'status' => 503];

        } catch (RequestException $e) {
            $status = $e->hasResponse() ? $e->getResponse()->getStatusCode() : 502;
            Log::error("Erro HTTP ({$uri}) status {$status}: " . $e->getMessage());
            return ['data' => [], 'status' => $status];

        } catch (Exception $e) {
            Log::error("Erro inesperado ({$uri}): " . $e->getMessage());
            return ['data' => [], 'status' => 500];
        }
    }
}
