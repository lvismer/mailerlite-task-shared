<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldResource extends JsonResource
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
            'id'    => (int) $this->id,
            'title' => $this->title,
            'type'  => $this->type,
            'value' => $this->whenPivotLoaded('field_subscriber', function () {
                return $this->castValueType($this->type, $this->pivot->value);
            }),
        ];
    }

    protected function castValueType(string $type, mixed $value)
    {
        switch ($type) {
            case 'boolean':
                return (bool) $value;
            case 'number':
                return (int) $value;
            default:
                return (string) $value;
        }
    }
}
