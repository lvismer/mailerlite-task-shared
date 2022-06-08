<?php

namespace App\Actions;

use App\Models\Subscriber;

class SubscriberDeleteAction
{
    public function __invoke(Subscriber $subscriber)
    {
        $subscriber->fields()->detach();

        $subscriber->delete();
    }
}
