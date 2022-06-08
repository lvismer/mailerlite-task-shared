<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubscriberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'     => (int) $this->id,
            'name'   => $this->name,
            'email'  => $this->email,
            'status' => $this->status,
            'fields' => FieldResource::collection($this->whenLoaded('fields')),
        ];
    }
}
