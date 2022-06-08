<?php

namespace App\Actions;

use App\Models\Field;
use Illuminate\Support\Str;

class FieldCreateAction
{
    public function __invoke(array $attributes)
    {
        return Field::create([
            'title' => $attributes['title'],
            'type'  => $attributes['type'],
        ]);
    }
}
