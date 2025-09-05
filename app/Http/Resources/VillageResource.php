<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VillageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'villagers' => $this->villagers,
            'progress' => $this->progress,
            
            'coins' => $this->coins,
            'food' => $this->food,
            'material' => $this->material,
            
            'happiness' => $this->happiness,
            'farmer' => $this->farmer,
            'labourer' => $this->labourer,
            'toolsmith' => $this->toolsmith,
            'artist' => $this->artist,
            'researcher' => $this->researcher,
            'merchant' => $this->merchant,
        ];
    }
}
