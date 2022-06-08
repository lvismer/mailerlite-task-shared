<?php

namespace App\Actions;

use App\Models\Subscriber;

class SubscriberUpdateAction
{
    public function __invoke(Subscriber $subscriber, array $attributes)
    {
        $subscriber->update([
            'name'   => $attributes['name'],
            'email'  => $attributes['email'],
            'status' => $attributes['status'],
        ]);

        if (isset($attributes['fields'])) {
            $subscriber->fields()->detach();

            foreach ($attributes['fields'] as $field) {
                $subscriber->fields()->attach($field['id'], ['value' => $field['value']]);
            }
        }
    }
}
