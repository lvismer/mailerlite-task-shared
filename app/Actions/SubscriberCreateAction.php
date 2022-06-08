<?php

namespace App\Actions;

use App\Models\Subscriber;

class SubscriberCreateAction
{
    public function __invoke(array $attributes)
    {
        return Subscriber::create([
            'name'   => $attributes['name'],
            'email'  => $attributes['email'],
            'status' => $attributes['status'],
        ]);
    }
}
