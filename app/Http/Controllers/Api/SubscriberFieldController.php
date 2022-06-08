<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubscriberFieldRequest;
use App\Http\Resources\FieldResource;
use App\Models\Subscriber;

class SubscriberFieldController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  SubscriberFieldRequest  $request
     * @param  Subscriber  $subscriber
     * @param $id
     * @return FieldResource
     */
    public function store(SubscriberFieldRequest $request, Subscriber $subscriber, $id)
    {
        $subscriber->fields()->attach($id, ['value' => $request->value]);

        $subscriber->refresh();

        return new FieldResource($subscriber->fields->first(function($item) use ($id) {
            return $item->id == $id;
        }));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Subscriber  $subscriber
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Subscriber $subscriber, $id)
    {
        $subscriber->fields()->detach($id);

        return response()->json(['success' => true]);
    }
}
